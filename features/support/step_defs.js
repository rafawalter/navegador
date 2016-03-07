module.exports = function() {
  this.Given(/^que estou na pagina do navegador$/, function() {
    browser.url('file:///Users/rafaelwalter/Documents/Projetos/navegador/client/navegador.html');
  });

  this.Given('clico no link "$texto"', function(texto) {
    var locator = 'a=' + texto;
    browser.click(locator);
  });

  this.Given('vejo a página "$titulo"', function(titulo) {
    expect(browser.getText('h1')).toEqual(titulo);
  });

  this.Given(/^vejo financiamentos que são e outros que não são para MPME$/, function() {
    expect(browser.isVisible('.mpme=true')).toBeTruthy();
    expect(browser.isVisible('.mpme=false')).toBeTruthy();
  });

  this.Given(/^clico (?:novamente )*no checkbox "([^"]*)"$/, function(texto) {
    browser.click('label='+texto);
  });

  this.Given(/^vejo apenas financiamentos que são para MPME$/, function () {
    expect(browser.isVisible('.mpme=true')).toBeTruthy();
    expect(browser.isVisible('.mpme=false')).toBeFalsy();
  });

};
