module.exports = function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;


  var IndexPage = new require('../../pages/index.page.js');
  var page = new IndexPage();

  var NavegadorPage = new require('../../pages/navegador.page.js');


  this.Given(/^que estou na pagina inicial$/, function () {
    page.get();
    return expect(page.title()).to.eventually.equal('Financiamentos');
  });

  this.Given(/^clico no link para ver todas as opções$/, function () {
    return page.clicarEmTodasAsOpcoes();
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    page = new NavegadorPage();
    return expect(page.title()).to.eventually.equal(titulo);
  });

  this.Given(/^vejo o filtro "([^"]*)"$/, function (texto) {
    return expect(page.vejoFiltro(texto)).to.eventually.equal(true);
  });

  this.Given(/^vejo todos os programas$/, function () {
    return expect(page.quantidadeDeFinaciamentosVisiveis()).to.eventually.be.equal(6);
  });
};
