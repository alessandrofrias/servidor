var app = angular.module('app',["ngRoute"]);

	app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/manterproduto", {
        templateUrl : "manter_produto_index.html",
        controller : "produtoController",
        controllerAs : "produtoController"
    })
    .when("/novoproduto", {
        templateUrl : "novo_produto.html",
        controller : "produtoController",
        controllerAs : "produtoController"
    })
    .when("/novopedido", {
        templateUrl : "novo_pedido.html",
        controller : "pedidoController",
        controllerAs : "pedidoControler"
    });
});