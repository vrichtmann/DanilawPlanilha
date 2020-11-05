

var BoardLines = function(){

    var mouthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    this.createBoardLines = function(){
        var boardLines = "";

        boardLines += "  <div class='gantt__row gantt__row--lines' data-month='509'>";

        for(var i=0;i<mouthsArray.length;i++){
            boardLines += "<span></span>";
        }
        boardLines += "  </div>";

        return boardLines;
    }
}
