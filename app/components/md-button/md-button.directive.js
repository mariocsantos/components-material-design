(function () {

    'use strict';

    angular
        .module('md.button')
        .directive('mdButton', mdButton);

    mdButton.$inject = [];
    
    function mdButton() {
        var directive = {
            link: link,
            transclude: true,
            replace: true,
            template: '<button class="md-button"><div ng-transclude></div></button>'
        };
        
        return directive;
    
        function link() {
            
        }
    }

})();