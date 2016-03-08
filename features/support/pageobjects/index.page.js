var page = require('./page');

var indexPage = Object.create(page, {
  open: { value: function() {
    page.open.call(this, 'file:///Users/rafaelwalter/Documents/Projetos/navegador/client/index.html')
  }},

  titulo: {get: function() { return browser.getTitle(); }},
  setores: {get: function() { return browser.elements('#setores .setor').value; }},
  clicarNoSetor: {value: function(nomeSetor) { browser.click('a='+nomeSetor); }},
  vejoFiltro: {value: function(nomeFiltro) { return browser.isVisible('label*='+nomeFiltro); }},
});

module.exports = indexPage;
