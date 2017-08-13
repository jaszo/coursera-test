(function(){
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user'];
function MyInfoController(user) {
  var vm = this;
  vm.user = user;
  vm.isRegistered = vm.user.firstname ? true : false;
}

})();
