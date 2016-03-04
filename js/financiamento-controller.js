angular.module('navegadorApp')
  	.controller('FinanciamentoController', function($scope, util) {

	    $scope.financiamentos = [
	       {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'BNDES Cerealistas', setores:['Indústria'], finalidades:['Crédito rural'], mpme:false, id:0},
         {infoBasicas:'Apoio aos setores da produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO', setores:['Agropecuária', 'Indústria'], finalidades:['Crédito rural','Exportação'], mpme:true, id:1},
		];

    function obterId() {
        var parametrosDaUrl = util.obterParametrosDaUrl();
        console.log(parametrosDaUrl);
        return parametrosDaUrl.id;
      //  var id = $location.search().id;
    };

    var id = obterId();
    if (!id) {
      $scope.mensagem = 'informe o id na url';
      //$scope.mensagem = 'Não encontrei o financiamento ['+id+']'
    };
    console.log(id);


	  $scope.financiamento = $scope.financiamentos[id];
	});
