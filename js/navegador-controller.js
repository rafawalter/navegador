angular.module('navegadorApp', [])
  .controller('NavegadorController', function($scope) {

	$scope.setores = [
      	{nome:'Todos'},
      	{nome:'Administração pública'},
		{nome:'Agropecuária'},
		{nome:'Comércio e serviços'},
		{nome:'Cultura'},
		{nome:'Indústria'},
		{nome:'Infraestrutura'},
		{nome:'Saúde'},
	  ];

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
	  {nome:'Exportação'},
	  {nome:'Gestão pública'},
	  {nome:'Inclusão social e produtiva'},
	  {nome:'Capitalização de cooperativa de crédito'},
	  ];

	$scope.filtro = {
		somenteMpme: false,
		setor: 'Todos',
		finalidade: 'Todas'
	};

	 $scope.financiamentos = [
      {infoBasicas:'Apoio ao desenvolvimento, à modernização...', condicoesFin:'Juros a partir de TJLP + ...', linhasProg:'BNDES Cerealistas', setores:['Indústria'], finalidades:['Crédito rural'], mpme:false, id:0},
	  {infoBasicas:'Apoio aos setores da produção...', condicoesFin:'-Taxa de 8,75%...', linhasProg:'MODERAGRO', setores:['Agropecuária', 'Indústria'], finalidades:['Crédito rural','Exportação'], mpme:true, id:1},
	  ];

		$scope.financiamentosFiltrados = function() {
			return $scope.financiamentos.filter( function( financiamento ) {
				if ($scope.filtro.somenteMpme && !financiamento.mpme) {
					return false;
				}
				if(($scope.filtro.setor) && ($scope.filtro.setor!= 'Todos') && (financiamento.setores.indexOf($scope.filtro.setor)== -1 )){
					return false;
				}
				if(($scope.filtro.finalidade) && ($scope.filtro.finalidade!= 'Todas') && (financiamento.finalidades.indexOf($scope.filtro.finalidade)== -1 )){
					return false;
				}
				return true;

			});
		};

	});
