angular.module("myApp",['ngAnimate'])
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
  $scope.madLibOut = true;
  $scope.inputWords = false;

  //shows output of main-content
  $scope.genMadLib = function() {

    if( $scope.inputForm.$valid ) {
      this.madLibOut = false;
      this.inputWords = true;
    } else {
        console.log('The form is invalid');
    }

  };

  $scope.reset = function() {
    this.madLibOut = true;
    this.inputWords = false;
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

  };


});
