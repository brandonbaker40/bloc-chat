(function () {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
    function sendMessage (roomId, content, sentAt, username) {
        var message = {
            roomId: roomId,
            content: content,
            sentAt: sentAt,
            username: $cookies.get('blocChatUsername')
        };
        messages.$add(message);
    }
        return {
            sendMessage: sendMessage
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
    })();

