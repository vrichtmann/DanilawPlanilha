
var BoardContent = function(){

    var testeJson = [{name:"Barnard Posselt", initTime: "4", finalTime: "11", color:"#7d3f80"}];

    this.createBoardContent = function(){
        var boardContentTXT = "";

        console.log(excellJSON);

        for(var i=0; i < excellJSON[0].length; i++){
            boardContentTXT += "<div class='gantt__row'>";
            boardContentTXT += "       <div class='gantt__row-first'>"
            boardContentTXT += excellJSON[0][i]["Evento"];
            boardContentTXT += "        </div>"
            boardContentTXT += "      <ul class='gantt__row-bars'>"
            boardContentTXT += "          <li style='grid-column: " + testeJson[0]["initTime"] +"/" + testeJson[0]["finalTime"] + "; background-color: " + testeJson[0]["color"] + ";'>Even longer project</li>"
            boardContentTXT += "      </ul>"
            boardContentTXT += "    </div>"
        }


        

        return boardContentTXT;
    }
}


    //   <div class="wrapper">
    //      <div class="header">
    //         <h2>Gantt Chart Concept with CSS-Grid</h2>
    //         <p>Use <strong>grid-column</strong> to span a new entry across the grid. (e. g. <strong>grid-column: 5/12;</strong> spans an entry from May to November)	</p>
    //      </div>
    //      <div class="gantt">
    //         <div class="gantt__row gantt__row--months">
    //            <div class="gantt__row-first"></div>
    //            <span>Jan</span><span>Feb</span><span>Mar</span>
    //            <span>Apr</span><span>May</span><span>Jun</span>
    //            <span>Jul</span><span>Aug</span><span>Sep</span>
    //            <span>Oct</span><span>Nov</span><span>Dec</span>
    //         </div>
    //         <div class="gantt__row gantt__row--lines" data-month="509">
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //            <span></span>
    //         </div>
    //         <div class="gantt__row">
    //            <div class="gantt__row-first">
    //               Barnard Posselt
    //            </div>
    //            <ul class="gantt__row-bars">
    //               <li style="grid-column: 4/11; background-color: #2ecaac;">Even longer project</li>
    //            </ul>
    //         </div>
    //         <div class="gantt__row gantt__row--empty">
    //            <div class="gantt__row-first">
    //               Ryley Huggons
    //            </div>
    //            <ul class="gantt__row-bars"></ul>
    //         </div>
    //         <div class="gantt__row">
    //            <div class="gantt__row-first">
    //               Lanie Erwin
    //            </div>
    //            <ul class="gantt__row-bars">
    //               <li style="grid-column: 2/5; background-color: #2ecaac;">Start Februar 🙌</li>
    //               <li style="grid-column: 6/7; background-color: #2ecaac;">Start Februar 🙌</li>
    //               <li style="grid-column: 1/6; background-color: #ff6252;" class="stripes"></li>
    //               <li style="grid-column: 7/11; background-color: #54c6f9;">Same line</li>
    //            </ul>
    //         </div>
    //         <div class="gantt__row gantt__row--empty">
    //            <div class="gantt__row-first">
    //               Krishnah Pauleit
    //            </div>
    //            <ul class="gantt__row-bars"></ul>
    //         </div>
    //         <div class="gantt__row gantt__row--empty">
    //            <div class="gantt__row-first">
    //               Hobard Lampitt
    //            </div>
    //            <ul class="gantt__row-bars"></ul>
    //         </div>
    //         <div class="gantt__row">
    //            <div class="gantt__row-first">
    //               Virgilio Jeanes
    //            </div>
    //            <ul class="gantt__row-bars">
    //               <li style="grid-column: 2/5; background-color: #2ecaac;"></li>
    //            </ul>
    //         </div>
    //         <div class="gantt__row">
    //            <div class="gantt__row-first">
    //               Ky Verick
    //            </div>
    //            <ul class="gantt__row-bars">
    //               <li style="grid-column: 3/8; background-color: #54c6f9;">Long project</li>
    //            </ul>
    //         </div>
      
    //         <div class="gantt__row">
    //            <div class="gantt__row-first">
    //               Ketti Waterworth
    //            </div>
    //            <ul class="gantt__row-bars">
    //               <li style="grid-column: 4/9; background-color: #ff6252;" class="stripes">A title</li>
    //            </ul>
    //         </div>
    //      </div>
    //   </div> 