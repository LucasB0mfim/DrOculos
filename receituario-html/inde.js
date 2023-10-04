$(document).ready(function() {
    $(".menu").click(function() {
        $("nav").slideToggle();
    })
    var valorInput = $("#valor");

    $("#aumentar").click(function() {
        var valorAtual = parseInt(valorInput.val());
        valorInput.val(valorAtual + 1);
    });

    $("#diminuir").click(function() {
        var valorAtual = parseInt(valorInput.val());
        if (valorAtual > 0) {
            valorInput.val(valorAtual - 1);
        }
    });
    $("#btn-1").click(function() {
        alert("Seu produto foi adicionado ao carrinho!");
    })
}) 