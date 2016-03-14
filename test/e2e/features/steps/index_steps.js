module.exports = function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;


  var IndexPage = new require('../../pages/index.page.js');
  var NavegadorPage = new require('../../pages/navegador.page.js');
  var page;

  this.Given(/^que estou na pagina inicial$/, function () {
    page = new IndexPage();
    page.get();
    return expect(page.title()).to.eventually.equal('Financiamentos');
  });

  this.Given(/^clico no link para ver todas as opções$/, function () {
    return page.clicarEmTodasAsOpcoes();
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    return expect(page.title()).to.eventually.equal(titulo).then( function() {
      page = new NavegadorPage();
    });
  });

  this.Given(/^vejo o filtro "([^"]*)"$/, function (texto) {
    return expect(page.vejoFiltro(texto)).to.eventually.be.true;
  });

  this.Given(/^vejo todos os programas$/, function () {
    return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.be.equal(6);
  });

  this.Given(/^vejo diversos setores$/, function () {
    return expect(page.quantidadeDeSetoresVisiveis()).to.eventually.be.equal(7);
  });

  this.Given(/^navego para o setor "([^"]*)"$/, function (setor) {
      return page.clicarEmSetor(setor);
  });

  this.Given(/^não vejo o filtro "([^"]*)"$/, function (texto) {
      return expect(page.vejoFiltro(texto)).to.eventually.be.false;
  });

  this.Given(/^vejo somente os programas com o setor "([^"]*)"$/, function (setor) {
    return page.quantidadeDeFinanciamentosVisiveis().then(function(quantidade) {
      return expect(page.quantidadeDeFinanciamentosComSetor(setor)).to.eventually.be.equal(quantidade);
    });
  });

};
