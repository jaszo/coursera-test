(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  service.getMenuItem = function (menuItem) {
    return $http.get(ApiPath + '/menu_items/' + menuItem + '.json').then(function (response) {
      return response.data;
    });
  }
}
})();
