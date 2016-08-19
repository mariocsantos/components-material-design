(function () {
    
    'use strict';
    
    angular
        .module('md.card')
        .directive('mdCard', mdCard);

    mdCard.$inject = [];
    
    function mdCard() {
        var directive = {
            restrict: 'E'
        };
        
        return directive;
    }
    
})();