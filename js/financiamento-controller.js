angular.module('financiamentoApp',[])
  	.controller('FinanciamentoController', function($scope) {

	    $scope.financiamentos = [
	      {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'BNDES Cerealistas', setores:['Indústria'], finalidades:['Crédito rural'], mpme:false, id:1},
		  {infoBasicas:'Apoio aos setores da produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO', setores:['Agropecuária', 'Indústria'], finalidades:['Crédito rural','Exportação'], mpme:true, id:2},
		];

	    $scope.financiamento = $scope.financiamentos[0];

	});
