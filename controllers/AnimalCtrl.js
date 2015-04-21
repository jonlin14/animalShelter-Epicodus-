AnimalShelter.controller("AnimalCtrl", function AnimalCtrl($scope) {
    $scope.animals = [];
    $scope.adoptedAnimals = [];

    $scope.addAnimal = function() {
        $scope.animals.push({ name: $scope.animalName, type: $scope.animalType });
        $scope.animalName = null;
        $scope.animalType = "";
    }

    $scope.adoptAnimal = function(animal) {
        var index = $scope.animals.indexOf(animal);
        $scope.animals.splice(index, 1);
        $scope.adoptedAnimals.push(animal);
    }


});
