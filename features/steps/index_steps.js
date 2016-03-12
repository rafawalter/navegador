//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

  this.Given(/^que estou na pagina inicial$/, function (callback) {
    browser.get('index.html');
    console.log('********* title: ', browser.getTitle());
    expect(browser.getTitle()).to.eventually.equal('Financiamentos').and.notify(callback);
  });

  this.Given(/^clico no link para ver todas as opções$/, function (callback) {
    element('#todas').click();
  });

  this.Given(/^sou direcionado para a página "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^vejo o filtro "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Given(/^vejo todos os programas$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};
