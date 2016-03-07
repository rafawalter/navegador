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
}
