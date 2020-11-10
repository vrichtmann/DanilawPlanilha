


var board;
var excellJSON;

readExcel();

function init(){

    board = new boardManager();
    board.init();
}

function readExcel(){

        var url = "./excel/modelo_linha_do_tempo.xlsx";
        var oReq = new XMLHttpRequest();
        var newInfo;

        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
    
        oReq.onload = function(e){
            newInfo = readData();
            excellJSON = newInfo;

            init();
            
            function readData(){
                var finalArray = new Array();
                var arraybuffer = oReq.response;
                var data = new Uint8Array(arraybuffer);
      
                var arr = new Array();

                for(var i = 0; i != data.length; i++)arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");
                var workbook = XLSX.read(bstr, {type:"binary"});
                
                //console.log("workbook.SheetNames : " + workbook.SheetNames[0].length);

                //for(var i = 1; i < workbook.SheetNames[0].length + 1; i++){
                    var first_sheet_name = workbook.SheetNames[0];
                    var worksheet = workbook.Sheets[first_sheet_name];
                    var info = XLSX.utils.sheet_to_json(worksheet, {raw:true});
                    finalArray.push(info);

                   //console.log(info[0]["Evento"])

                //}

                // for(var i = 1; i < workbook.SheetNames.length; i++){
                //     var currentSheet = workbook.SheetNames[i];
                //     var worksheet = workbook.Sheets[currentSheet];
                //     var info = XLSX.utils.sheet_to_json(worksheet, {raw:true});
                    
                //     sheetsNameArray.push(currentSheet);
                //     finalArray.push(info)
                // }
                
                // var first_sheet_name = workbook.SheetNames[0];
                // var worksheet = workbook.Sheets[first_sheet_name];
                // var info = XLSX.utils.sheet_to_json(worksheet, {raw:true});

                return finalArray;
            }
        }
        oReq.send();
}