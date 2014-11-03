import Ember from "ember";

export default Ember.ObjectController.extend({
  categories: function() {
    return this.get('store').all('category');
  }.property(),

  orders: function() {
    return this.get('store').all('order');
  }.property()
});