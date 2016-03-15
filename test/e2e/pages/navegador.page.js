var NavegadorPage = function() {
  var _ = require('underscore');

  var financiamentosFiltrados = element.all(by.repeater('financiamento in financiamentosFiltrados'));

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

  this.valoresVisiveisDaColuna = function(nomeColuna) {
    return element.all(by.binding('financiamento.mpme')).map(function(elm,index) {
      return elm.getText();
    }).then(function(valores) {
      return _.uniq(valores);
    });
  };
};

module.exports = NavegadorPage;
