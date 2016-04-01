angular.module("meusUtilitarios")
	.factory('servicoNavegador', function(){
    var servico = {};


		servico.calcularFinanciamentosFiltrados = function(financiamentos, filtro) {
      var financiamentosFiltrados = financiamentos.filter( function( financiamento ) {
  			if ((filtro.somenteMpme) && (!financiamento.mpme)) {
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

      return financiamentosFiltrados;
    };

    servico.calcularFinalidadesComFinanciamentos = function(financiamentos){
      var arrayFinalidadesComFinanciamentos = [];

      financiamentos.forEach(function(financiamento){
        financiamento.finalidades.forEach(function(finalidade){
          if(arrayFinalidadesComFinanciamentos.indexOf(finalidade) == -1){
            arrayFinalidadesComFinanciamentos.push(finalidade);
          }
        });
      });

      return arrayFinalidadesComFinanciamentos;
    }

    servico.calcularSetoresComFinanciamentos = function(financiamentos){
      var arraySetoresComFinanciamentos = [];

      financiamentos.forEach(function(financiamento){
        financiamento.setores.forEach(function(setor) {
          if (arraySetoresComFinanciamentos.indexOf(setor) == -1) {
            arraySetoresComFinanciamentos.push(setor);
          }
        });
      });

      return arraySetoresComFinanciamentos;
    }


    return servico;
  });
