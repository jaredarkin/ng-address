function ContactController (ContactService) {
  var ctrl = this;

  ctrl.list = [];

  function getContacts () {
    ContactService
      .retrieve()
      .then(function (response){
        ctrl.list = response;
      })

  };

  getContacts();
};

angular
  .module('app')
  .controller('ContactController', ContactController);
