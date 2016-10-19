var mainCtrl = function($scope, $http) {
  $scope.doSearch = function() {
    var url = 'https://www.googleapis.com/youtube/v3/videos?'
        + [
          'q=' + encodeURIComponent($scope.query),
          'alt=json'
          'max-results=10'
          'v=2'
          'callback=JSON_CALLBACK'
        ].join('&');
    $http.jsonp(url).success(function(data) {
      console.dir(data);
    });
  });
}