import ReadNumbersController from './ReadNumbersController';

export default {
    name : 'readNumbers',
    config : {
        bindings         : {  numbers: '=' },
        templateUrl      : 'src/maximumCombination/components/actions/ReadNumbers.html',
        controller       : [ ReadNumbersController ]

    }
};