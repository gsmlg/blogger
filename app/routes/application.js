import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      appName: 'Blogger',
      modules: [
        {
          name: 'Blogs',
          route: 'blogs'
        },
        {
          name: 'Books',
          route: 'books'
        },
        {
          name: 'Food',
          route: 'food'
        },
        {
          name: 'Electronic',
          route: 'electronic'
        }
      ]
    };
  }
});
