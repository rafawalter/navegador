angular.module("meusUtilitarios", [])
	.factory('util', function() {
		var servico = {};

		servico.obterParametrosDaUrl = function() {
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
		};

		servico.removerRepeticoesDoArray = function(array) {
		    return array.sort().filter(function(item, pos, ary) {
		        return !pos || item != ary[pos - 1];
		    })
		};


		return servico;
  }).factory('recursoFinalidades', function(){
    var servico = {};

    servico.obter = function(){
      return  [
        {nome:'Maquinas e equipamentos'},
        {nome:'Mercado de capitais'},
        {nome:'Meio ambiente'},
    	  {nome:'Aquisição de software'},
    	  {nome:'Microcrédito'},
    	  {nome:'Projeto de investimento'},
    	  {nome:'Infraestrutura urbana'},
    	  {nome:'Aquisição de veículos'},
    	  {nome:'Inovação'},
    	  {nome:'Capital de giro'},
    	  {nome:'Internacionalização'},
    	  {nome:'Investimentos sociais de empresas'},
    	  {nome:'Crédito rural'},
    	  {nome:'Exportação'},
    	  {nome:'Gestão pública'},
    	  {nome:'Inclusão social e produtiva'},
    	  {nome:'Capitalização de cooperativa de crédito'},
    	];
    }

    return servico;
  });
