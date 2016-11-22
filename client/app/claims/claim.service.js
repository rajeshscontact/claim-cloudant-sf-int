'use strict';

angular.module('Soju')

.factory('Claim', ['$http', function($http) {

    return {
        getClaimStats: function() {

            return $http.get('/api/claims').then(function(res) {

                return res.data;

            });

        }

    };

}]);
