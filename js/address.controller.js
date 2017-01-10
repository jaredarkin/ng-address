function AddressController () {
  this.message = "I'm the address controller!";
};

angular
  .module('app')
  .controller('AddressController', AddressController);
