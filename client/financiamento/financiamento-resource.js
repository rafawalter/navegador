angular.module("meusUtilitarios")
	.factory('recursoFinanciamentos', function(){
    var servico = {};

    servico.obter = function(){
      return  [
        {infoBasicas:'Apoio ao desenvolvimento, à modernização...',
					condicoesFin:'Juros a partir de TJLP + ...',
					linhasProg:'Cerealistas',
					setores:['Agropecuária'],
					finalidades:['Crédito rural','Projeto de investimento'],
					mpme:false, id:0
				},
   	  	{infoBasicas:'Apoio aos setores da produção...',
					condicoesFin:'Taxa de 8,75%...',
					linhasProg:'MODERAGRO',
					setores:['Agropecuária', 'Indústria'],
					finalidades:['Crédito rural'],
					mpme:true, id:1
				},
				{infoBasicas:'Financiamento de até R$ 20 milhões, a projetos...',
					condicoesFin:'TJLP + 1,1% a.a. ...',
					linhasProg:'BNDES Automático MPME',
					setores:['Indústria','Comércio e serviços'],
					finalidades:['Projeto de investimento'],
					mpme:true, id:2
				},
				{infoBasicas:'Apoio a empreendimentos que visem à expansão...',
					condicoesFin:'Juros a partir de TJLP +...',
					linhasProg:'BNDES Finem Energia elétrica',
					setores:['Comércio e serviços','Infraestrutura'],
					finalidades:['Projeto de investimento'],
					mpme:false, id:3
				},
				{infoBasicas:'Apoio ao capital de giro não associado a...',
					condicoesFin:'IPCA + 1,5% a.a. + spread do agente...',
					linhasProg:'BNDES ProBK Capital de Giro',
					setores:['Indústria','Comércio e serviços'],
					finalidades:['Capital de giro','Projeto de investimento'],
					mpme:false, id:4
				},
				{infoBasicas:'Financiamento destinado à aquisição de máquinas, ...',
				 	condicoesFin:'TJLP + 1,7% a.a. + spread do agente...',
					 linhasProg:'BNDES FINAME Bens de Capital',
					 setores:['Agropecuária','Comércio e serviços','Infraestrutura'],
					 finalidades:['Maquinas e equipamentos'],
					 mpme:false, id:5
				 }
			];
    }
    return servico;
  });
