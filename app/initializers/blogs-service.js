export function initialize(container, application) {
  application.inject('route', 'blogsService', 'service:blogs');
}

export default {
  name: 'blogs-service',
  initialize: initialize
};
