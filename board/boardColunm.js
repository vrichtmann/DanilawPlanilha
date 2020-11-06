
var BoardColumn = function(){

    var mouthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    // var mouthsArray = ["J","F","M","A","M","J","J","A","S","O","N","D"]
    var currentAno = 2016;

    this.createBoardColunm = function(){
        var createBoardColunm = "";
        var cont = 0;

        createBoardColunm += "  <div class='gantt__row gantt__row--months' style='grid-template-columns: 150px repeat("+maxColunm +", 1fr);'>";
        createBoardColunm += "      <div class='gantt__row-first'></div>";

        for(var i=0;i<maxColunm;i++){

            var nameColunm = "";

            if(maxColunm > 36){
                if(cont == 0 || cont == 6)nameColunm = mouthsArray[cont] + "-" +currentAno;
            }else{
                nameColunm = mouthsArray[cont] + "-" +currentAno;
            }

            createBoardColunm += "   <span>" + nameColunm +"</span>";
           
            cont++;
            if(cont >= mouthsArray.length){
                cont = 0;
                currentAno++;
            }
        }
        createBoardColunm += "  </div>";

        return createBoardColunm;
    }
}