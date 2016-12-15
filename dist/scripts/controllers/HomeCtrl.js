(function() {
    function HomeCtrl($scope, Room) {
        $scope.rooms = Room.all;
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
