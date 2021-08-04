$(".eyes").click(function(){
    $(".fa-eye").toggle();
    $(".fa-eye-slash").toggle();
    hidePassword();
    changeColor();
});

function hidePassword(){
    if($(".fa-eye-slash").is(":hidden")){
        console.log("Hidden");
        $("#password").attr("type", "password");

    } else{
        console.log("Present");
        $("#password").attr("type", "text");
    };
};

function changeColor(){
    $(".eyes").toggleClass("eyesAnimation");
};
