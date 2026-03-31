var aplicacao = angular.module('aplicacaoEscola', []);

aplicacao.service('ServicoEscola', function($q, $timeout) {
    var listaBruxos = [
        { nome: "Harry Potter", email: "harry@hp.com", tipo: "Aluno", data: new Date() },
        { nome: "Hermione Granger", email: "mione@hp.com", tipo: "Aluno", data: new Date() },
        { nome: "Ron Weasley", email: "ron@hp.com", tipo: "Aluno", data: new Date() },
        { nome: "Albus Dumbledore", email: "albus@hp.com", tipo: "Professor", data: new Date() },
        { nome: "Severus Snape", email: "snape@hp.com", tipo: "Professor", data: new Date() }
    ];

    this.obterLista = function() {
        return listaBruxos;
    };

    this.guardarBruxo = function(novoBruxo) {
        var promessa = $q.defer();
        
        $timeout(function() {
            novoBruxo.data = new Date();
            listaBruxos.push(angular.copy(novoBruxo));
            promessa.resolve();
        }, 2000);

        return promessa.promise;
    };

    this.removerBruxo = function(indice) {
        listaBruxos.splice(indice, 1);
    };
});

aplicacao.controller('ControladorMatricula', function($scope, ServicoEscola, $timeout) {
    $scope.bruxo = {};
    $scope.aGuardar = false;
    $scope.sucesso = false;
    $scope.ultimoCriado = {}; 

    $scope.registar = function() {
        if ($scope.formularioBruxo.$valid) {
            $scope.aGuardar = true;
            $scope.sucesso = false;

            ServicoEscola.guardarBruxo($scope.bruxo).then(function() {
                $scope.aGuardar = false;
                $scope.sucesso = true;
                
                $scope.ultimoCriado = angular.copy($scope.bruxo);
                
                $scope.bruxo = {};
                $scope.formularioBruxo.$setPristine();
                $scope.formularioBruxo.$setUntouched();
                
                $timeout(function() {
                    $scope.sucesso = false;
                }, 3000);
            });
        }
    };
});

aplicacao.controller('ControladorListagem', function($scope, ServicoEscola) {
    $scope.lista = ServicoEscola.obterLista();

    $scope.excluir = function(indice) {
        if(confirm("Deseja mesmo remover da lista?")) {
            ServicoEscola.removerBruxo(indice);
        }
    };
});