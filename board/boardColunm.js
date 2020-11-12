


var tempMiniYear = 0;;

var minYear = 2000000;
var minMonth = 12;
var minDay = 12;

var maxYear = 0;
var maxMonth = 1;
var maxDay = 1;

var maxColunm = 12;


var BoardColumn = function(){

    var mouthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    // var mouthsArray = ["J","F","M","A","M","J","J","A","S","O","N","D"]

    this.createBoardColunm = function(){
        var createBoardColunm = "";
        var cont = 0;

        createBoardColunm += "  <div class='gantt__row gantt__row--months' style='grid-template-columns: 150px repeat("+maxColunm +", 1fr);'>";
        createBoardColunm += "      <div class='gantt__row-first'></div>";

        for(var i=0;i<maxColunm;i++){

            var nameColunm = "";

            if(maxColunm > 36){
                if(cont == 0 || cont == 6)nameColunm = mouthsArray[cont] + "-" +tempMiniYear;
            }else{
                nameColunm = mouthsArray[cont] + "-" +tempMiniYear;
            }

            createBoardColunm += "   <span>" + nameColunm +"</span>";
           
            cont++;
            if(cont >= mouthsArray.length){
                cont = 0;
                tempMiniYear++;
            }
        }
        createBoardColunm += "  </div>";

        return createBoardColunm;
    }

    this.getInitialTime = function(){

        for(var i=0; i < excellJSON[0].length; i++){
            var anoI = excellJSON[0][i]["AnoI"];
            var mesI = excellJSON[0][i]["MêsI"];
            var diaI = excellJSON[0][i]["DiaI"];

            var anoF = excellJSON[0][i]["AnoF"];
            var mesF = excellJSON[0][i]["MêsF"];
            var diaF = excellJSON[0][i]["DiaF"];

            if(!anoI) return;

            if(anoI < minYear){
                minYear = anoI;
                minMonth = mesI;
                minDay = diaI;
            }else if(anoI == minYear){
                if(minMonth > mesI){
                    minMonth = mesI;
                    minDay = diaI;
                }else if(minMonth == mesI){
                    if(minDay > diaI){
                        minDay = diaI;
                    }
                }
            }

            if(anoF > maxYear){
                maxYear = anoF;
                maxMonth = mesF;
                maxDay = diaF;
            }else if(anoF == maxYear){
                if(maxMonth > mesF){
                    maxMonth = mesF;
                    maxDay = diaF; 
                }else if(maxMonth == mesF){
                    if(maxDay > diaF){
                        maxDay = diaF;
                    }
                }
            }
        }

        tempMiniYear = minYear;

        console.log("minYear : " + minYear);
        console.log("minMonth : " + minMonth);
        console.log("minDay : " + minDay);

        console.log("maxYear : " + maxYear);
        console.log("maxMonth : " + maxMonth);
        console.log("maxDay : " + maxDay);

        this.setDiffMouth();
    }

    this.setDiffMouth = function(){
        // var yearDiff = (maxYear - (minYear + 1)) <= 0 ? 0 : (maxYear - (minYear + 1)) ;
        // var diffMouth = (13 - minMonth) + (yearDiff * 12) +  maxMonth;

        var yearDiff = (maxYear - minYear) 
        var diffMouth = (yearDiff * 12 + 12);
        // console.log("diffMouth : " + diffMouth)
        maxColunm = diffMouth;
    }

    this.getColumnByData = function(_day, _mounth, _year){
        console.log("_day : " + _day + " _mounth: " + _mounth + " _year : " + _year);

        var minYearDiff = (_year - minYear);
        var targetMouth = (minYearDiff * 12) + _mounth;
        return targetMouth;
    }
}