import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    removeTodo: function () {
      var todo = this.get('model');
      todo.destroyRecord();
    },
    editTodo: function () {
      this.set('isEditing', true);
    },
    doneEditing: function () {
      var bufferedTitle = this.get('bufferedTitle');
      var todo = this.get('model');
      todo.set('title', bufferedTitle);
      todo.save()
      this.set('isEditing', false);
    },
    cancelEditing: function () {
      this.set('bufferedTitle', this.get('title'));
      this.set('isEditing', false);

    }
  },
  bufferedTitle: Ember.computed.oneWay('title')
});
