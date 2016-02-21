routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider, $mdThemeProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $mdThemeProvider.theme("default").primaryPalette("amber").accentPalette("red");
}
