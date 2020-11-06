

var maxColunm = 200;

var boardManager = function(){
    this.boardTitle;
    this.boardColunm;
    this.boardLine;
    this.boardContent;

    this.init = function(){
        this.boardTitle = new BoardTitle();
        this.boardColunm = new BoardColumn();
        this.boardLine = new BoardLines();
        this.boardContent = new BoardContent();
        this.createBoardManager();
    }

    this.createBoardManager = function(){
        var newboard = "";
        newboard += "<div class='wrapper'>";
        newboard +=   this.boardTitle.createHeaderTitle();
        newboard += "   <div class='gantt'>";
        newboard +=         this.boardColunm.createBoardColunm();
        newboard +=         this.boardLine.createBoardLines();
        newboard +=         this.boardContent.createBoardContent();
        newboard += "   </div>"
        newboard += "</div>";
        $("#mainContent").html(newboard);
    }

}