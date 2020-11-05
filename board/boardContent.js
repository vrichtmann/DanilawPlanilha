
var BoardContent = function(){

    var testeJson = [{name:"Barnard Posselt", initTime: "4", finalTime: "11", color:"#7d3f80"}];

    this.createBoardContent = function(){
        var boardContentTXT = "";

        boardContentTXT += "<div class='gantt__row'>";
        boardContentTXT += "       <div class='gantt__row-first'>"
        boardContentTXT += testeJson[0]["name"];
        boardContentTXT += "        </div>"
        boardContentTXT += "      <ul class='gantt__row-bars'>"
        boardContentTXT += "          <li style='grid-column: " + testeJson[0]["initTime"] +"/" + testeJson[0]["finalTime"] + "; background-color: " + testeJson[0]["color"] + ";'>Even longer project</li>"
        boardContentTXT += "      </ul>"
        boardContentTXT += "    </div>"

        return boardContentTXT;
    }
}