app.controller('produtoController', function ($scope, produtoService) {
    $scope.produtos = produtoService.getProdutos();
    $scope.produto = {};

    $scope.salvarProduto = function () {
        produtoService.salvar(angular.copy($scope.produto));
        $scope.produto = {};
    }
});