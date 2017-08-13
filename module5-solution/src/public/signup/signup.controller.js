(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', 'SignupService'];
function SignupController($scope, SignupService) {

  var vm = this;
  vm.user = {};
  vm.success = false;
  vm.error = false;
  /**
   * Submit signup for newsletter and favorite dish.
   * Dish will be added to favorites
   */
  vm.submitSignup = function(){
    SignupService.signup(vm.user).then(function(message) {
      vm.user = {};
      $scope.signupForm.$setPristine();
      vm.message = message;
      vm.error = false;
      vm.success = true;
    }).catch(function(errMessage){
      vm.color = "red";
      vm.message = errMessage;
      vm.success = false;
      vm.error = true;
    });
  }
}


})();
