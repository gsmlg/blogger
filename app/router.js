import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogs');
  this.route('books');
  this.route('food');
  this.route('electronic');
});

export default Router;
