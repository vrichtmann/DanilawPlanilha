

var BoardLines = function(){

    this.createBoardLines = function(){
        var boardLines = "";

        boardLines += "  <div class='gantt__row gantt__row--lines' style='grid-template-columns: 150px repeat("+ maxColunm +", 1fr);' data-month='509'>";
        var countMouths = 0;

        for(var i=0;i<maxColunm;i++){
            var classYearHalf = "";
            if(i > 0 && (countMouths == 0))classYearHalf = "class='yearHalf'"

            boardLines += "<span " + classYearHalf +"></span>";
            
            if(i > 0){
                countMouths++;
                if(countMouths >= 12){
                    countMouths = 0;
                }
            }
           
        }
        boardLines += "  </div>";

        return boardLines;
    }
}
