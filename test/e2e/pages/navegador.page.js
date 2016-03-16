var NavegadorPage = function() {
  var _ = require('underscore');

  var financiamentosFiltrados = element.all(by.repeater('financiamento in financiamentosFiltrados'));

  this.get = function() {
    browser.get('navegador.html');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.vejoFiltro = function(texto) {
    return element(by.cssContainingText('label', texto)).isDisplayed();
  };

  this.quantidadeDeFinanciamentosComSetor = function(setor) {
    return element.all(by.cssContainingText('.setor',setor)).count();
  };

  this.quantidadeDeFinanciamentosComFinalidade = function(finalidade) {
    return element.all(by.cssContainingText('.finalidade',finalidade)).count();
  };

  this.quantidadeDeFinanciamentosVisiveis = function() {
    return financiamentosFiltrados.count();
  };

  this.valoresVisiveisDeMpme = function() {
    return element.all(by.binding('financiamento.mpme')).map(function(elm,index) {
      return elm.getText();
    }).then(function(valores) {
      return _.uniq(valores);
    });
  };

  this.clicarEmFinanciamento = function (financiamento){
    var acessarFinanciamento = element.all(by.repeater('financiamento in financiamentosFiltrados')).all(by.linkText(financiamento));
    return acessarFinanciamento.click();
  };

  this.clicarEmSetor = function (setor) {
    var acessarSetor = element(by.id('setor_'+setor)).all(by.model("filtro.setor"));
    return acessarSetor.click();
  };

  this.valorContadorDeFinanciamentos = function() {
    return element(by.binding('financiamentosFiltrados.length')).getText();
  };

  this.clicarEmMpme = function() {
    var linkMpme = element(by.model('filtro.somenteMpme'));
    return linkMpme.click();
  };

  this.financiamentosParaSetor = function(setor) {
    return element.all(by.repeater('financiamento in financiamentos')).all(by.repeater('setor in financiamento.setores')).all(by.id('financiamentoSetor_'+setor));
  };

  this.valorCheckbox = function(filtro) {
    return element(by.cssContainingText('.setores',filtro)).isSelected();
  };

};

module.exports = NavegadorPage;
