app.controller('pedidoController',indexController)

		indexController.$inject=['$scope']
			function indexController($scope) {
				$scope.pedidos = [];
			$scope.salvarProduto = function() {
				var copiaDoObjeto = angular.copy($scope.pedido);
				$scope.pedidos.push(copiaDoObjeto);
				$scope.pedido = {};
			}
		}