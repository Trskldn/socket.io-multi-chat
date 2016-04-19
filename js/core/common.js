define(['Backbone'], function(Backbone){

  // var _ = require('underscore');
  // var $ = require('jquery');
  // var Backbone = require('Backbone');

  var ModelView =  Backbone.View.extend({
    // initialize (options) {
    //   if (options.template) this.template = options.template;
    //   Backbone.View.prototype.initialize.apply(this, arguments);
    // }

    attachElContent(html) {
      this.$el.html(html);

      return this;
    },

    _renderTemplate() {
      var data = this.serializeData();
      var renderedHtml;

      // If template is a function assume that is a compiled
      // template, if not assume that is a CSS selector where
      // the template is defined and is compatible with
      // underscore templates
      if (_.isFunction(this.template)) {
        renderedHtml = this.template(data);
      } else if (_.isString(this.template)) {
        var compiledTemplate = this.compileTemplate();
        renderedHtml = compiledTemplate(data);
      }
      return renderedHtml;   
    },

    render() {
      // Get JSON representation of the model
      var renderedHtml = this._renderTemplate();
      this.attachElContent(renderedHtml);
      // Call onRender callback if is available
      if (this.onRender) {
        this.onRender();
      }

      return this;
    },

    // Compile template with underscore templates. This method
    // can be redefined to implemente another template engine
    // like Handlebars or Jade
    compileTemplate() {
      return _.template(this.template);
    },

    // Transform Model into JSON representation
    serializeData() {
      var data;

      // Only when model is available
      if (this.model) {
        data = this.model.toJSON();
      }

      return data;
    }
  })

  var CollectionView = ModelView.extend({
     // childViewContainer
     // template

    initialize(options) {
      this.childViewContainer = this.childViewContainer || options && options.childViewContainer;
      // Keep track of rendered items
      this.children = {};

      // Bind collection events to automatically insert
      // and remove items in the view
      this.listenTo(this.collection, 'add', this.modelAdded);
      this.listenTo(this.collection, 'remove', this.modelRemoved);
      this.listenTo(this.collection, 'reset', this.render);
    },

    // Render a model when is added to the collection
    modelAdded(model) {
      var view = this.renderModel(model);
      this.$el.append(view.$el);
    },

    // Close view of model when is removed from the collection
    modelRemoved(model) {
      if (!model) return;

      var view = this.children[model.cid];
      this.closeChildView(view);
    },

    render() {
      var renderedHtml;
      if (this.template) {
        renderedHtml = this._renderTemplate();
        this.attachElContent(renderedHtml);
        this.$childViewContainer = this.$el.find(this.childViewContainer);
      }
      // Clean up any previous elements rendered
      this.closeChildren();

      // Render a view for each model in the collection
      var html = this.collection.map(model => {
        var view = this.renderModel(model);
        return view.$el;
      });

      // Put the rendered items in the DOM
      // this.$el.html(html);
      (this.$childViewContainer || this.$el).html(html);
      return this;
    },

    renderModel(model) {
      // Create a new view instance, modelView should be
      // redefined as a subclass of Backbone.View
      var view = new this.modelView({model: model});

      // Keep track of which view belongs to a model
      this.children[model.cid] = view;

      // Re-trigger all events in the children views, so that
      // you can listen events of the children views from the
      // collection view
      this.listenTo(view, 'all', eventName => {
        this.trigger('item:' + eventName, view, model);
      });

      view.render();
      return view;
    },

    // Called to close the collection view, should close
    // itself and all the live childrens
    remove() {
      Backbone.View.prototype.remove.call(this);
      this.closeChildren();
    },

    // Close all the live childrens
    closeChildren() {
      var children = this.children || {};
      _.each(children, child => this.closeChildView(child));
    },

    // Close a single children at time
    closeChildView(view) {
      // Ignore if view is not valid
      if (!view) return;

      // Call the remove function only if available
      if (_.isFunction(view.remove)) {
        view.remove();
      }

      // Remove event hanlders for the view
      this.stopListening(view);

      // Stop tracking the model-view relationship for the
      // closed view
      if (view.model) {
        this.children[view.model.cid] = undefined;
      }
    }
  })

  class Region {
    constructor(options) {
      this.el = options.el;
    }

    // Closes any active view and render a new one
    show(view) {
      this.closeView(this.currentView);
      this.currentView = view;
      this.openView(view);
    }

    closeView(view) {
      // Only remove the view when the remove function
      // is available
      if (view && view.remove) {
        view.remove();
      }
    }

    openView(view) {
      // Be sure that this.$el exists
      this.ensureEl();

      // Render the view on the this.$el element
      view.render();
      this.$el.html(view.el);

      // Callback when the view is in the DOM
      if (view.onShow) {
        view.onShow();
      }
    }

    // Create the this.$el attribute if do not exists
    ensureEl() {
      if (this.$el) return;
      this.$el = $(this.el);
    }

    // Close the Region and any view on it
    remove() {
      this.closeView(this.currentView);
    }
  }

  var Layout = ModelView.extend({
    render() {
      // Clean up any rendered DOM
      this.closeRegions();

      // Render the layout template
      var result = ModelView.prototype.render.call(this);

      // Creand and expose the configurated regions
      this.configureRegions();
      return result;
    },

    configureRegions() {
      var regionDefinitions = this.regions || {};

      if (!this._regions) {
        this._regions = {};
      }

      // Create the configurated regions and save a reference
      // in the this._regions attribute
      _.each(regionDefinitions, (selector, name) => {
        let $el = this.$(selector);
        this[name] = this._regions[name] = new Region({el: $el});
      });
    },

    // Get a Region instance for a named region
    getRegion(regionName) {
      var regions = this._regions || {};
      return regions[regionName];
    },

    // Close the layout and all the regions on it
    remove(options) {
      ModelView.prototype.remove.call(this, options);
      this.closeRegions();
    },

    closeRegions() {
      var regions = this._regions || {};

      // Close each active region
      _.each(regions, region => {
        if (region && region.remove) region.remove();
      });
    }
  })

 return {ModelView, CollectionView, Region, Layout};

});
