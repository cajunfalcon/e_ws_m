import Ember from 'ember';

export default Ember.Controller.extend({
  messageText: null,

  socketService: Ember.inject.service('websockets'),

  init() {
    this._super(...arguments);

    var socket = this.get('socketService').socketFor('ws://localhost:8080/foo/bar');

    socket.on('open', () => {
      console.log('On open called'); // eslint-disable-line no-console
    }, this);

    socket.on('close', () => {
      console.log('On close called'); // eslint-disable-line no-console
    }, this);

    socket.on('message', (messageFromSocket) => {
      this.addPost(messageFromSocket.data);
    }, this);
  },

  actions: {
    submitText: function() {
      var socket = this.get('socketService').socketFor('ws://localhost:8080/foo/bar');
      socket.send(this.get('messageText'), true);
    }
  },

  addPost: function(post) {
    this.send('addPost', post);
  },

});
