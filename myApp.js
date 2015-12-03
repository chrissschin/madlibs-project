angular.module("myApp",[])
.controller("myCtrl", function($scope){
  $scope.femalename = "";
  $scope.jobtitle = "";
  $scope.tedioustask = "";
  $scope.dirtytask = "";
  $scope.celebrity = "";
  $scope.uselessskill = "";
  $scope.obnoxious = "";
  $scope.hugenumber = "";
  $scope.adjective = "";

  $scope.gender = {
      pronoun: 'she',
      poss: 'her'
  };

});
