(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {

  var $ctrl = this;
  $ctrl.service = SignupService;
  $ctrl.favoriteDishes = [];
  console.log("Initial FD: ", $ctrl.favoriteDishes); // Expect Empty

  /**
   * Submit signup for newsletter and favorite dish.
   * Dish will be added to favorites
   */
  $ctrl.submitSignup = function(favoriteDish){
    $ctrl.service.getMenuItem(favoriteDish).then(function(menuItem) {
      console.log(menuItem);
      $ctrl.favoriteDishes.push(menuItem);
      console.log("Updated FD: ", $ctrl.favoriteDishes);
      // TODO Send a message that the item was added to favorites
      /* Success message here */
    }).catch(function(err){
      // TODO Show message that item was not found.
      /* Fail message here */
      console.log(err);
      console.log("Menu item was not found");
    });
  }
}


})();
