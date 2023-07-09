$(document).ready(function() { //Definindo que, quando o documento estiver pronto, tudo que estiver dentro das chaves será executado
    $("header button").click(function(){ //Definindo que, quando houver um clique na tag button do header:
        $("form").slideDown(); // O conteúdo da tag formulário irá deslizar para baixo e aparecer na tela
    })

    $("#botao-cancelar").click(function(){ //Definindo que, quando houver um clique no id botao-cancelar:
        $("form").slideUp(); // O conteúdo da tag formulário irá deslizar para cima e desaparecer da tela
    })

    $("form").on("submit", function(e){ //definindo que, quando a função de enviar o formulário for ativada:
    e.preventDefault(); //o comportamento padrão do formulário de atulizar a página será prevenido
    const nova_tarefa = $("#nova-tarefa").val(); //definindo que a const receberá o conteúdo(.val) do id nova-tarefa
    const novo_item = $('<li></li>'); //definindo que a const irá criar uma nova <li> no html e receberá o valor dela.
    $(`<a> ${nova_tarefa} </a>`).appendTo(novo_item); //definindo que a tarefa recebida será a mesma da const nova_tarefa e ela será adicionada(appendTo) na tag <li> da const novo_item
    $(novo_item).appendTo("ol"); //adicionando todo o conteúdo da const novo_item à tag ol do html
    
    $(novo_item).on("click", function(event){ //Definindo que, quando houver um clique em alguma tarefa da lista:
    let elemento_clicado = event.target; // definindo que, a variável elemento_clicado irá receber o elemento que foi clicado.
    $(elemento_clicado).addClass("tarefa-lista"); //definindo que a classe tarefa-lista do css será adicionada ao elemento que foi clicado.
    })
    
    $("#nova-tarefa").val(""); //Limpando o campo de inserção da atividade após a atividade ter sido adicionada
    })
})