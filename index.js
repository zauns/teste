
const form = document.getElementById("bloco-forms");
console.log(window.location.pathname);
if (window.location.pathname === '/cadastro.html') {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        form.action = "home.html";

        const nomeInput = document.getElementById("nome").value;
        const emailInput = document.getElementById("email").value;
        const senhaInput = document.getElementById("senha").value;
        const consenhaInput = document.getElementById("consenha").value;

        const nomeError = document.getElementById("nomeError");
        const emailError = document.getElementById("emailError");
        const senhaError = document.getElementById("senhaError");
        const consenhaError = document.getElementById("consenhaError");

        const erros = document.querySelectorAll(".error");
        erros.forEach((erro) => {
            erro.style.display = 'none';
        })
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.style.border = "1px solid #D0D5DD"
        })

        const temNumero = /\d/.test(nomeInput);
        const temCaracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/.test(nomeInput);
        const temArroba = emailInput.includes('@');

        if (temNumero || temCaracteresEspeciais || !temArroba || emailInput.length < 5 || senhaInput.length < 6 || consenhaInput != senhaInput) {
            if (temNumero || temCaracteresEspeciais) {
                nomeError.style.display = "block";
                document.getElementById("nome").style.border = "1px solid red"
            } 
            if (!temArroba ||  emailInput.length < 5) {
                emailError.style.display = "block";
                document.getElementById("email").style.border = "1px solid red"
            }
            if (senhaInput.length < 6) {
                senhaError.style.display = "block";
                document.getElementById("senha").style.border = "1px solid red"
            }
            if (consenhaInput != senhaInput) {
                consenhaError.style.display = "block";
                document.getElementById("consenha").style.border = "1px solid red"
            }
            return;
        } else {
            window.location.href = form.action;
        }
    });
} else if (window.location.pathname === '/home.html') {

const criarPost = document.getElementById("Postar");
const novosPosts = document.getElementById("novosPosts")
const feedpost = document.getElementById("base");
const userpfp = document.getElementById("userpfp");

function pegarValor() {
    const conteudoPost = document.getElementById("inputpost").value;
    return conteudoPost;
}

criarPost.addEventListener('click', () => {
    const novoPost = document.createElement('div')
    
    novoPost.className = "feedpost"
    novoPost.innerHTML = feedpost.innerHTML;
    const autor = novoPost.querySelector('span');
    const conteudo = novoPost.querySelector('p');
    const foto = novoPost.querySelector("#pfp");
    if (pegarValor() === "") {
        return;
    } else {

        autor.innerText = "João & Ricardo";
        conteudo.innerText = pegarValor();
        foto.src = userpfp.src
        document.getElementById("inputpost").value = "";
    }
    if (novosPosts.firstChild){
        novosPosts.insertBefore(novoPost, novosPosts.firstChild)
    } else {
        novosPosts.appendChild(novoPost);
    }  
});

function trocarTexto(botao) {
    if (botao.innerText === "Seguir") {
        botao.innerText = "Seguindo"
    } else if (botao.innerText === "Seguindo") {
        botao.innerText = "Seguir"
    }
}

function trocarCoracao(coracao) {
    if (coracao.src.includes("Heart.svg")) {
        coracao.src = "Favorite.svg"
    } else if (coracao.src.includes("Favorite.svg")) {
        coracao.src = "Heart.svg"
    }
};

function trocarSalvo(salvo) {
    if (salvo.src.includes("Bookmark.svg")) {
        salvo.src = "BookmarkCheck.svg"
    } else if (salvo.src.includes("BookmarkCheck.svg")) {
        salvo.src = "Bookmark.svg"
    }
}
let show = 0
function navbarShow(navbar) {
    if (!show) {
        navbar.src = "Close.svg"
        show = 1;
    } else if (show) {
        navbar.src = "Menu.svg"
        show = 0;
    }
};

document.getElementById("Menu").addEventListener("click", () => {
    navbarShow(this)
    if (show) {
        document.querySelector("nav").style.display = "flex"
    } else if (!show) {
        document.querySelector("nav").style.display = "none"
    }
})

} else if (window.location.pathname === "/login.html") {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        form.action = "home.html";

        
        const emailInput = document.getElementById("email").value;
        const senhaInput = document.getElementById("senha").value;

        const emailError = document.getElementById("emailError");
        const senhaError = document.getElementById("senhaError");

        const erros = document.querySelectorAll(".error");
        erros.forEach((erro) => {
            erro.style.display = 'none';
        })
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.style.border = "1px solid #D0D5DD"
        })

        const temArroba = emailInput.includes('@');

        if (!temArroba || emailInput.length < 5 || senhaInput.length < 6) {
            if (!temArroba ||  emailInput.length < 5) {
                emailError.style.display = "block";
                document.getElementById("email").style.border = "1px solid red"
            }
            if (senhaInput.length < 6) {
                senhaError.style.display = "block";
                document.getElementById("senha").style.border = "1px solid red"
            }
            return;
        } else {
            window.location.href = form.action;
        }
    });
}