
var BoardContent = function(){

    this.createBoardContent = function(){
        var boardContentTXT = "";

        boardContentTXT += "<div class='gantt__row'>";
        boardContentTXT += "       <div class='gantt__row-first'>"
        boardContentTXT += "         Barnard Posselt"
        boardContentTXT += "        </div>"
        boardContentTXT += "      <ul class='gantt__row-bars'>"
        boardContentTXT += "          <li style='grid-column: 4/11; background-color: #2ecaac;'>Even longer project</li>"
        boardContentTXT += "      </ul>"
        boardContentTXT += "    </div>"

        return boardContentTXT;
    }
}