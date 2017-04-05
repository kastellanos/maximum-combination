import ShowResultController from './ShowResultController';

export default {
    name : 'showResult',
    config : {
        bindings         : {  numbers: '=' },
        templateUrl      : 'src/maximumCombination/components/actions/ShowResult.html',
        controller       : [ ShowResultController ]

    }
};