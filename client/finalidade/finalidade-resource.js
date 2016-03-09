angular.module("meusUtilitarios")
  .factory('recursoFinalidades', function(){
    var servico = {};

    servico.obter = function() {
      return [
        {nome:'Maquinas e equipamentos'},
        {nome:'Mercado de capitais'},
        {nome:'Meio ambiente'},
        {nome:'Aquisição de software'},
        {nome:'Microcrédito'},
        {nome:'Projeto de investimento'},
        {nome:'Infraestrutura urbana'},
        {nome:'Aquisição de veículos'},
        {nome:'Inovação'},
        {nome:'Capital de giro'},
        {nome:'Internacionalização'},
        {nome:'Investimentos sociais de empresas'},
        {nome:'Crédito rural'},
        {nome:'Exportação'},
        {nome:'Gestão pública'},
        {nome:'Inclusão social e produtiva'},
        {nome:'Capitalização de cooperativa de crédito'},
      ];
    }
    return servico;
});
