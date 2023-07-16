
$(document).ready(function(){ // Executar o conteúdo de dentro somente quando o documento for carregado
    $('#carousel-imagens').slick({ // aplicando o efeito de carousel (plugin)
        autoplay:true, //fazendo as imagens do carousel mudarem sozinhas
    });

    $('.subtitle button').click(function(){ //condição para quando o usuário clicar na classe 
        $('.form-class').slideToggle(); //fazendo os conteúdos da classe aparecerem apenas quando clicar(sliceToggle) 
    })

    
    $('#telefone').mask('(00)00000-0000') //aplicando a máscara no telefone
    $('#cpf').mask("000.000.000-00") //aplicando a máscara no cpf
    $('#cep').mask("00.000-000") //aplicando a máscara no cep

    $('form').validate({ //Adicionando validações aos campos do formulário
        rules: { //tudo que estão dentro das chaves são as regras de validação
            nome:{ // regras do campo nome
                required:true // o campo nome tem que ser obrigatório
            },
            email:{ //regras do campo email
                required:true,
                email:true // o campo email receberá uma validação customizada
            },
            telefone:{ //regras do campo telefone
                required:true,
            },
            cpf: { //regras do campo cpf
                required: true, 
            },
            endereco: { //regras do campo endereco
                required: true, 
            },
            cep: { //regras do campo cep
                required: true,  
            }
        },
        messages:{ //customizando as mensagens de validação
            nome:'Por favor, insira o seu nome!',
            email:'Por favor, insira o seu email!',
            telefone:'Por favor, insira o seu telefone!',
            cpf:'Por favor, insira seu CPF!',
            endereco:'Por favor, escreva seu endereço!',
            cep:'Por favor, insira seu CEP!'
        },
    })
    
})
