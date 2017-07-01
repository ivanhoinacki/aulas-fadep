
angular.module("app").config(function($routeProvider){

    $routeProvider
    .when("/contatos", {
        templateUrl : "src/view/contato.html",
        controller : "universidadeController",
        controllerAs : "vm"
      })
      .otherwise({
        redirectTo : "/contatos"
      });
});
