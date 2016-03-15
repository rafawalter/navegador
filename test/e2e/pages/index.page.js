var IndexPage = function() {

  var linkTodasAsOpcoes = element(by.id('todas')).element(by.css('a'));
  var linkMpme = element(by.id('mpme')).element(by.css('a'));

  this.get = function() {
    browser.get('index.html');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.clicarEmTodasAsOpcoes = function() {
    return linkTodasAsOpcoes.click();
  };

  this.quantidadeDeSetoresVisiveis = function() {
    return element.all(by.repeater('setor in setores')).count();
  };

  this.clicarEmSetor = function (setor) {
    var acessarSetor = element(by.id('setores')).element(by.id('setor_'+setor));
    return acessarSetor.click();
  };


  this.clicarEmMpme = function() {
    return linkMpme.click();
  };

};

module.exports = IndexPage;
