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

  this.quantidadeDeFinaciamentosVisiveis = function() {
    return element.all(by.repeater('financiamento in financiamentosFiltrados')).count();
  };
};

module.exports = NavegadorPage;
