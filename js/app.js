angular.module('pixafyApp', [
    'pixafyApp.controllers',
    'pixafyApp.services'
]);

angular.module('pixafyApp.controllers', [])
    .controller('bucketsController',function($scope, bucketsService) {
        init();
        function init() {
            $scope.sections = bucketsService.getItems();
        }
    }) //close controller

angular.module('pixafyApp.services',[])
    .factory('bucketsService',function($http) {
        var sectionList = [];
        var sections = $http.get('sections.json');
        sections.success(function(data) {
            $.each(data, function(i, item) {
                sectionList.push({
                    title: item.title,
                    teaser: item.teaser,
                    image: item.image,
                    url : item.url
                })
            });
        });

        var factory = {};
        factory.getItems = function () {
            return sectionList;
        };
        return factory;
    })

