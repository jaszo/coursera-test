(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Injecting the ShoppingListCheckOffService Service into ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  // Display the initial items.
  toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getItems();

  // Event handler when user clicks Bought button.
  toBuyCtrl.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

}

// Injecting the ShoppingListCheckOffService Service into AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtCtrl = this;

  // Get bought items.
  alreadyBoughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

// Service function to be injected at the controllers
// Allows communication among the controllers.
function ShoppingListCheckOffService() {
  var service = this;

  // Initial List of To Buy Shopping Items.
  var items = [
    {
      name: "chips",
      quantity: 5
    },
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "strawberries",
      quantity: 50
    },
    {
      name: "popcorn",
      quantity: 3
    },
    {
      name: "bananas",
      quantity: 5
    }
  ];

  // Dynamic Lists of Bought Shopping Items.
  // Gets updated every time user clicks the Bought button
  // Until no items are available.
  var boughtItems = [];

  //
  // This method grabs the item index from the current
  // array of To Buy Shopping Items and goes ahead and
  // adds them to the array of Bought Shopping Items.
  // The Buy Shopping Items is updated without the bought
  // item.
  //
  service.buyItem = function (itemIdex) {
    // Add to boughtItems
    boughtItems.push(items[itemIdex]);
    // Remove item from items
    items.splice(itemIdex, 1);
  };

  //
  // Obtains the current list of To Buy Shopping Items
  //
  service.getItems = function () {
    return items;
  };

  //
  // Obtains the current list of Bought Shopping Items
  //
  service.getBoughtItems = function () {
    return boughtItems;
  }
}

})();
