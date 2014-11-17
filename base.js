/**
 * Created by Lance on 17/11/2014.
 */

angular.module('ngInterestCalc',[])
    .controller('AppCtrl', ['$scope', function($scope) {

        $scope.formData = {
            principal:1000,
            rate:14,
            daysOverdue: 30
        };

        $scope.resultData = {};

        $scope.$watch("[formData.principal, formData.rate, formData.daysOverdue]", function() {
            $scope.resultData.total = ($scope.formData.principal*Math.pow((1 + ($scope.formData.rate/100)/365), 365*($scope.formData.daysOverdue/365))).toFixed(2);
            $scope.resultData.interest = ($scope.resultData.total - $scope.formData.principal).toFixed(2);
        });





}]);