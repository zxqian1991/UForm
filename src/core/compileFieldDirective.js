uf.directive('compileField', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        controller: function($scope) {
            var vm = this;
            this.field = $scope.$parent.$eval('field');
            this.form = {};
        },
        require: '?^uForm',
        controllerAs: '$proxy',
        scope: {},
        link: function (scope, element, attrs, form) {
            angular.extend(scope.$proxy.form, form);
            element.html('<div ' + scope.$parent.$eval(attrs.compileField) + ' />');
            $compile(element.contents())(scope);
        }
    };
}])
