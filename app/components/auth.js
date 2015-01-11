// let's create a re-usable factory that generates the $firebaseAuth instance
fire.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://amber-torch-4197.firebaseio.com/");
  return $firebaseAuth(ref);
}]);