import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    addPost(post) {
      this.store.createRecord('post', {
        title : post,
      });
    },
  }

});
