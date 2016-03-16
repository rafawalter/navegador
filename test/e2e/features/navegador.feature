# language: pt

Funcionalidade: Navegar pelos financiamentos
  Como um empresário
  Eu quero conhecer as formas de apoio financeiro
  Para que possa melhorar meu negócio

    Cenário: Navegar para um financiamento
      Dado que estou na pagina do navegador
      Quando clico no financiamento "Cerealistas"
      Então vejo a página "Cerealistas"

    Cenário: Quantidade de resultados
        Dado que estou na pagina do navegador
        E o contador de resultados indica a quantidade correta
        Quando clico no checkbox "somente MPME"
        Então o contador de resultados indica a quantidade correta


    Cenário: Apenas MPME
      Dado que estou na pagina do navegador
      E vejo financiamentos que são e outros que não são para MPME
      Quando clico no checkbox "somente MPME"
      Então vejo apenas financiamentos que são para MPME
      Quando clico novamente no checkbox "somente MPME"
      Então vejo financiamentos que são e outros que não são para MPME

      @watch
    Cenário: Filtrar setores
      Dado que estou na pagina do navegador
      E vejo financiamentos para o setor "Agropecuária"
      E vejo financiamentos que não são para o setor "Agropecuária"
      E vejo o filtro de setores desmarcado
      Quando filtro pelo setor "Agropecuária"
      Então vejo apenas financiamentos disponíveis para o setor "Agropecuária"
      E vejo o filtro de setores marcado
      Quando desmarco o filtro de setores
      Então vejo financiamentos para o setor "Agropecuária"
      E vejo financiamentos que não são para o setor "Agropecuária"

    Cenário: Filtrar finalidades
      Dado que estou na pagina do navegador
      E vejo financiamentos para a finalidade "Crédito rural"
      E vejo financiamentos que não são para a finalidade "Crédito rural"
      E vejo o filtro de finalidades desmarcado
      Quando filtro pela finalidade "Crédito rural"
      Então vejo apenas financiamentos disponíveis para a finalidade "Crédito rural"
      E vejo o filtro de finalidades marcado
      Quando desmarco o filtro de finalidades
      Então vejo financiamentos para a finalidade "Crédito rural"
      E vejo financiamentos que não são para a finalidade "Crédito rural"
