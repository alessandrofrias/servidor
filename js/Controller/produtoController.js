app.controller('produtoController', function ($scope, produtoService) {
    $scope.produtos = produtoService.getProdutos();
    $scope.produtosEditados = produtoService.getProdutos();
    $scope.produto = {};

    $scope.salvarProduto = function () {
        produtoService.salvar(angular.copy($scope.produto));
        $scope.produto = {};
    }

    $scope.editar = function (auxiliar) {
    	alert($scope.produtos[0].codigo)
    	if (auxiliar.codigo == $scope.produto.codigo) {
    		
    		angular.copy(auxiliar);	
    	}
        
    }

    $scope.salvarEditado = function (auxiliar) {
    	
        $scope.produto = $scope.produtos;
        console.log($scope.produto)
    }
});