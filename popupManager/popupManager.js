
var PopupManager = function(){

    this.init = function(){
        this.createPopupInfo();
    }

    this.createPopupInfo = function(){
        var popupHTML = "";
        popupHTML += "<div class='popup' id='popupInfo'>";
        popupHTML += "  <div class='popup-content'>";

        popupHTML += "  <div class='popupPositions' id='colorBar' align='right' style='background-color: rgb(0, 181, 226);'>";
        popupHTML += "      <div class='positionName' id='taskName' onclick='closeNav()'>Danilaw</div>";
        popupHTML +=  "     <div class='closePopupPosition' onclick='closePopupInfo()'>X</div>";
        popupHTML += "  </div>";

        popupHTML += this.createTopic("Processo", "process");
        popupHTML += this.createTopic("Data Inicial");
        popupHTML += this.createTopic("Data Final");
        popupHTML += this.createTopic("Detalhes");

        // popupHTML += " <div class='popupTemaTitle' id='title_pais' align='left'>Descrição do Processo</div>";

        // popupHTML += "<div class='popupTemaContent ' align='left'>"; 
        // popupHTML += "      <div class='temaDethais' id='content_pais'>Criação de leis novas, novos processos a resolver. E Processar principalmente o processo do Leo Safado Gatuno de amigos.</div> <br>";
        // popupHTML += "</div>";

        popupHTML += "  </div>";
        popupHTML += "</div>";
        
        $("#popupManager").html(popupHTML);
    }
    
    this.repoPopupInfo = function(_id){
        document.getElementById("Detalhes").innerHTML = "Não possui";

        
        document.getElementById("colorBar").style.backgroundColor = "rgb(" + excellJSON[0][_id]["Color"] + ")";
        if( excellJSON[0][_id]["Descrição"])document.getElementById("taskName").innerHTML = excellJSON[0][_id]["Descrição"];
        document.getElementById("Processo").innerHTML = excellJSON[0][_id]["Evento"];
        document.getElementById("DataInicial").innerHTML = this.getDataInfo(_id, "I");
        document.getElementById("DataFinal").innerHTML = this.getDataInfo(_id, "F");

        if( excellJSON[0][_id]["Detalhes"])document.getElementById("Detalhes").innerHTML = excellJSON[0][_id]["Detalhes"];
    }

    this.createTopic = function(_nameID, _type = ""){
        var nameID = _nameID.replace(/\s/g, '');
        var typeDiscription = "";//_isProcess ? 'processText' : "temaDescription";

        typeDiscription = this.getTypeTopic(_type);

        var topicHTML = "";
        topicHTML += " <div class='popupTemaTitle' id='title_pais' align='left'>" + _nameID +"</div>";
        topicHTML += "<div class='popupTemaContent ' align='left'>"; 
        topicHTML += "      <div class=" + typeDiscription +" id='" + nameID +"'>25/07/2014</div> <br>";
        topicHTML += "</div>";

        return topicHTML;
    }

    this.getTypeTopic = function(_topicType = ''){
        switch(_topicType){
            case "":
                return "temaDescription";
                break;
            
            case "process":
                return "processText";
                break;

            case "thema":
                return "temaDethais";
                break;
        }
    }

    this.getDataInfo = function(_ID = 0,_type = "I"){
        var ano = excellJSON[0][_ID]["Ano" + _type];
        var mes = excellJSON[0][_ID]["Mês" + _type];
        var dia = excellJSON[0][_ID]["Dia" + _type];
        return (dia + "/" + mes + "/" + ano);
    }

}

function openPopupInfo(_ID){
    popupManager.repoPopupInfo(_ID);
    console.log("_ID : " + _ID);
    $("#popupInfo").show();
}

function closePopupInfo(){
    $("#popupInfo").hide();
}