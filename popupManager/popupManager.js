
var PopupManager = function(){

    this.init = function(){
        this.createPopupInfo();
    }

    this.createPopupInfo = function(){
        var popupHTML = "";
        popupHTML += "<div class='popup'>";
        popupHTML += "  <div class='popup-content'>";

        popupHTML += "  <div class='popupPositions' align='right' style='background-color: rgb(0, 181, 226);'>";
        popupHTML += "      <div class='positionName' id='positionName' onclick='closeNav()'>Danilaw</div>";
        popupHTML +=  "     <div class='closePopupPosition' onclick='closeNav()'>X</div>";
        popupHTML += "  </div>";

        popupHTML += " <div class='popupTemaTitle' id='title_pais' align='left'>Processo</div>";

        popupHTML += "<div class='popupTemaContent ' align='left'>"; 
        popupHTML += "      <div class='processText' id='content_pais'>Danilaw</div> <br>";
        popupHTML += "</div>";

        popupHTML += " <div class='popupTemaTitle' id='title_pais' align='left'>Data Inicial</div>";

        popupHTML += "<div class='popupTemaContent ' align='left'>"; 
        popupHTML += "      <div class='temaDescription' id='content_pais'>25/07/2014</div> <br>";
        popupHTML += "</div>";

        popupHTML += " <div class='popupTemaTitle' id='title_pais' align='left'>Data Final</div>";

        popupHTML += "<div class='popupTemaContent ' align='left'>"; 
        popupHTML += "      <div class='temaDescription' id='content_pais'>31/10/2017</div> <br>";
        popupHTML += "</div>";

        popupHTML += " <div class='popupTemaTitle' id='title_pais' align='left'>Descrição do Processo</div>";

        popupHTML += "<div class='popupTemaContent ' align='left'>"; 
        popupHTML += "      <div class='temaDethais' id='content_pais'>Criação de leis novas, novos processos a resolver. E Processar principalmente o processo do Leo Safado Gatuno de amigos.</div> <br>";
        popupHTML += "</div>";

        popupHTML += "  </div>";
        popupHTML += "</div>";
        
        $("#popupManager").html(popupHTML);
    }

}