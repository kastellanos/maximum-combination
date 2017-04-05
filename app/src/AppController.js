/**
 * Main App Controller for the Angular Maximum Combination App
 * @param NumbersDataService
 * @constructor
 */
function AppController(NumbersDataService) {
  var self = this;
  self.numbers      = [ ];
  self.description = {
    title:"Descripción",
    content:["El objetivo de la aplicación es calcular el número más grande posible, basandose en las combinaciones posibles de una lista de numeros dada. Por ejemplo, si tenemos la lista: [1,5,7,101] el número calculado sería 751101"]
  }
  self.steps = {
    title:"Pasos",
    content:[
    "1. Ingresar en el cuadro de texto de la derecha una lista de numeros separada por comas y dar click al boton cargar lista.",
    "2. Revisar que la lista sea la deseada y dar click al botón calcular.",
    "3. Comprobar que el número generado sea correcto y sonreír."
    ]
  }
  
  // Load example data

  NumbersDataService
        .loadNumbers()
        .then( function( numbers ) {
          self.numbers    = numbers;
          //self.selected = users[0];
        });

  
}

export default [ 'NumbersDataService', '$mdSidenav', AppController ];
