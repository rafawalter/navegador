var NavegadorPage = function() {
  this.get = function() {
    browser.get('navegador.html');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.vejoFiltro = function(texto) {
    return element(by.cssContainingText('label', texto)).isDisplayed();
  };

  this.quantidadeDeFinanciamentosVisiveis = function() {
    return element.all(by.repeater('financiamento in financiamentosFiltrados')).count();
  };

  this.quantidadeDeFinanciamentosComSetor = function(setor) {
    return element.all(by.cssContainingText('.setor',setor)).count();
  };
};

module.exports = NavegadorPage;
