import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		createTodo: function () {
			var title = this.get('newTodo').trim();
			if (!title) return;

			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			todo.save();

			this.set('newTodo', '');
		},
		clearCompleted: function () {
			var completed = this.get('completed');
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},

	remaining: Ember.computed.filterBy('model', 'isCompleted', false),
	completed: Ember.computed.filterBy('model', 'isCompleted', true),

	allAreDone: function (key, value) {
		if (value !== undefined) {
			this.setEach('isCompleted', value);
			return value;
		} else {
			var length = this.get('length');
			var completedLength = this.get('completed.length');

			return length > 0 && length === completedLength;
		}
	}.property('length', 'completed.length')
});
