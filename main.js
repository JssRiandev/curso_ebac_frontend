document.addEventListener('DOMContentLoaded', function(){

    const avatar = document.querySelector("#avatar");
    const nome = document.querySelector("#name");
    const nome_usuario= document.querySelector("#username");
    const repositorios = document.querySelector("#repositories");
    const seguidores = document.querySelector("#followers");
    const seguindo = document.querySelector("#following");
    const link = document.querySelector("#link");
    
    document.getElementById("btn-acess").addEventListener('click', function(){

        const nome_perfil = document.getElementById("profile").value;
        const endpoint = `https://api.github.com/users/${nome_perfil}`;

        fetch(endpoint)
        .then(function(res) {
            return res.json();
        })
        .then(function(json){

            if(json.id == null ){
                alert("usuário inexistente");
            }else{
                avatar.src= json.avatar_url;
                nome.innerText= json.name;
                nome_usuario.innerText= nome_perfil;
                repositorios.innerText=  json.public_repos;
                seguidores.innerText= json.followers;
                seguindo.innerText= json.following;
                link.href = json.html_url;
            }
            

        })
    })
})