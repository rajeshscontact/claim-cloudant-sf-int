'use strict';

angular.module('Soju')

.controller('ClaimController', ['$scope', 'Claim', function($scope, Claim) {
  $scope.labels = ["Paid", "Approved", "Rejected", "In Progress"];
  Claim.getClaimStats().then(function(response){
    $scope.claimData = [];
    $scope.allClaimsData = response;
    var totalCount = response.approved.count + response.paid.count + response.rejected.count + response.submitted.count;
    $scope.data = [response.paid.count, response.approved.count, response.rejected.count, response.submitted.count];
    //$scope.data = [80, 300, 40, 5];
  });
  $scope.clickOnChart = function(points, evt){
    if(typeof points[0] !== 'undefined'){
      if(points[0]._model.label === 'Approved'){
        $scope.claimData = $scope.allClaimsData.approved.claims;
      }else if(points[0]._model.label === 'Paid'){
        $scope.claimData = $scope.allClaimsData.paid.claims;
      }else if(points[0]._model.label === 'Rejected'){
        $scope.claimData = $scope.allClaimsData.rejected.claims;
      }else if(points[0]._model.label === 'In Progress'){
        $scope.claimData = $scope.allClaimsData.submitted.claims;
      }
      $scope.$apply();
    }else{
      $scope.claimData = [];
    }
  }

}]);
