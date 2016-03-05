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
  }).factory('recursoFinanciamentos', function(){
    var servico = {};

    servico.obter = function(){
      return  [
         {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'BNDES Cerealistas', setores:['Indústria'], finalidades:['Crédito rural'], mpme:false, id:0},
   	  {infoBasicas:'Apoio aos setores da produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO', setores:['Agropecuária', 'Indústria'], finalidades:['Crédito rural','Exportação'], mpme:true, id:1},
   	  ];
    }

    return servico;
  });
