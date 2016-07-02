(function () {

    'use strict';

    angular
        .module('md.ripple')
        .directive('mdRipple', mdRipple);

    mdRipple.$inject = ['$timeout'];

    function mdRipple ($timeout) {

        var directive = {
            link: link
        };

        return directive;

        function link (scope, element) {

            element.on('mousedown', function (e) {

                var size = (element.width() > element.height() ? element.width() : element.height()) * 2 ;

                var ripple = '<ripple class="visible"></ripple>';

                ripple = angular.element(ripple);

                var left = e.clientX - element[0].getBoundingClientRect().left - size;
                var top = e.clientY - element[0].getBoundingClientRect().top - size;

                element.append(ripple);

                ripple
                    .css({
                        'left': left,
                        'top': top,
                        'width': size * 2,
                        'height': size * 2
                    });

                $timeout(function(){
                    ripple.removeClass('visible');
                }, 300);


            });

            angular.element(document).on('mouseup', function () {

                var ripples = element.find('ripple');

                if(ripples.hasClass('visible')) {

                    if(ripples.length) {
                        $timeout(function(){
                            removeRipple(element.find('ripple')[0]);
                        },300);
                    }
                    else {
                        removeRipple(element.find('ripple')[0]);
                    }

                }
                else {
                    removeRipple(element.find('ripple')[0]);
                }
            });

            function removeRipple (element) {
                if (element) {
                    element.remove();
                }
            }

        }


    }

})();