module.exports = function() {
  // implementar PageObject
  // https://github.com/webdriverio/webdriverio/blob/master/examples/pageobject/specs/checkbox.spec.js

  var IndexPage = require('./pageobjects/index.page');

  this.Given(/^que estou na pagina inicial$/, function () {
    IndexPage.open();
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    expect(IndexPage.titulo).toBe(titulo);
   });

   this.Given(/^vejo o filtro "([^"]*)"$/, function (texto) {
     expect(browser.isVisible('label*='+texto)).toBeTruthy();
   });

   this.Given(/^não vejo o filtro "([^"]*)"$/, function (texto) {
     expect(browser.isVisible('label*='+texto)).toBeFalsy();
   });

   this.Given(/^vejo diversos setores$/, function () {
     expect(IndexPage.setores.length).toBe(7);
  });

  this.Given(/^navego para o setor "([^"]*)"$/, function (nomeSetor) {
    //console.log(IndexPage.texto(nomeSetor))
    //IndexPage.setor(nomeSetor).click();
    browser.click('a='+nomeSetor);
  });
}
