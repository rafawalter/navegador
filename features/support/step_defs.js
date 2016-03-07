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

  this.Given(/^clico no setor "([^"]*)"$/, function(texto) {
    browser.click('label='+texto);
  });

  this.Given(/^vejo apenas financiamentos disponíveis para o setor "([^"]*)"$/, function (nomeSetor) {
    var contagemFinanciamentos = browser.elements('.financiamento').value.length;
    var contagemTagSetorDesejado = browser.getText('.financiamento .setor').filter(function(nomeEncontrado){
      return (nomeEncontrado == nomeSetor)||(nomeEncontrado == nomeSetor+',');
    }).length;
    expect(contagemFinanciamentos).toBe(contagemTagSetorDesejado);
  });

  this.Given(/^vejo "filtrar setores" marcado$/, function() {
    expect(browser.isSelected('#filtrarSetores')).toBeTruthy();
  });
};
