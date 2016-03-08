module.exports = function() {
  var NavegadorPage = require('../pageobjects/navegador.page');
  var Page = require('../pageobjects/page');

  this.Given(/^que estou na pagina do navegador$/, function() {
    NavegadorPage.open();
  });

  this.Given('clico no setor "$nome"', function(nome) {
    NavegadorPage.clicarNoSetor(nome);
  });

  this.Given('vejo a página "$titulo"', function(titulo) {
    expect(Page.titulo()).toEqual(titulo);
//    expect(browser.getText('h1')).toEqual(titulo);
  });

  this.Given(/^vejo financiamentos que são e outros que não são para MPME$/, function() {
    expect(browser.isVisible('.mpme=true')).toBeTruthy();
    expect(browser.isVisible('.mpme=false')).toBeTruthy();
  });

  this.Given(/^clico (?:novamente )*no checkbox "([^"]*)"$/, function(texto) {
    browser.click('label=' + texto);
  });

  this.Given(/^vejo apenas financiamentos que são para MPME$/, function() {
    expect(browser.isVisible('.mpme=true')).toBeTruthy();
    expect(browser.isVisible('.mpme=false')).toBeFalsy();
  });

  this.Given(/^vejo (?:novamente )*financiamentos de diversos setores$/, function() {
    expect(uniq(browser.getText('.setor')).length).toBeGreaterThan(1);
  });

  function uniq(array) {
    return array.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
    })
  };

  this.Given(/^vejo "filtrar setores" desmarcado$/, function() {
    expect(browser.isSelected('#filtrarSetores')).toBeFalsy();
  });

  this.Given(/^clico no filtro do setor "([^"]*)"$/, function(texto) {
    browser.click('label='+texto);
  });

  this.Given(/^vejo apenas financiamentos disponíveis para o setor "([^"]*)"$/, function (nomeSetor) {
    var contagemFinanciamentos = browser.elements('.financiamento').value.length;
    var contagemTagSetorDesejado = browser.getText('.financiamento .setor').filter(function(nomeEncontrado){
      return (nomeEncontrado == nomeSetor)||(nomeEncontrado == nomeSetor+',');
    }).length;
    //console.log(browser.element('.financiamento').elements('.setor*="Agropecuaria”').length);
    expect(contagemFinanciamentos).toBe(contagemTagSetorDesejado);
  });

  this.Given(/^vejo "filtrar setores" marcado$/, function() {
    expect(browser.isSelected('#filtrarSetores')).toBeTruthy();
  });

  this.Given(/^o contador de resultados indica a quantidade correta$/, function () {
    var contagemFinanciamentos = browser.elements('.financiamento').value.length;
    var valorNoContador = Number(browser.getText('#contador-de-financiamentos'));
    expect(contagemFinanciamentos).toBe(valorNoContador);
  });

};
