const form = document.getElementById("form-deposito"); /*Definindo que a constante(const) formulário receberá o elemento do id "form-deposito" do html*/
const campo_a = document.getElementById("campo-A"); /*Definindo que a constante(const) receberá o elemento do id "campo-A" do html*/
const campo_b = document.getElementById("campo-B"); /*Definindo que a constante(const) receberá o elemento do id "campo-B" do html*/

form.addEventListener("submit",function(e){ /*adicionando um evento para impedir o comportamento padrão do formulário de recarregar a tela ao enviar ("submit")*/
    e.preventDefault();

    const mensagem_sucesso = `A validação foi um sucesso, pois o n° do campo A: <b>${campo_a.value}</b> é menor que o do campo B: <b>${campo_b.value}</b>. <p><mark><b>Clique novamente em um dos campos para fazer outra validação!</b></mark></p> `; /*Retornando ao usuário uma mensagem após o envio ser válido*/

    if (campo_a.valueAsNumber < campo_b.valueAsNumber) { /*condição para caso o numero de b seja maior que o de a*/
        const containermensagem_sucesso = document.querySelector(".success-message"); /*Definindo que a constante(const) containermensagem_sucesso receberá os elementos da classe "success-message" do css*/
        containermensagem_sucesso.innerHTML = mensagem_sucesso; /*Definindo que a constante(const) receberá os elementos da constante*/
        containermensagem_sucesso.style.display ="block"; /*Aplicando estilo aos elementos via JS. Neste caso, para gerar o bloco com a mensagem de sucesso.*/ 
        
        campo_a.value =""; /*limpando o campo a ao enviar o formulário*/
        campo_b.value =""; /*limpando o campo b ao enviar o formulário*/
        campo_a.style.border = ""; /*limpando a cor da borda do campo a ao enviar o formulário*/
        campo_b.style.border = ""; /*limpando a cor da borda do campo b ao enviar o formulário*/
        document.querySelector(".warning-message").style.display = "none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/ 
        document.querySelector(".error-message").style.display = "none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/ 
        document.querySelector('.warning-message-img').style.display="none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/
        document.querySelector('.error-message-img').style.display="none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/
        document.querySelector('.success-message-img').style.display="block"; /*Definindo que os elementos do seletor entre aspas irão aparecer na tela.*/


    } else if (campo_a.valueAsNumber === campo_b.valueAsNumber)  { /*condição para caso o numero de b seja igual ao de a */
        campo_a.style.border = "1px solid orange"; /*definindo a cor e a expessura da borda da caixa de seleção*/
        campo_b.style.border = "1px solid orange"; /*definindo a cor e a expessura da borda da caixa de seleção*/
        document.querySelector(".warning-message").style.display = "block"; /*Definindo que os elementos do seletor entre aspas irão aparecer na tela.*/
        document.querySelector('.warning-message-img').style.display="block" /*Definindo que os elementos do seletor entre aspas irão aparecer na tela.*/
        document.querySelector('.error-message').style.display="none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/
        document.querySelector('.error-message-img').style.display="none" /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/
        document.querySelector('.success-message').style.display="none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/

} else { /*condição para caso o numero de b seja menor que o de a */
        campo_a.style.border = "1px solid red"; /*definindo a cor e a expessura da borda da caixa de seleção*/
        campo_b.style.border = "1px solid red"; /*definindo a cor e a expessura da borda da caixa de seleção*/
        document.querySelector(".error-message").style.display = "block"; /*Definindo que os elementos do seletor entre aspas irão aparecer na tela.*/
        document.querySelector('.error-message-img').style.display="block"; /*Definindo que os elementos do seletor entre aspas irão aparecer na tela.*/
        document.querySelector('.warning-message').style.display="none"; /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/
        document.querySelector('.warning-message-img').style.display="none" /*Definindo que os elementos do seletor entre aspas não irão aparecer na tela.*/
        document.querySelector('.success-message').style.display="none"; /*Definindo que os elementos do seletor entre aspas irão aparecer na tela.*/
    }

    document.querySelector(".campos").addEventListener("click",function(){ /*adicionando um evento para "limpar" a mensagem de sucesso e a imagem quando o usuário selecionar as caixas de texto novamente*/
    document.querySelector('.success-message').style.display="none"; /*Definindo que os elementos do seletor entre aspas irão sair da tela ao clicar na caixa.*/
    document.querySelector('.success-message-img').style.display="none"; /*Definindo que os elementos do seletor entre aspas irão sair da tela ao clicar na caixa.*/ 

})
})




