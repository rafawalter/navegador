var NavegadorPage = function() {
  var _ = require('underscore');

  var financiamentosFiltrados = element.all(by.repeater('financiamento in financiamentosFiltrados'));

  var filtroSomenteMpme = element(by.model('filtro.somenteMpme'));

  var filtroDeSetores = element(by.model('filtro.filtrarSetores'));
  var setoresDoFiltro = element(by.id('filtroSetores')).all(by.repeater("setor in setores"));

  var filtroDeFinalidades = element(by.model('filtro.filtrarFinalidades'));
  var finalidadesDoFiltro = element(by.id('filtroFinalidades')).all(by.repeater("finalidade in finalidades"));

  this.get = function() {
    browser.get('navegador.html');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.vejoFiltro = function(texto) {
    return element(by.cssContainingText('label', texto)).isDisplayed();
  };

  this.quantidadeDeFinanciamentosComSetor = function(setor) {
    return element.all(by.cssContainingText('.setor',setor)).count();
  };

  this.quantidadeDeFinanciamentosComFinalidade = function(finalidade) {
    return element.all(by.cssContainingText('.finalidade',finalidade)).count();
  };

  this.quantidadeDeFinanciamentosVisiveis = function() {
    return financiamentosFiltrados.count();
  };

  this.valoresVisiveisDeMpme = function() {
    return element.all(by.binding('financiamento.mpme')).map(function(elm,index) {
      return elm.getText();
    }).then(function(valores) {
      return _.uniq(valores);
    });
  };

  this.clicarEmFinanciamento = function (financiamento){
    var acessarFinanciamento = financiamentosFiltrados.all(by.linkText(financiamento));
    return acessarFinanciamento.click();
  };

  this.valorContadorDeFinanciamentos = function() {
    return element(by.binding('financiamentosFiltrados.length')).getText();
  };

  this.clicarEmMpme = function() {
    return filtroSomenteMpme.click();
  };

  this.financiamentosParaSetor = function(setor) {
    return financiamentosFiltrados.all(by.repeater('setor in financiamento.setores')).all(by.cssContainingText('.setor', setor));
  };

  this.quantidadeDeFinanciamentosParaSetor = function(setor) {
    return this.financiamentosParaSetor(setor).count();
  };

  this.filtroDeSetoresHabilitado = function(filtro) {
    return filtroDeSetores.isSelected();
  };

  this.filtroDeFinalidadesHabilitado = function(filtro) {
    return filtroDeFinalidades.isSelected();
  };

  this.clicarNoFiltroDeSetores = function() {
    filtroDeSetores.click();
  };

  this.clicarNoFiltroDeFinalidades = function() {
    filtroDeFinalidades.click();
  }

  this.financiamentosParaFinalidade = function(finalidade) {
    return financiamentosFiltrados.all(by.repeater('finalidade in financiamento.finalidades')).all(by.cssContainingText('.finalidade', finalidade));
  };

  this.quantidadeDeFinanciamentosParaFinalidade = function(finalidade) {
    return this.financiamentosParaFinalidade(finalidade).count();
  };

  this.filtrarPelaFinalidade = function(finalidade) {
    return finalidadesDoFiltro.filter(function(elem, index) {
        return elem.getText().then(function(text) {
          return text == finalidade;
        });
      })
      .all(by.tagName('input'))
      .click();
  };

  this.filtrarPeloSetor = function(setor) {
    return setoresDoFiltro.filter(function(elem, index) {
        return elem.getText().then(function(text) {
          return text == setor;
        });
      })
      .all(by.tagName('input'))
      .click();
  };
};

module.exports = NavegadorPage;
