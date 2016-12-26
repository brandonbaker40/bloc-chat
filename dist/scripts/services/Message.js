(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
    function sendMessage (newMessage, roomId) {
        var message = { };
        messages.$add(message);
    }
        return {
            sendMessage: sendMessage
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();