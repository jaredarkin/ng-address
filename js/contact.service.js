function ContactService ($http) {

  var API = '//jsonplaceholder.typicode.com/users/';

  function create (contact) {
    return $http.post(API, contact).then(function(response) {
      return response.data;
    })
  };

  function retrieve () {
    return $http.get(API).then(function(response) {
        return response.data;
      });
  };

  function update () {

  };

  function remove (contact) {
    return $http.delete(API + contact.id).then(function (response) {
      return response.data;
    })
  };

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  };
};

angular
  .module('app')
  .factory('ContactService', ContactService);
