import angular from 'angular';

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'contest-app-bootstrap', [ App.name ] )
      .run(()=>{
        console.log("Running the 'contest-app-bootstrap' ES6 Material-Style");
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'contest-app-bootstrap' ]);
  });
