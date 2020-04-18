//https://github.com/ElladanTasartir/Studies

const valorDoom = 200.00;

$("button.calc").click((item) => {
    if ($("#tela").val().length < 5){
        $("#tela").val($("#tela").val() + item.target.innerHTML);
    }
});

$("button.op").click((item) => {
    if (item.target.id === 'igual'){
        divideDoom($("#tela").val());
    }
    if (item.target.id === 'menos'){
        let string = $("#tela").val();
        string = string.substring(0, string.length - 1);
        $("#tela").val(string);
        $("#imagens").css("display", "none");
        $("#imagens").empty();
    }
});

$(window).scroll(() => {
    if ($(window).scrollTop() > 300){
        $("#botao-topo").addClass("show");
        
    } else{
        $("#botao-topo").removeClass("show");
    }
});

$("#botao-topo").on("click", (e) => {
    e.preventDefault();
    $("html, body").animate({scrollTop:0}, '300');
});

function divideDoom(valor) {

    // código para apagar os filhos, usei outra tática
    // if ($("body").children()){
        // for (var i = 0; i < $("body").children().length; i++){
            // if ($("body").children()[i].tagName === 'IMG' || $("body").children()[i].tagName === 'P'){
                // $("body").children()[i].remove();
            // }
        // }
    // }
    $("#imagens").css({"display": "none"});
    $("#imagens").empty();
    let result = (valor)/valorDoom;
    let paragraph = $("<p></p>").text('Você pode comprar ' + result + ' cópias de DOOM ETERNAL');
    $("#imagens").append(paragraph);    
    let imgElement;
    if (result >= 1){
        $("#imagens").css({"display": "block", "visibility": "visible"});
        for (let index = 0; index < Math.floor(result); index++){
            imgElement = $("<img/>").attr("src", "doom-box.jpg");
            $("#imagens").append(imgElement);
        }
    }
    else{
        alert(`NÃO CONSEGUIRÁ COMPRAR DOOM ETERNAL COM ESSA MIXARIA DE R$ ${valor},00, apenas ${result} de uma cópia!`);
    }
    return result;
}
