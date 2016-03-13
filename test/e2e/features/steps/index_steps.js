module.exports = function() {
  var chai = require('chai');

  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);

  var expect = chai.expect;


  this.Given(/^que estou na pagina inicial$/, function () {
    browser.get('index.html');
    return expect(browser.getTitle()).to.eventually.equal('Financiamentos');
  });

  this.Given(/^clico no link para ver todas as opções$/, function () {
    return element(by.id('todas')).element(by.css('a')).click();
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (titulo) {
    return expect(browser.getTitle()).to.eventually.equal(titulo);
  });

  this.Given(/^vejo o filtro "([^"]*)"$/, function (texto) {
    return expect(element(by.cssContainingText('label', texto)).isDisplayed()).to.eventually.equal(true);
  });

  this.Given(/^vejo todos os programas$/, function () {
    return expect(element.all(by.repeater('financiamento in financiamentosFiltrados')).count()).to.eventually.be.equal(6);
  });
};
