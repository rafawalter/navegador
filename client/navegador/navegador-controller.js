angular.module('navegadorApp')
  .controller('NavegadorController', function($scope, util, recursoSetores, recursoFinalidades, recursoFinanciamentos, servicoNavegador) {

    $scope.setores = recursoSetores.obter();
  	$scope.finalidades = recursoFinalidades.obter();
    $scope.financiamentos = recursoFinanciamentos.obter();

    $scope.parametrosDaUrl = util.obterParametrosDaUrl();


    $scope.filtro = {
      somenteMpme: false,
      filtrarSetores: false,
      setor: undefined,
      filtrarFinalidades: false,
      finalidade: undefined,
      setores: [],
    };


    $scope.pageTitle = 'Todos os financiamentos';
    if ($scope.parametrosDaUrl.mpme) {
      $scope.ocultarFiltroMpme = true;
      $scope.pageTitle = 'Financiamentos para MPME';
      $scope.filtro.somenteMpme = true;
    };
    if ($scope.parametrosDaUrl.setor) {
      $scope.ocultarFiltroSetores = true;
      $scope.pageTitle = 'Financiamentos para ' + $scope.parametrosDaUrl.setor;
      $scope.filtro.setor = $scope.parametrosDaUrl.setor;
      $scope.filtro.filtrarSetores = true;
    };
    if ($scope.parametrosDaUrl.finalidade) {
      $scope.ocultarFiltroFinalidades = true;
      $scope.pageTitle = 'Financiamentos para ' + $scope.parametrosDaUrl.finalidade;
      $scope.filtro.finalidade = $scope.parametrosDaUrl.finalidade;
      $scope.filtro.filtrarFinalidades = true;
    };

    $scope.setorAlterado = function() {
      $scope.filtro.filtrarSetores = true;
      $scope.filtroAlterado();
    };

    $scope.finalidadeAlterada = function() {
      $scope.filtro.filtrarFinalidades = true;
      $scope.filtroAlterado();
    };

    $scope.somenteMpmeAlterada = function(){
      $scope.filtroAlterado();
    }

    $scope.filtroAlterado = function() {
      recalcularFinanciamentosFiltrados($scope.financiamentos, $scope.filtro);
    }

    $scope.existemFinanciamentosFiltradosParaSetor = function(nomeSetor) {
      if($scope.setoresComFinanciamentos.indexOf(nomeSetor) != -1){
        return true;
      }
      return false;
    };

    $scope.existemFinanciamentosFiltradosParaFinalidade = function(nomeFinalidade) {
      if($scope.finalidadesComFinanciamentos.indexOf(nomeFinalidade) != -1){
        return true;
      }
      return false;
    };

    function recalcularFinanciamentosFiltrados(financiamentos, filtro) {
			var financiamentosFiltrados = servicoNavegador.calcularFinanciamentosFiltrados(financiamentos, filtro);
      $scope.financiamentosFiltrados = financiamentosFiltrados;
			$scope.setoresComFinanciamentos = servicoNavegador.calcularSetoresComFinanciamentos(financiamentosFiltrados);
			$scope.finalidadesComFinanciamentos = servicoNavegador.calcularFinalidadesComFinanciamentos(financiamentosFiltrados);
    }

    recalcularFinanciamentosFiltrados($scope.financiamentos, $scope.filtro);
  });
