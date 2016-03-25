angular.module('scoffy.services')

.factory('Auth', Auth)

/* Authentification */
function Auth(rootRef, $firebaseAuth) {
  return $firebaseAuth(rootRef);
}
Auth.$inject = ['rootRef', '$firebaseAuth'];

