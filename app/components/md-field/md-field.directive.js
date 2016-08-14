(function () {
    
    'use strict';
    
    angular
        .module('md.field')
        .directive('mdField', mdField);

    mdField.$inject = [];
    
    function mdField() {
        var directive = {
            restrict: 'E',
            link: link
            // transclude: true
        };
        
        return directive;
        
        function link(scope, element) {
            element
                .find('input, select, textarea')
                .addClass('md-control')
                .after('<div class="line"></div>');
        }
    }
    
})();