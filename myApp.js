angular.module("myApp",[])
.controller("myCtrl", function($scope){
  var self = this;
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
  //sets output to hide first
  $scope.madLibOut = false;


  $scope.inputWords = true;

  //shows output of main-content
  $scope.genMadLib = function() {
    this.madLibOut = true;
    this.inputWords = false;
  }

  $scope.reset = function() {
    this.madLibOut = false;
    this.inputWords = true;
    this.femalename = "";
    this.jobtitle = "";
    this.tedioustask = "";
    this.dirtytask = "";
    this.celebrity = "";
    this.uselessskill = "";
    this.obnoxious = "";
    this.hugenumber = "";
    this.adjective = "";

    this.inputForm.$setPristine();

  }


  // $scope.mainCont = false;

});
