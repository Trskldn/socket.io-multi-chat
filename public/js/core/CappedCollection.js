define(['backbone'], function(Backbone) {
    Backbone.CappedCollection = Backbone.Collection.extend({
      /**
       * Capped Collection default size
       * @type {Number}
       */
      cap:5,

      /**
       * From where should it start to remove elements
       * @type {String} "first" or "last"
       */
      capRemove:"first",

      initialize: function(models, options){
        _.extend(this, options);

        if(!(this.capRemove in {first:1, last:1})){
          throw new Error(".capRemove should either be 'first' or 'last'");
        }
        Backbone.Collection.prototype.initialize.apply(this, arguments);
      }
    });

    function _cappedAdd(func, models, options){
      func.call(this, models, options);
      if(this.length <= this.cap){return;}
      this.remove(this[this.capRemove].call(this, this.length-this.cap));
    }

    Backbone.CappedCollection.prototype.add = _.wrap(Backbone.Collection.prototype.add, _cappedAdd);

    return Backbone.CappedCollection;
});
