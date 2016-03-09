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

		servico.iniciarDataTable = function(locator) {
			jQuery(locator).DataTable({
				responsive: true, "language": {
						"url": "http://cdn.datatables.net/plug-ins/1.10.11/i18n/Portuguese-Brasil.json"
				}
			});
		};

		servico.tornarLinhasClicaveis = function(locator) {
			jQuery(locator+' tbody tr').click(function(){
					window.location = jQuery(this).attr('href');

					return false;
			});
		};

		return servico;
  });
