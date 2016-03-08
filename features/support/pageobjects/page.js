function Page () {
};

Page.prototype.open = function (path) {
    var baseUrl = 'file:///Users/rafaelwalter/Documents/Projetos/navegador/client/';
    browser.url(baseUrl + path);
};

Page.prototype.titulo = function() {
    return browser.getTitle();
}; 


module.exports = new Page();
