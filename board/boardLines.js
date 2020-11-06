

var BoardLines = function(){

    this.createBoardLines = function(){
        var boardLines = "";

        boardLines += "  <div class='gantt__row gantt__row--lines' style='grid-template-columns: 150px repeat("+ maxColunm +", 1fr);' data-month='509'>";

        for(var i=0;i<maxColunm;i++){
            boardLines += "<span></span>";
        }
        boardLines += "  </div>";

        return boardLines;
    }
}
