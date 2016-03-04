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

		return servico;
  }).factory('recursoSetores', function() {
    var servico = {};

    servico.obter = function() {
      return [
        {nome:'Todos'},
        {nome:'Administração pública'},
        {nome:'Agropecuária'},
        {nome:'Comércio e serviços'},
        {nome:'Cultura'},
        {nome:'Indústria'},
        {nome:'Infraestrutura'},
        {nome:'Saúde'},
      ];
    }

    return servico;
  });
