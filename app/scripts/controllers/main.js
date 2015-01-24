'use strict';

var baseUrl = 'http://query.yahooapis.com/v1/public/yql?q=',
  // DAX30, 01/2015
  symbols = '"ADS.DE", "ALV.DE", "BAS.DE", "BAYN.DE", "BEI.DE", "BMW.DE", "CBK.DE", "CON.DE", "DAI.DE", "DB1.DE", "DBK.DE", "DPW.DE", "DTE.DE", "EOAN.DE", "FME.DE", "FRE.DE", "HEI.DE", "HEN3.DE", "IFX.DE", "LHA.DE", "LIN.DE", "LXS.DE", "MRK.DE", "MUV2.DE", "RWE.DE", "SAP.DE", "SDF.DE", "SIE.DE", "TKA.DE", "VOW3.DE"',
  data = encodeURIComponent('select * from yahoo.finance.quotes where symbol in (' + symbols + ')'),
  url = baseUrl + data + '&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=JSON_CALLBACK';


/**
 * @ngdoc function
 * @name stockwatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockwatchApp
 */
angular.module('stockwatchApp')
.controller('MainCtrl', function ($scope, $http ) {

    $http.jsonp(url)
      .success(function(data) {
        var quotes = data.query.results.quote;
        quotes.forEach(function(e) {
          e.css = e.Change.substr(0,1) === '+' ? 'text-success' : 'text-danger';
          e.url = 'https://de.finance.yahoo.com/q?s=' + e.Symbol;
        });
        $scope.quotes = quotes;
      })
      .error(function() {
      });

});
