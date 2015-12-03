import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign_in', { path: '/'});
  this.route('sign_out');
});

export default Router;
