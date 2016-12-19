(function() {
    function ModalCtrl($scope, $uibModal) {
        $scope.open = function () {
            console.log("open");
            // modalInstance and $uibModal
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();

