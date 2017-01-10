function ContactController () {
  this.message = "I'm the contact controller!";

  this.list = [];

  function getContacts () {

  };
};

angular
  .module('app')
  .controller('ContactController', ContactController);
