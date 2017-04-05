describe('ShowResultController', function() {
    var scope, $location, createController;
    beforeEach(angular.mock.module('maximumCombination'));

	var $controller;
	var numbersList = [1,2,3,4,5,6,7,8,9];
	var numbersStr = "123456789";
	var sortedList = [9,8,7,6,5,4,3,2,1];
	var result = "987654321";
	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));
	
	describe('sort', function () {
		it('should sort the numbers list based on maximum combination comparator', function () {
			var $scope = {};
			var controller = $controller('ShowResultController', { $scope: $scope });
			expect( $scope.maxCombinationSort(numbersList) ).toBe(sortedList);
		});	
	});
    describe('concatenate', function () {
        it('should take a number array and convert it to a concatenated string of numbers', function () {
            var $scope = {};
            var controller = $controller('ShowResultController', { $scope: $scope });
            expect( $scope.concatenateNumbersList(numbersList) ).toBe(numbersStr);
        });
    });
    describe('calculate', function () {
        it('should calculate the maximum number combination based on one array of numbers', function () {
            var $scope = {
            	numbers: numbersList
			};
            var controller = $controller('ShowResultController', { $scope: $scope });
            $scope.calculate();
            expect( $scope.result ).toBe(result);
        });
    });
});
describe('ReadNumbersController', function() {
    var scope, $location, createController;
    beforeEach(angular.mock.module('maximumCombination'));

    var $controller;
    var numbersList = [1,2,3,4,5,6,7,8,9];
    var numbersStr = "1,2,3,4,5,6,7,8,9";
    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('loadList', function () {
        it('should load a list of comma separated numbers and convert it to number array', function () {
            var $scope = { listToLoad: numbersStr };
            var controller = $controller('ReadNumbersController', { $scope: $scope });
            $scope.listToLoad();
            expect( $scope.maxCombinationSort($scope.numbers) ).toBe(numbersList);
        });
    });

});