// Load the custom app ES6 modules


import NumbersDataService from 'src/maximumCombination/services/NumbersDataService';

import NumbersList from 'src/maximumCombination/components/list/NumbersList';
import ShowResult from 'src/maximumCombination/components/actions/ShowResult';
import ReadNumbers from 'src/maximumCombination/components/actions/ReadNumbers';
import TextCard from 'src/maximumCombination/components/util/TextCard';
// Define the Angular 'maximum combination' module
export default angular
    .module("maximumCombination", ['ngMaterial'])

    .component(NumbersList.name, NumbersList.config)
    .component(ShowResult.name, ShowResult.config)
    .component(ReadNumbers.name, ReadNumbers.config)
    .component(TextCard.name, TextCard.config)
    .service("NumbersDataService", NumbersDataService);
