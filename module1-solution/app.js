(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function(){
      if ($scope.items) {
        var numberOfItems = calculateNumberOfItems($scope.items);
        if (numberOfItems > 3) {
          $scope.message = "Too much!";
        } else {
          $scope.message = "Enjoy!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    };

    function calculateNumberOfItems(string) {
      var totalItemsArray = string.split(",");
      return totalItemsArray.length;
    }

}

})();
