(function() {
'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'narrowMenuList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

// NarrowItDownController declaration
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.nothingFound = false;

  // List of the narrowed menu items.
  menu.narrowItDownForMe = function(searchTerm) {
    if (searchTerm === ""){
      menu.found = [];
      menu.nothingFound = true;
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        console.log(response);
        if(response.length == "0") {
          menu.found = [];
          menu.nothingFound = true;
        } else {
          menu.nothingFound = false;
          menu.found = response;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  };

  // Removes the item.
  menu.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}

// MenuSearchService declaration
MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];
  // Retrieves the list of all matched menu items.
  service.getMatchedMenuItems = function(searchTerm) {

    return $http({
      method: "GET",
      url: (ApiBasePath) + "/menu_items.json"
    }).then(function (result) {
      foundItems = [];
      // process result and only keep items that match
      for (var i = 0; i < result.data.menu_items.length; i++) {
        var name = result.data.menu_items[i].description;
        if (name.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(result.data.menu_items[i]);
        }
      }
      // return processed items
      return foundItems;
    });
  }

  // Removes an item
  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };
}

})();
