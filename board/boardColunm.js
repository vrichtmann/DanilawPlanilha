
var BoardColumn = function(){

    var mouthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    this.createBoardColunm = function(){
        var createBoardColunm = "";

        createBoardColunm += "  <div class='gantt__row gantt__row--months'>";
        createBoardColunm += "      <div class='gantt__row-first'></div>";
        for(var i=0;i<mouthsArray.length;i++){
            createBoardColunm += "   <span>" + mouthsArray[i] + "</span>";
        }
        createBoardColunm += "  </div>";

        return createBoardColunm;
    }
}