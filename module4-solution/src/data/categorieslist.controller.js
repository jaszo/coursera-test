(function () {
'use strict';

/*
 * Hint: The categories state can have a controller
 * as well as a resolve. The resolve will use the
 * MenuDataService to retrieve categories and inject
 * them into the controller. The controller can then
 * expose the retrieved categories object such that
 * it can be simply passed into the categories component.
 */
angular.module('Data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var categoriesList = this;
  categoriesList.items = items.data;
}

})();
