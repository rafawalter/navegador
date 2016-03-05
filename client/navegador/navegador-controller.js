angular.module('navegadorApp')
  .controller('NavegadorController', function($scope, recursoSetores, recursoFinalidades, recursoFinanciamentos) {

  	$scope.setores = recursoSetores.obter();

  	$scope.finalidades = recursoFinalidades.obter();

  	$scope.filtro = {
  		somenteMpme: false,
      filtrarSetores: false,
  		setor: 'Todos',
      filtrarFinalidades: false,
  		finalidade: 'Todas',
  	};

    $scope.financiamentos = recursoFinanciamentos.obter();

  	$scope.financiamentosFiltrados = function() {
      var filtro = $scope.filtro;
  		return $scope.financiamentos.filter( function( financiamento ) {
  			if (filtro.somenteMpme && !financiamento.mpme) {
  				return false;
  			}
  			if((filtro.filtrarSetores) && (filtro.setor) && (financiamento.setores.indexOf(filtro.setor)== -1 )){
  				return false;
  			}
  			if((filtro.filtrarFinalidades) && (filtro.finalidade) && (filtro.finalidade!= 'Todas') && (financiamento.finalidades.indexOf(filtro.finalidade)== -1 )){
  				return false;
  			}
  			return true;
      });
	   };

     $scope.quantidadeDeFinanciamentosFiltrados = function() {
       return Object.keys(financiamentosFiltrados()).length;
     };
  });
