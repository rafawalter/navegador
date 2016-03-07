# language: pt

Funcionalidade: Navegar pelos financiamentos
  Como um empresário
  Eu quero conhecer as formas de apoio financeiro
  Para que possa melhorar meu negócio

    Cenário: Todas as opções
      Dado que estou na pagina inicial
      Quando clico no link "todas as opções de apoio financeiro"
      Então sou direcionado para a página "Navegador"
      E vejo o filtro "somente MPME"
      E vejo o filtro "filtrar setores"
      E vejo o filtro "filtrar finalidades"

      @watch
    Cenário: Navegação pelo setor
      Dado que estou na pagina inicial
      E vejo diversos setores
      Quando navego para o setor "Agropecuária"
      Então sou direcionado para a página "Navegador - Agrupecuária"
      E vejo o filtro "somente MPME"
      E não vejo o filtro "filtrar setores"
      E vejo o filtro "filtrar finalidades"
