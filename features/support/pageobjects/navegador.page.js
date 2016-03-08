var page = require('./page');

var navegadorPage = Object.create(page, {
  open: {value: function() {
    page.open.call(this, 'navegador.html');
  }},

  clicarNoSetor: {value: function(nome) { browser.click('a=' + nome); }},

});

module.exports = navegadorPage;
