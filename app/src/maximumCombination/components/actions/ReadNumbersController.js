class ReadNumbersController  {


    constructor() {

        this.listToLoad = "";
    }
    loadList(){
        this.numbers = this.listToLoad.split(',').map(function(number){
            return parseInt(number);
        });
    }
}
export default ReadNumbersController;

