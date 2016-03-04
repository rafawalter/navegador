angular.module('financiamentoApp',[])
  	.controller('FinanciamentoController', function($scope) {

	    $scope.financiamentos = [
	       {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'BNDES Cerealistas', setores:['Indústria'], finalidades:['Crédito rural'], mpme:false, id:0},
         {infoBasicas:'Apoio aos setores da produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO', setores:['Agropecuária', 'Indústria'], finalidades:['Crédito rural','Exportação'], mpme:true, id:1},
		];


    function obterParametrosDaUrl(){
      var parametroNaUrl = window.location.search;
      var parametrosArray = parametroNaUrl.replace('?','').split("&");
      var parametrosHash = {};

      parametrosArray.forEach(function (elemento){
          var elementoSplitado = elemento.split('=');
          var chave = elementoSplitado[0];
          var valor = elementoSplitado[1];
          parametrosHash[chave] = valor;
      });
      return parametrosHash;
    }

    function obterId() {
        var parametrosDaUrl = obterParametrosDaUrl();
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
