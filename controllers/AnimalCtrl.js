AnimalShelter.controller("AnimalCtrl", function AnimalCtrl($scope) {
    $scope.animals = [];

    $scope.addAnimal = function() {
        $scope.animals.push({ name: $scope.animalName, type: $scope.animalType });
        $scope.animalName = null;
        $scope.animalType = "";
    }


});
