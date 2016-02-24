var cdb = require('cartodb.js');
var LayerSelectorView = require('../layer-selector-view');
var template = require('./formula-option.tpl');

/**
 * View for an individual formula option.
 */
module.exports = cdb.core.View.extend({

  events: {
    'click .js-checkbox': '_onSelect'
  },

  initialize: function (opts) {
    this.listenTo(this.model, 'change:layer_index', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
  },

  render: function () {
    this.clearSubViews();
    this.$el.html(this._html());
    this._renderLayerSelector();
    return this;
  },

  _html: function () {
    var i = this.model.get('layer_index');
    var tuples = this.model.get('tuples');

    return template({
      columnName: tuples[i].columnModel.get('name'),
      isSelected: !!this.model.get('selected')
    });
  },

  _renderLayerSelector: function () {
    var view = new LayerSelectorView({
      model: this.model
    });
    this.addView(view);
    this.$el.append(view.render().el);
  },

  _onSelect: function () {
    this.model.set('selected', !this.model.get('selected'));
  }

});