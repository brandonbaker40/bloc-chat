(function() {
    function HomeCtrl(Room, $scope, $uibModal, Message) {
        
        $scope.rooms = Room.all;
        
        this.sentAt = "00:00"; //time placeholder
        this.username = "Anonymous User" //username placeholder
        
        this.selectRoom = function (roomId) {
            this.currentRoom = roomId.$value;
            console.log(roomId.$value);
            this.messages = Room.getMessages(this.currentRoom);
        }
        
        this.sendMessage = function () {
            Message.sendMessage(this.currentRoom, this.content, this.sentAt, this.username);
                this.content = '';
                console.log(this.content);
        }
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: function ($scope, $uibModalInstance) {
                    
                    $scope.newRoom = '';
                    
                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                    
                    $scope.createRoom = function() {
                        Room.add($scope.newRoom)
                        $uibModalInstance.close($scope.newRoom)
                    };
                },
                
            });
        }
    }
        
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', '$uibModal', 'Message', HomeCtrl]);
})();






