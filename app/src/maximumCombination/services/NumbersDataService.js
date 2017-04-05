/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadNumbers: Function}}
 * @constructor
 */
function NumbersDataService($q) {
    var numbers = [
        1,
        5,
        7,
        101

    ];

    // Promise-based API
    return {
        loadNumbers: function() {
            // Simulate async nature of real remote calls
            return $q.when(numbers);
        }
    };
}

export default ['$q', NumbersDataService];

