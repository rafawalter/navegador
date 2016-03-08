angular.module('navegadorApp')
  	.controller('FinanciamentoController', function($scope, util, recursoFinanciamentos) {

	    $scope.financiamentos = recursoFinanciamentos.obter();

    function obterId() {
        var parametrosDaUrl = util.obterParametrosDaUrl();
        return parametrosDaUrl.id;
      //  var id = $location.search().id;
    };

    var id = obterId();
    if (!id) {
      $scope.mensagem = 'informe o id na url';
      //$scope.mensagem = 'Não encontrei o financiamento ['+id+']'
    };

	  $scope.financiamento = $scope.financiamentos[id];
    $scope.pageTitle = $scope.financiamento.linhasProg;
	});
