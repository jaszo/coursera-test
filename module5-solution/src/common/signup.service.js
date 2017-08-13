(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath', '$q', 'MenuService'];
function SignupService($http, ApiPath, $q, MenuService) {
  var service = this;
  var user = {};
  service.signup = function(_user) { // _user arrives from controller
    var deferred = $q.defer();
    MenuService.getMenuItem(_user.favoriteDish).then(function(menuItem) {
      user = _user;
      user.name = menuItem.name;
      user.description = menuItem.description;
      user.itemlink = ApiPath + '/images/' + menuItem.short_name + '.jpg'
      deferred.resolve("Your information has been saved");
    }).catch(function (err){
      deferred.reject("No such menu number exists");
    });
    return deferred.promise;
  }

  service.getUser = function() {
    return user;
  }
}
})();
