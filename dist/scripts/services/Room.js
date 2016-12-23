(function() {
  function Room($firebaseArray) {
    var Room = { };
    var ref = firebase.database().ref().child('rooms');
    Room.all = $firebaseArray(ref);
    Room.add = function (newRoom) {
        Room.all.$add(newRoom);
        console.log("newRoom", newRoom);
    };
    
      
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();


//Save for later to create messages service -- from: https://github.com/firebase/angularfire/blob/master/docs/quickstart.md
//
//var app = angular.module("sampleApp", ["firebase"]);
//app.controller("SampleCtrl", function($scope, $firebaseArray) {
//  var ref = firebase.database().ref().child("messages");
//  // create a synchronized array
//  $scope.messages = $firebaseArray(ref);
//  // add new items to the array
//  // the message is automatically added to our Firebase database!
//  $scope.addMessage = function() {
//    $scope.messages.$add({
//      text: $scope.newMessageText
//    });
//  };
//  // click on `index.html` above to see $remove() and $save() in action
//});