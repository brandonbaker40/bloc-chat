(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });
        
      $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatUsername');
        if (!currentUser || currentUser === '') {
          var userModal = $uibModal.open({
                templateUrl: '/templates/new_user.html',
                backdrop: 'static', //prevents close modal
                keyboard: false, //prevents close modal on ESC key
                controller: function ($scope, $uibModalInstance) {
                    $scope.usernameLength = 1;
                    $scope.newUsername = '';
                    
                    $scope.createUser = function() {
                        $uibModalInstance.close($cookies.put('blocChatUsername',$scope.newUsername));
                    };
                },
            });
        }
      }
    

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

  
