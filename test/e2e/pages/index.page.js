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

  this.quantidadeDeFinalidadesVisiveis = function() {
    return element.all(by.repeater('finalidade in finalidades')).count();
  };

  this.clicarEmSetor = function (setor) {
    var acessarSetor = element(by.id('setores')).element(by.linkText(setor));
    return acessarSetor.click();
  };

  this.clicarEmFinalidade = function (finalidade) {
    var acessarFinalidade = element(by.id('finalidades')).element(by.linkText(finalidade));
    return acessarFinalidade.click();
  };

  this.clicarEmMpme = function() {
    return linkMpme.click();
  };

};

module.exports = IndexPage;
