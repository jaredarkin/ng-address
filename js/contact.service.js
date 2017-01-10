function ContactService ($http) {

  var API = '//jsonplaceholder.typicode.com/users/';

  function create () {

  };
  function retrieve () {
    return $http.get(API).then(function(response) {
        return response.data;
      });
  };

  function update () {

  };

  function remove () {

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
