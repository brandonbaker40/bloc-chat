(function() {
    function HomeCtrl(Room, $scope, $uibModal, Message) {
        
        $scope.rooms = Room.all;
        
        this.selectRoom = function (roomId) {
            this.currentRoom = roomId;
            this.messages = Room.getMessages(this.currentRoom.$id);

        }
        
        this.sendMessage = function () {
            Message.sendMessage(home.newMessage, home.currentRoom.$id);
            home.newMessage = "";
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





