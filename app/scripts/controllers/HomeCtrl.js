(function() {
    function HomeCtrl(Room, $scope, $uibModal, Message) {
        
        $scope.rooms = Room.all;
        
        var home = this;
        this.selectRoom = function (roomId) {
            home.currentRoom = roomId.$value;
            console.log(roomId.$value);
        }
        
        this.sendMessage = function () {
            Message.sendMessage(this.content, home.currentRoom);
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





