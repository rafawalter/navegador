angular.module('navegadorApp')
  .controller('NavegadorController', function($scope, recursoSetores, recursoFinalidades, recursoFinanciamentos) {

  	$scope.setores = recursoSetores.obter();

  	$scope.finalidades = recursoFinalidades.obter();

  	$scope.filtro = {
  		somenteMpme: false,
  		setor: 'Todos',
  		finalidade: 'Todas'
  	};

    $scope.financiamentos = recursoFinanciamentos.obter();

  	$scope.financiamentosFiltrados = function() {
  		return $scope.financiamentos.filter( function( financiamento ) {
  			if ($scope.filtro.somenteMpme && !financiamento.mpme) {
  				return false;
  			}
  			if(($scope.filtro.setor) && ($scope.filtro.setor!= 'Todos') && (financiamento.setores.indexOf($scope.filtro.setor)== -1 )){
  				return false;
  			}
  			if(($scope.filtro.finalidade) && ($scope.filtro.finalidade!= 'Todas') && (financiamento.finalidades.indexOf($scope.filtro.finalidade)== -1 )){
  				return false;
  			}
  			return true;
      });
	   };
  });
