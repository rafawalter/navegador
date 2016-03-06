# language: pt

Funcionalidade: Navegar pelos financiamentos
  Como um empresário
  Eu quero conhecer as formas de apoio financeiro
  Para que possa melhorar meu negócio

    Cenário: Navegar para um financiamento
      Dado que estou na pagina do navegador
      Quando eu clico no link "Cerealistas"
      Então eu vejo a página "Cerealistas"

    @watch
    Cenário: Apenas MPME
      Dado que estou na pagina do navegador
      E vejo financiamentos que não são para MPME
      Quando eu clico no checkbox "somente MPME"
      Então vejo apenas financiamentos que são para MPME
