var FinanciamentoPage = function() {

  this.get = function() {
    browser.get('financiamento.html');
  };

  this.title = function() {
    return browser.getTitle();
  };

};
module.exports = FinanciamentoPage;
