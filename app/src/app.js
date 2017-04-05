// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import AppController from 'src/AppController';
import MaximumCombination from 'src/maximumCombination/MaximumCombination';

export default angular.module( 'contestApp', [ 'ngMaterial','ngMessages', MaximumCombination.name ] )
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('red');
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey')
        .dark();
    $mdThemingProvider.theme('custom-card', 'default')
        .primaryPalette('green')
        .backgroundPalette('green')

    ;



  })
  .controller('AppController', AppController);
