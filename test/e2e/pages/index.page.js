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

  this.quantidadeDeSetoresVisiveis = function() {
    return element.all(by.repeater('setor in setores')).count();
  };

  this.clicarEmSetor = function (setor) {
    var acessarSetor = element(by.id('setores')).element(by.id('setor_'+setor));
    return acessarSetor.click();
  };

/*
  this.todosOsFinanciamentosPossuemSetor = function(setor) {
    return element,all(by.repeater(setor in financiamento.setores));
  }
*/

};

module.exports = IndexPage;
