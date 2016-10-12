(function () {
'use strict';
/*
 * Hint: The items state can have the same type
 * of setup as the categories state.
 */

angular.module('Data')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['menuitems'];
function ItemsListController(menuitems) {

  var itemsList = this;
  itemsList.menuitems = menuitems.data.menu_items;
}

})();
