

var BoardTitle = function(){

    this.createHeaderTitle = function(){
        var boardHeadertitle = "";
        boardHeadertitle += "<div class='header'>";
        boardHeadertitle += "   <h2>Projeto Organograma Daniel Meireles de Formica</h2>";
        boardHeadertitle += "   <p>Use <strong>grid-column</strong> to span a new entry across the grid. (e. g. <strong>grid-column: 5/12;</strong> spans an entry from May to November)</p>"
        boardHeadertitle += " </div>"
    
        return boardHeadertitle;
    }
}