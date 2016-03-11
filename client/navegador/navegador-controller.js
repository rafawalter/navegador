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
    };

    $scope.finalidadeAlterada = function() {
      $scope.filtro.filtrarFinalidades = true;
    };

  	$scope.financiamentosFiltrados = function() {
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
      console.log('aqui');
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
/*
      var nomesSetoresPossiveis = [];
     function adicionarSetoresPossiveis(nomesSetores) {
        console.log('adicionando '+nomesSetores);
        nomesSetores.forEach(function(nomeSetor) {
        if (nomesSetoresPossiveis.indexOf(nomeSetor) == -1) {
           nomesSetoresPossiveis.push(nomeSetor);
        }
        console.log('possíveis: ', nomesSetoresPossiveis);
       });
     };

     $scope.setoresEnriquecidos = $scope.setores.map(function(setor) {
       setor.possivel = (nomesSetoresPossiveis.indexOf(setor.nome) != -1);
       return setor;
     });

     console.log('setores: ',$scope.setores);
     console.log('setores possiveis: ',nomesSetoresPossiveis);
     console.log('setores enriquecidos: ',$scope.setoresEnriquecidos);
     */
  });
