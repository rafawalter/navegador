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


  this.Given(/^o contador de resultados indica a quantidade correta$/, function () {
    return page.valorContadorDeFinanciamentos().then(function(contador) {
      return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.be.eql(parseInt(contador));
    });
  });

  this.Given(/^clico no checkbox "([^"]*)"$/, function (texto) {
    return page.clicarEmMpme();
  });

  this.Given(/^vejo financiamentos que são e outros que não são para MPME$/, function () {
    return expect(page.valoresVisiveisDaColuna()).to.eventually.have.members(['true','false']);
  });

  this.Given(/^vejo apenas financiamentos que são para MPME$/, function () {
    return expect(page.valoresVisiveisDaColuna()).to.eventually.be.eql(['true']);
  });

  this.Given(/^clico novamente no checkbox "([^"]*)"$/, function (texto) {
    return page.clicarEmMpme();
  });

  this.Given(/^vejo financiamentos de diversos setores$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^vejo "([^"]*)" desmarcado$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^clico no filtro do setor "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^vejo apenas financiamentos disponíveis para o setor "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^vejo "([^"]*)" marcado$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^vejo novamente financiamentos de diversos setores$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

};
