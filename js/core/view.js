define(['Backbone'] function (Backbone) {

/*
  new MyView({el:'main'},{
      'roomsListView':{ el: '.rooms'}
      'chatView':{
          messagev:{el: '.message'}
          usersv:{el: '.users'}
      }
    }
  )


*/
  var Region
  var View = Backbone.View.extend({

      template: 'string or function',

      subviews{
          "this.refname": {
              deps: ['otherViewRef1','otherViewRef2'],
              'jQuerySelector': "selector OR domelement to place thisView",
              context: {},  //passthiscontext to child
              view: ViewModel,
              render: "onShow | onRender"
          }
          "this.refname":
      },

      initialize: function (options) {
          this.views = [];
      },

      render: function () {

      },

      remove: function () {

        Backbone.View.prototype.remove.apply(this);
      },

      removeView: function () {

      },

      addView: function () {

      }
    });

    return {
        View: View
    };
});
