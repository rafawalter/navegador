module.exports = function() {

  this.Given(/^que estou na pagina inicial$/, function () {
    browser.url('file:///Users/rafaelwalter/Documents/Projetos/navegador/client/index.html');
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    expect(browser.getTitle()).toBe(titulo);
   });

   this.Given(/^vejo o filtro "([^"]*)"$/, function (texto) {
     expect(browser.isVisible('label*='+texto)).toBeTruthy();
   });

   this.Given(/^vejo diversos setores$/, function () {
     expect(browser.elements('#setores .setor').value.length).toBe(7);
  });

  this.Given(/^navego para o setor "([^"]*)"$/, function (nomeSetor) {
    browser.click('a='+nomeSetor);
  });
}
