(function () {

    'use strict';

    angular
        .module('md.dialog')
        .directive('mdDialog', mdDialog);

    mdDialog.$inject = [];

    function mdDialog() {

        var directive = {
            restrict: 'E',
            scope: {
               backgroundClick: '&'
            },
            transclude: true,
            template: '<md-dialog-background ng-click="backgroundClick && backgroundClick()"></md-dialog-background><md-dialog-content ng-transclude></md-dialog-content>',
            link: link
        };

        return directive;

        function link(scope) {
            var html = angular.element('html')[0];
            html.style.overflow = 'hidden';
            scope.$on('$destroy', function () {
                html.style.overflow = '';
            });
        }

    }

})();