function ContactController (ContactService) {
  var ctrl = this;
  ctrl.newContactName = '';
  ctrl.newContactEmail = '';
  ctrl.list = [];

  function getContacts () {
    ContactService
      .retrieve()
      .then(function (response){
        ctrl.list = response;
      })
  };

  ctrl.addContact = function() {
    ContactService
      .create({
        name: ctrl.newContactName,
        email: ctrl.newContactEmail
      })
      .then(function(response){
        ctrl.list.unshift(response);
        ctrl.newContactName = '';
        ctrl.newContactEmail = '';
      });
  };

  ctrl.removeContact = function (contact, index) {
    ContactService
      .remove(contact)
      .then(function(response){
        ctrl.list.splice(index, 1);
      })
  };

  getContacts();
};

angular
  .module('app')
  .controller('ContactController', ContactController);
