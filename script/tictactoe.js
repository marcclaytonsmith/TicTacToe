$(function(){

    // Variables for player emojies 
    var x = "<img src='img/x.png' />";
    var o = "<img src='img/o.png' />";
    
    var player = 1;

    // Arrays for the player td elements
    var p1Arr = new Array();
    var p2Arr = new Array();

    // The logic - If a player gets 3 tds in a row, they win! Change the winning rows background color to yellow.
        function win(currentPlayer){
            currentPlayer=currentPlayer.sort();

            if(currentPlayer.includes("td0") && currentPlayer.includes("td1") && currentPlayer.includes("td2")){
                $("#td0").css("background-color", "yellow");
                $("#td1").css("background-color", "yellow");
                $("#td2").css("background-color", "yellow");
                $("#td3 img").hide();
                $("#td4 img").hide();
                $("#td5 img").hide();
                $("#td6 img").hide();
                $("#td7 img").hide();
                $("#td8 img").hide();
                $("td").unbind("click");
            }
            
            else if(currentPlayer.includes("td3") && currentPlayer.includes("td4") && currentPlayer.includes("td5")){
                $("#td3").css("background-color", "yellow");
                $("#td4").css("background-color", "yellow");
                $("#td5").css("background-color", "yellow");
                $("#td0 img").hide();
                $("#td1 img").hide();
                $("#td2 img").hide();
                $("#td6 img").hide();
                $("#td7 img").hide();
                $("#td8 img").hide();
                $("td").unbind("click");
            }else if(currentPlayer.includes("td6") && currentPlayer.includes("td7") && currentPlayer.includes("td8")){
                $("#td6").css("background-color", "yellow");
                $("#td7").css("background-color", "yellow");
                $("#td8").css("background-color", "yellow");
                $("#td0 img").hide();
                $("#td1 img").hide();
                $("#td2 img").hide();
                $("#td3 img").hide();
                $("#td4 img").hide();
                $("#td5 img").hide();
                $("td").unbind("click");
            }else if(currentPlayer.includes("td0") && currentPlayer.includes("td3") && currentPlayer.includes("td6")){
                $("#td0").css("background-color", "yellow");
                $("#td3").css("background-color", "yellow");
                $("#td6").css("background-color", "yellow");
                $("#td1 img").hide();
                $("#td2 img").hide();
                $("#td4 img").hide();
                $("#td5 img").hide();
                $("#td7 img").hide();
                $("#td8 img").hide();
                $("td").unbind("click");
            }else if(currentPlayer.includes("td1") && currentPlayer.includes("td4") && currentPlayer.includes("td7")){
                $("#td1").css("background-color", "yellow");
                $("#td4").css("background-color", "yellow");
                $("#td7").css("background-color", "yellow");
                $("#td0 img").hide();
                $("#td2 img").hide();
                $("#td3 img").hide();
                $("#td5 img").hide();
                $("#td6 img").hide();
                $("#td8 img").hide();
                $("td").unbind("click");
            }else if(currentPlayer.includes("td2") && currentPlayer.includes("td5") && currentPlayer.includes("td8")){
                $("#td2").css("background-color", "yellow");
                $("#td5").css("background-color", "yellow");
                $("#td8").css("background-color", "yellow");
                $("#td0 img").hide();
                $("#td1 img").hide();
                $("#td3 img").hide();
                $("#td4 img").hide();
                $("#td6 img").hide();
                $("#td7 img").hide();
                $("td").unbind("click");
            }else if(currentPlayer.includes("td0") && currentPlayer.includes("td4") && currentPlayer.includes("td8")){
                $("#td0").css("background-color", "yellow");
                $("#td4").css("background-color", "yellow");
                $("#td8").css("background-color", "yellow");
                $("#td1 img").hide();
                $("#td2 img").hide();
                $("#td3 img").hide();
                $("#td5 img").hide();
                $("#td6 img").hide();
                $("#td7 img").hide();
                $("td").unbind("click");
            }else if(currentPlayer.includes("td2") && currentPlayer.includes("td4") && currentPlayer.includes("td6")){
                $("#td2").css("background-color", "yellow");
                $("#td4").css("background-color", "yellow");
                $("#td6").css("background-color", "yellow");
                $("#td0 img").hide();
                $("#td1 img").hide();
                $("#td3 img").hide();
                $("#td5 img").hide();
                $("#td7 img").hide();
                $("#td8 img").hide();
                $("td").unbind("click");
            }

        } 

    // When player 1 or player 2 clicks a td, push that td element into the appropriate player's array
        $("td").click(function(){
            if(player == 1){
                $(this).html(x);
                $(this).unbind("click");
                p1Arr.push(this.id);
                win(p1Arr);
                player=2;
            }else{
                $(this).html(o);
                $(this).unbind("click");
                p2Arr.push(this.id);
                win(p2Arr);
                player=1;
            }
        });

    //Reload the page
        $("#btnReset").click(function(){
                location.reload();
        });

});