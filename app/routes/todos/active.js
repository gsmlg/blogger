import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    this.store.filter('todo', function(todo){
      return !todo.get('isCompleted');
    })
  }
});
