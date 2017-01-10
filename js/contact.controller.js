function ContactController ($http) {
  var ctrl = this;

  ctrl.list = [];

  function getContacts () {
    var API = '//jsonplaceholder.typicode.com/users/';
    $http.get(API)
      .then(function(response) {
        ctrl.list = response.data;
        console.log(ctrl.list);
      });
  };

  getContacts();
};

angular
  .module('app')
  .controller('ContactController', ContactController);
