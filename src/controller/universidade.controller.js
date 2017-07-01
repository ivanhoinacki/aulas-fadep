angular.module("app").controller("universidadeController", universidadeController);

function universidadeController(){

  var vm = this;

  (function init(){

      vm.titulo = 'Lista telefonica';
      vm.contatos = [{nome:"Pedro", telefone:"46999192169"},
                     {nome:"Ivan", telefone:"9998887"},
                     {nome:"Ana", telefone:"9998887"},
                     {nome:"Maria", telefone:"9998887"}]

  })();

  vm.adicionarContato = function(contato){
      vm.contatos.push(angular.copy(contato));
      delete vm.contato;
  }






};
