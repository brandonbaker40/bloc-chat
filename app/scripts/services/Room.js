(function() {
  function Room($firebaseArray) {
    var Room = { };
    var ref = firebase.database().ref().child('rooms');
    
    Room.all = $firebaseArray(ref);
    
    Room.add = function (newRoom) {
        Room.all.$add(newRoom);
        console.log("newRoom", newRoom);
    };
    
    var messageRef = firebase.database().ref().child('messages');
      
    function getMessages (roomId) {
        var messages = firebase.database().ref().child('messages');
        return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId));
    }
      
     /* var getMessages = function (roomId){
        var messages = firebase.database().ref().child('messages');
        return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId))
		
    }*/
    
    return Room;
   /* return {
        all: Room,
        createRoom: createRoom,
        getMessages: getMessages
    };*/
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
