module.exports = function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;


  var IndexPage = new require('../../pages/index.page.js');
  var NavegadorPage = new require('../../pages/navegador.page.js');
  var page;

  this.Given(/^que estou na pagina inicial$/, function() {
    page = new IndexPage();
    page.get();
    return expect(page.title()).to.eventually.eql('Financiamentos');
  });

  this.Given(/^clico no link para ver todas as opções$/, function() {
    promise = page.clicarEmTodasAsOpcoes();
    page = new NavegadorPage();
    return promise;
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    return expect(page.title()).to.eventually.eql(titulo).then( function() {
      page = new NavegadorPage();
    });
  });

  this.Given(/^vejo todos os financiamentos$/, function () {
    return expect(page.quantidadeDeFinanciamentosVisiveis()).to.eventually.be.eql(6);
  });

  this.Given(/^vejo diversos setores$/, function () {
    return expect(page.quantidadeDeSetoresVisiveis()).to.eventually.be.eql(7);
  });

  this.Given(/^navego para o setor "([^"]*)"$/, function (setor) {
      return page.clicarEmSetor(setor);
  });

  this.Given(/^vejo somente os financiamentos com o setor "([^"]*)"$/, function (setor) {
    return page.quantidadeDeFinanciamentosVisiveis().then(function(quantidade) {
      return expect(page.quantidadeDeFinanciamentosComSetor(setor)).to.eventually.be.eql(quantidade);
    });
  });



  this.Given(/^clico no link para MPMEs$/, function() {
    promise = page.clicarEmMpme();
    page = new NavegadorPage();
    return promise;
  });

  this.Given(/^vejo o filtro "([^"]*)"$/, function(texto) {
    return expect(page.vejoFiltro(texto)).to.eventually.be.true;
  });


  this.Given(/^não vejo o filtro "([^"]*)"$/, function(texto) {
    return expect(page.vejoFiltro(texto)).to.eventually.be.false;
  });

  this.Given(/^vejo somente os financiamentos que são MPME$/, function() {
    return expect(page.valoresVisiveisDaColuna('MPME?')).to.eventually.be.eql(['true']);
  });

  this.Given(/^vejo diversas finalidades$/, function () {
    return expect(page.quantidadeDeFinalidadesVisiveis()).to.eventually.be.eql(17);
  });

  this.Given(/^navego para a finalidade "([^"]*)"$/, function (finalidade) {
      return page.clicarEmFinalidade(finalidade);
  });

  this.Given(/^vejo somente os financiamentos com a finalidade "([^"]*)"$/, function (finalidade) {
    return page.quantidadeDeFinanciamentosVisiveis().then(function(quantidade) {
      return expect(page.quantidadeDeFinanciamentosComFinalidade(finalidade)).to.eventually.be.eql(quantidade);
    });
  });

};
