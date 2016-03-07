# language: pt

Funcionalidade: Navegar pelos financiamentos
  Como um empresário
  Eu quero conhecer as formas de apoio financeiro
  Para que possa melhorar meu negócio

    Cenário: Navegar para um financiamento
      Dado que estou na pagina do navegador
      Quando clico no link "Cerealistas"
      Então vejo a página "Cerealistas"

    @watch
    Cenário: Apenas MPME
      Dado que estou na pagina do navegador
      E vejo financiamentos que são e outros que não são para MPME
      Quando clico no checkbox "somente MPME"
      Então vejo apenas financiamentos que são para MPME
      Quando clico novamente no checkbox "somente MPME"
      Então vejo financiamentos que são e outros que não são para MPME
