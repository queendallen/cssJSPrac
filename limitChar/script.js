$(document).ready(function(){
    $("#box").on('input', (event) =>{
        var limit = 60;
        var textLen = $("#box").val().length
        $("#count").text(textLen + "/" + limit);
    
        if(textLen > limit){
            $("#count").css("color", "red");
            $("#box").css("border-color", "red");
        } else{
            $("#count").css("color", "grey");
            $("#box").css("border-color", "lightgrey");
        }
    });
    
    $(document).on('contextmenu', (event) =>{
        alert("Sorry! Right click is disabled");
        event.preventDefault();
     });
});
