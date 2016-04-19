var cdb = require('cartodb.js');
var PopupContentClickStyleView = require('./popup-content-style-view');
var PopupContentClickItemsView = require('./popup-content-items-view');

/**
 * Select for a Widget definition type.
 */
module.exports = cdb.core.View.extend({

  initialize: function (opts) {
  },

  render: function () {
    this.clearSubViews();
    this.$el.empty();

    // TODO: carousel
    var styleView = new PopupContentClickStyleView({
    });
    this.addView(styleView);
    this.$el.append(styleView.render().el);

    var itemsView = new PopupContentClickItemsView({
    });
    this.addView(itemsView);
    this.$el.append(itemsView.render().el);

    return this;
  }

});