module.exports = function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;


  var FinanciamentoPage = new require('../../pages/financiamento.page.js');
  var NavegadorPage = new require('../../pages/navegador.page.js');
  var page;

  this.Given(/^que estou na pagina do navegador$/, function () {
    page = new NavegadorPage();
    page.get();
    return expect(page.title()).to.eventually.eql('Todos os financiamentos');
  });

  this.Given(/^clico no financiamento "([^"]*)"$/, function (financiamento) {
    var promise = page.clicarEmFinanciamento(financiamento);
    page = new FinanciamentoPage();
      return promise;
  });

  this.Given(/^vejo a página "([^"]*)"$/, function (titulo) {
    return expect(page.title()).to.eventually.eql(titulo).then( function() {
    });
  });

};
