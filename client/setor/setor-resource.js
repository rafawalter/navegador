angular.module("meusUtilitarios")
	.factory('recursoSetores', function() {
		var servico = {};

		servico.obter = function() {
			return [
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
