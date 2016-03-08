module.exports = function() {
  var IndexPage = require('../pageobjects/index.page');

  this.Given(/^que estou na pagina inicial$/, function () {
    IndexPage.open();
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    expect(IndexPage.titulo()).toBe(titulo);
   });

   this.Given(/^vejo o filtro "([^"]*)"$/, function (nomeFiltro) {
     expect(IndexPage.vejoFiltro(nomeFiltro)).toBeTruthy();
   });

   this.Given(/^não vejo o filtro "([^"]*)"$/, function (nomeFiltro) {
     expect(IndexPage.vejoFiltro(nomeFiltro)).toBeFalsy();
   });

   this.Given(/^vejo diversos setores$/, function () {
     expect(IndexPage.setores.length).toBe(7);
  });

  this.Given(/^navego para o setor "([^"]*)"$/, function (nomeSetor) {
    IndexPage.clicarNoSetor(nomeSetor);
  });
}
