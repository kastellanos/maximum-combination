class ShowResultController  {


    constructor() {

        this.result = "0";
    }

    maxCombinationSort( list ){
        var temporalList = list.slice(0);;
        var sortedList = temporalList.sort(function(x,y){
            var xy = x.toString() + y.toString();
            var yx = y.toString() + x.toString();
            if( xy === yx ){
                return 0;
            }else{
                if( xy < yx ){
                    return 1;
                }else{
                    return -1;
                }
            }
        });
        return sortedList;
    }
    concatenateNumbersList( list ){
        var response = "";
        list.forEach(function(number){
            response += number.toString();
        });
        return response;
    }
    calculate(){
        if(this.numbers.length !== 0 ){
        var sortedNumbers = this.maxCombinationSort( this.numbers );
        var other = [1,2,3,4,5];
        this.result = this.concatenateNumbersList(sortedNumbers);
        }else{
            this.result = "0";
        }
    }
    clean(){
        this.result = "0";
        this.numbers = [];
    }
}
export default ShowResultController;

