(function() {
    function HomeCtrl(Room, $scope, $uibModal) {
        $scope.rooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: function ($scope, $uibModalInstance) {
                    
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
        .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();