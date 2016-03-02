angular.module('navegadorApp', [])
  .controller('NavegadorController', function($scope) {
  
    
	$scope.setores = [
      	{nome:'Todos'},
      	{nome:'Administração pública'},
		{nome:'Agrupecuária'},
		{nome:'Comércio e serviços'},
		{nome:'Cultura'},
		{nome:'Indústria'},
		{nome:'Infraestrutura'},
		{nome:'Saúde'},
	  ];
	$scope.setorSelecionado = "";

	$scope.finalidades = [
      {nome:'Todas'},
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
	  {nome:'Expotação'},
	  {nome:'Gestão pública'},
	  {nome:'Inclusão social e produtiva'},
	  {nome:'Capitalização de cooperativa de crédito'},
	  ];
	 $scope.finalidadeSelecionada = "";


	 $scope.resultados = [
      {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'BNDES Cerealistas'},
	  {infoBasicas:'Apoio aos setores dda produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO'},
	  ];
	 
	});