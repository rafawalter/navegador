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
    return expect(page.valoresVisiveisDeMpme()).to.eventually.have.members(['true','false']);
  });

  this.Given(/^vejo apenas financiamentos que são para MPME$/, function () {
    return expect(page.valoresVisiveisDeMpme()).to.eventually.be.eql(['true']);
  });

  this.Given(/^clico novamente no checkbox "([^"]*)"$/, function (texto) {
    return page.clicarEmMpme();
  });

  this.Given(/^vejo financiamentos para o setor "([^"]*)"$/, function (setor) {
    return expect(page.financiamentosParaSetor(setor)).to.exist;
  });

  this.Given(/^vejo financiamentos que não são para o setor "([^"]*)"$/, function (setor) {
      return page.quantidadeDeFinanciamentosParaSetor(setor).then(function(quantidadeDeFinanciamentosComSetor) {
        return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.not.be.eql(quantidadeDeFinanciamentosComSetor);
      });
  });

  this.Given(/^vejo o filtro de setores desmarcado$/, function () {
    return expect(page.filtroDeSetoresHabilitado()).to.eventually.be.false;
  });

  this.Given(/^filtro pelo setor "([^"]*)"$/, function (setor) {
    return page.filtrarPeloSetor(setor);
  });

  this.Given(/^vejo apenas financiamentos disponíveis para o setor "([^"]*)"$/, function (setor) {
    return page.quantidadeDeFinanciamentosParaSetor(setor).then(function (quantidadeDeFinanciamentosComSetor){
      return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.be.eql(quantidadeDeFinanciamentosComSetor);
    });
  });

  this.Given(/^vejo o filtro de setores marcado$/, function () {
    return expect(page.filtroDeSetoresHabilitado()).to.eventually.be.true;
  });

  this.Given(/^desmarco o filtro de setores$/, function () {
    return page.clicarNoFiltroDeSetores();
  });

  this.Given(/^vejo financiamentos para a finalidade "([^"]*)"$/, function (finalidade) {
    return expect(page.financiamentosParaFinalidade(finalidade)).to.exist;
  });

  this.Given(/^vejo financiamentos que não são para a finalidade "([^"]*)"$/, function (finalidade) {
    return page.quantidadeDeFinanciamentosParaFinalidade(finalidade).then(function(quantidadeDeFinanciamentosComFinalidade) {
      return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.not.be.eql(quantidadeDeFinanciamentosComFinalidade);
    });
  });

  this.Given(/^vejo o filtro de finalidades desmarcado$/, function () {
    return expect(page.filtroDeFinalidadesHabilitado()).to.eventually.be.false;
  });

  this.Given(/^filtro pela finalidade "([^"]*)"$/, function (finalidade) {
    return expect(page.filtrarPelaFinalidade(finalidade));
  });

  this.Given(/^vejo apenas financiamentos disponíveis para a finalidade "([^"]*)"$/, function (finalidade) {
    return page.quantidadeDeFinanciamentosParaFinalidade(finalidade).then(function (quantidadeDeFinanciamentosComFinalidade){
      return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.be.eql(quantidadeDeFinanciamentosComFinalidade);
    });
  });

  this.Given(/^vejo o filtro de finalidades marcado$/, function () {
    return expect(page.filtroDeFinalidadesHabilitado()).to.eventually.be.true;
  });

  this.Given(/^desmarco o filtro de finalidades$/, function () {
    return page.clicarNoFiltroDeFinalidades();
  });

};
