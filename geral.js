//CADASTRO DE AGENDAMENTO

function cadastrarAgendamento() {

    // Verifica se está logado
    let usuarioLogado = localStorage.getItem("usuarioLogado");

    if (usuarioLogado !== "true") {
        alert("Entre na sua conta antes de agendar.");
        window.location.href = "conta.html";
        return;
    }

    // Verifica se existe uma conta

    let usuario = localStorage.getItem("usuario");

    if (usuario === null) {

        alert("Crie uma conta antes de agendar.");

        return;

    }



    //Recupera os dados do formulário de agendamento

    let nome = document.getElementById("nome").value;

    let telefone = document.getElementById("telefone").value;

    let idade = document.getElementById("idade").value;

    let data = document.getElementById("data").value;

    let horario = document.getElementById("horario").value;



    // Salva os dados do agendamento

    localStorage.setItem("nomeCliente", nome);

    localStorage.setItem("telefoneCliente", telefone);

    localStorage.setItem("idade", idade);

    localStorage.setItem("data", data);

    localStorage.setItem("horario", horario);



    alert("Agendamento realizado com sucesso!");

}





//DATA MÍNIMA DO AGENDAMENTO



let campoData = document.getElementById("data");

if (campoData !== null) {

    let hoje = new Date().toISOString().split("T")[0];

    campoData.min = hoje;

}





//MOSTRAR CADASTRO



function mostrarCadastro() {

    document.getElementById("login").style.display = "none";

    document.getElementById("cadastro").style.display = "block";

}



//MOSTRAR LOGIN



function mostrarLogin() {

    document.getElementById("cadastro").style.display = "none";

    document.getElementById("login").style.display = "block";

}



//CADASTRAR CONTA



function cadastrar() {

    let nome =
        document.getElementById("nomeCadastro").value;

    let email =
        document.getElementById("emailCadastro").value;

    let senha =
        document.getElementById("senhaCadastro").value;

    let telefone =
        document.getElementById("telefoneCadastro").value;





        

    let usuario = {

        nome: nome,

        email: email,

        senha: senha,

        telefone: telefone

    };



    // Salva o usuário no Local Storage

    localStorage.setItem(

        "usuario",

        JSON.stringify(usuario)

    );



    alert("Conta criada com sucesso!");



    // Volta para a tela de login

    mostrarLogin();

}





// ENTRAR NA CONTA



function entrar() {

    let email =
        document.getElementById("emaillogin").value;

    let senha =
        document.getElementById("senhaLogin").value;





    let usuario =
        JSON.parse(localStorage.getItem("usuario"));



    if (usuario === null) {

        alert("Você ainda não possui uma conta.");

        return;

    }



    // Verifica e-mail e senha

    if (

        email === usuario.email &&

        senha === usuario.senha

    ) {

        // Marca o usuário como logado

        localStorage.setItem(

            "usuarioLogado",

            "true"

        );



        alert("Login realizado com sucesso!");



        // Volta para a página inicial

        window.location.href = "index.html";

    }

    else {

        alert("E-mail ou senha incorretos.");

    }

}





//TROCA "CONTA" POR "MINHA CONTA"



let usuarioLogado =
    localStorage.getItem("usuarioLogado");



let linkConta =
    document.getElementById("conta");



if (

    usuarioLogado === "true" &&

    linkConta !== null

) {

    linkConta.innerText = "Minha conta";

    linkConta.href = "conta.html";

}





//carrega os dados da conta



function carregarConta() {

    let usuario =
        JSON.parse(localStorage.getItem("usuario"));



    //se n tem usuário a função para

    if (usuario === null) {

        return;

    }



    // Mostra os dados da conta

    let nomeUsuario =
        document.getElementById("nomeUsuario");

    let emailUsuario =
        document.getElementById("emailUsuario");

    let telefoneUsuario =
        document.getElementById("telefoneUsuario");



    if (nomeUsuario !== null) {

        nomeUsuario.innerText =
            usuario.nome;

    }



    if (emailUsuario !== null) {

        emailUsuario.innerText =
            usuario.email;

    }



    if (telefoneUsuario !== null) {

        telefoneUsuario.innerText =
            usuario.telefone;

    }




    let dataAgendamento =
        document.getElementById("dataAgendamento");

    let horarioAgendamento =
        document.getElementById("horarioAgendamento");



    let data =
        localStorage.getItem("data");

    let horario =
        localStorage.getItem("horario");



    if (dataAgendamento !== null) {

        if (data !== null) {

            dataAgendamento.innerText = data;

        }

        else {

            dataAgendamento.innerText =
                "Nenhum agendamento";

        }

    }



    if (horarioAgendamento !== null) {

        if (horario !== null) {

            horarioAgendamento.innerText =
                horario;

        }

        else {

            horarioAgendamento.innerText =
                "Nenhum agendamento";

        }

    }

}



//Sai da conta



function sair() {

    // Remove só login

    localStorage.removeItem("usuarioLogado");



    alert("Você saiu da conta.");



    // volta pro inicio

    window.location.href = "index.html";

}



//verifica tela da conta



let minhaConta =
    document.getElementById("minhaConta");



if (minhaConta !== null) {

    if (usuarioLogado === "true") {

        // Usuário está logado

        // Mostra Minha Conta

        document.getElementById("login").style.display =
            "none";

        document.getElementById("cadastro").style.display =
            "none";

        minhaConta.style.display =
            "block";



        // Carrega os dados

        carregarConta();

    }

    else {

        // Usuário não está logado

        // Mostra Login

        minhaConta.style.display =
            "none";

        document.getElementById("cadastro").style.display =
            "none";

        document.getElementById("login").style.display =
            "block";

    }

}
