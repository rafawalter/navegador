angular.module('navegadorApp')
  .controller('NavegadorController', function($scope, util, recursoSetores, recursoFinalidades, recursoFinanciamentos) {

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

    $scope.filtroAlterado = function() {
      recalcularFinanciamentosFiltrados();
    }


    function recalcularFinanciamentosFiltrados() {
      $scope.financiamentosFiltrados = calcularFinanciamentosFiltrados();
    }

    function calcularFinanciamentosFiltrados() {
      var filtro = $scope.filtro;
      
      var financiamentosFiltrados = $scope.financiamentos.filter( function( financiamento ) {
  			if (filtro.somenteMpme && !financiamento.mpme) {
  				return false;
  			}
  			if((filtro.filtrarSetores) && (filtro.setor) && (financiamento.setores.indexOf(filtro.setor)== -1 )){
  				return false;
  			}
  			if((filtro.filtrarFinalidades) && (filtro.finalidade) && (financiamento.finalidades.indexOf(filtro.finalidade)== -1 )){
  				return false;
  			}
  			return true;
      });

      $scope.setoresComFinanciamentos = calcularSetoresComFinanciamentos(financiamentosFiltrados);

      return financiamentosFiltrados;
    };

    function calcularSetoresComFinanciamentos(financiamentos){
      var arraySetoresComFinanciamentos= [];

      financiamentos.forEach(function(financiamento){
        financiamento.setores.forEach(function(setor) {
          if (arraySetoresComFinanciamentos.indexOf(setor) == -1) {
            arraySetoresComFinanciamentos.push(setor);
          }
        });
      });

      return arraySetoresComFinanciamentos;
    }

    $scope.existemFinanciamentosFiltradosParaSetor = function(nomeSetor) {
      if($scope.setoresComFinanciamentos.indexOf(nomeSetor) != -1){
        return true;
      }
      return false;
    };
    recalcularFinanciamentosFiltrados();
  });
