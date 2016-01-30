angular.module("mainModule", [])
angular.module("mainModule")
	.controller("mainTroller", ["$scope", function($scope){

		$scope.addEvent1 = function(){
			$scope.event1 = true
		}
		$scope.addEvent2 = function(){
			$scope.event2 = true
		}
		$scope.addEvent3 = function(){
			$scope.event3 = true
		}
		$scope.addEvent4 = function(){
			$scope.event4 = true
		}
		$scope.addEvent5 = function(){
			$scope.event5 = true
		}
		$scope.addEvent6 = function(){
			$scope.event6 = true
		}
		$scope.addEvent7 = function(){
			$scope.event7 = true
		}


var monday = new Date("January 25, 2016");
document.getElementById("m").innerHTML = monday.toDateString();

var tuesday = new Date("January 26, 2016");
document.getElementById("t").innerHTML = tuesday.toDateString();

var wednesday = new Date("January 27, 2016");
document.getElementById("w").innerHTML = wednesday.toDateString();

var thursday = new Date("January 28, 2016");
document.getElementById("r").innerHTML = thursday.toDateString();

var friday = new Date("January 29, 2016");
document.getElementById("f").innerHTML = friday.toDateString();

var saturday = new Date("January 30, 2016");
document.getElementById("s").innerHTML = saturday.toDateString();

var sunday = new Date("January 31, 2016");
document.getElementById("sun").innerHTML = sunday.toDateString();

 $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };

}])
