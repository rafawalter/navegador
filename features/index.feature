# language: pt

Funcionalidade: Navegar pelos financiamentos
  Como um empresário
  Eu quero conhecer as formas de apoio financeiro
  Para que possa melhorar meu negócio

  @watch
    Cenário: Todas as opções
      Dado que estou na pagina inicial
      Quando clico no link "todas as opções de apoio financeiro"
      Então sou direcionado para a página "Navegador"
      E vejo o filtro "somente MPME"
      E vejo o filtro "filtrar setores"
      E vejo o filtro "filtrar finalidades"
