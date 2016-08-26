(function () {
    
    'use strict';
    
    angular
        .module('md.card')
        .directive('mdCard', mdCard);

    mdCard.$inject = [];
    
    function mdCard() {
        var directive = {
            restrict: 'E',
            template: '<md-card-wrap ng-transclude></md-card-wrap>',
            transclude: true
        };
        
        return directive;
    }
    
})();