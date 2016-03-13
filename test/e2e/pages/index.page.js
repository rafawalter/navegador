var IndexPage = function() {
  var todasAsOpcoes = element(by.id('todas')).element(by.css('a'));

  this.get = function() {
    browser.get('index.html');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.clicarEmTodasAsOpcoes = function() {
    return todasAsOpcoes.click();
  };
};

module.exports = IndexPage;
