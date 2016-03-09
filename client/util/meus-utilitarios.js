angular.module("meusUtilitarios", [])
	.factory('_', function() {
		return window._; // assumes underscore has already been loaded on the page
	}).factory('util', function() {
		var servico = {};

		servico.obterParametrosDaUrl = function() {
        var parametroNaUrl = decodeURI(window.location.search);
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
  });
