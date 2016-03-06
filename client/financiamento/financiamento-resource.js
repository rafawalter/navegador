angular.module("meusUtilitarios")
	.factory('recursoFinanciamentos', function(){
    var servico = {};

    servico.obter = function(){
      return  [
         {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'Cerealistas', setores:['Indústria'], finalidades:['Crédito rural','Exportação'], mpme:false, id:0},
   	  {infoBasicas:'Apoio aos setores da produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO', setores:['Agropecuária', 'Indústria'], finalidades:['Crédito rural'], mpme:true, id:1},
   	  ];
    }

    return servico;
  });
