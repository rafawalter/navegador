# language: pt

Funcionalidade: Navegar pelos financiamentos
    Como um empresário
    Eu quero conhecer as formas de apoio financeiro
    Para que possa melhorar meu negócio

    Cenário: Todas as opções
      Dado que estou na pagina inicial
      Quando clico no link para ver todas as opções
      Então sou direcionado para a página "Todos os financiamentos"
      E vejo o filtro "somente MPME"
      E vejo o filtro "filtrar setores"
      E vejo o filtro "filtrar finalidades"
      E vejo todos os financiamentos

    Cenário: Navegação por MPME
      Dado que estou na pagina inicial
      Quando clico no link para MPMEs
      Então sou direcionado para a página "Financiamentos para MPME"
      E não vejo o filtro "somente MPME"
      E vejo o filtro "filtrar setores"
      E vejo o filtro "filtrar finalidades"
      E vejo somente os financiamentos que são MPME

    Cenário: Navegação pelo setor
      Dado que estou na pagina inicial
      E vejo diversos setores
      Quando navego para o setor "Agropecuária"
      Então sou direcionado para a página "Financiamentos para Agropecuária"
      E vejo o filtro "somente MPME"
      E não vejo o filtro "filtrar setores"
      E vejo o filtro "filtrar finalidades"
      E vejo somente os financiamentos com o setor "Agropecuária"

    Cenário: Navegação pela finalidade
      Dado que estou na pagina inicial
      E vejo diversas finalidades
      Quando navego para a finalidade "Crédito rural"
      Então sou direcionado para a página "Financiamentos para Crédito rural"
      E vejo o filtro "somente MPME"
      E vejo o filtro "filtrar setores"
      E não vejo o filtro "filtrar finalidades"
      E vejo somente os financiamentos com a finalidade "Crédito rural"
