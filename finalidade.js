angular.module('financiamentoApp', [])
  .controller('finalidadeListController', function($scope) {
    var finalidadeList = this;
	
	finalidadeList.finalidades = [
      {text:'Maquinas e equipamentos', selected:false},
      {text:'Mercado de capitais', selected:false},
      {text:'Meio ambiente', selected:false},
	  {text:'Aquisição de software', selected:false},
	  {text:'Microcrédito', selected:false},
	  {text:'Projeto de investimento', selected:false},
	  {text:'Infraestrutura urbana', selected:false},
	  {text:'Aquisição de veículos', selected:false},
	  {text:'Inovação', selected:false},
	  {text:'Capital de giro', selected:false},
	  {text:'Internacionalização', selected:false},
	  {text:'Investimentos sociais de empresas', selected:false},
	  {text:'Crédito rural', selected:false},
	  {text:'Expotação', selected:false},
	  {text:'Gestão pública', selected:false},
	  {text:'Inclusão social e produtiva', selected:false},
	  {text:'Capitalização de cooperativa de crédito', selected:false},
	  ];
	  
	 $scope.selected = "Maquinas e equipamentos";
  });