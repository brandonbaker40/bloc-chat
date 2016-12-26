(function() {
    function ModalCtrl($scope, $uibModal) {
        this.open = function () {

            var modalInstance = $uibModal.open({
              templateUrl: '/templates/modal.html',
              controller: function($scope, $uibModalInstance){
                $scope.cancel = function() {
                      $uibModalInstance.dismiss('cancel');
                };

                $scope.submit = function() {
                      $uibModalInstance.close($scope.name);
                };
              }

             });
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();

