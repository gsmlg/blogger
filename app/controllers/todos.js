import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'todo',
  needs: ['application'],
  allTodos: Ember.computed.alias('controllers.application'),
  canToggle: function () {
    var anyTodos = this.get('allTodos.length');
    var isEditing = this.isAny('isEditing');

    return anyTodos && !isEditing;
  }.property('allTodos.length', '@each.isEditing')
});
