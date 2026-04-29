async function carregarEquipe() {
    const response = await fetch('./JSON/equipe.json');
    const data = await response.json();

    const container = document.getElementById('teamContainer');

    data.equipe.forEach(pessoa => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imagem = pessoa.imagem && pessoa.imagem !== "" ? pessoa.imagem : 'css/assets/default.png';

        card.innerHTML = `
            <div class="image">
                <img src="${imagem}" alt="${pessoa.nome}">
            </div>
            <div class="info">
                <h3>${pessoa.nome}</h3>
                <p class="specialty"><strong>${pessoa.especialidade_desejada}</strong></p>
                <a onclick="verPerfil(${pessoa.id})" class="btn">Ver perfil completo ></a>
            </div>
        `;

        container.appendChild(card);
    });
}

function verPerfil(id) {
    window.location.href = `teamPage/member.html?id=${id}`;
}

function getIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

async function carregarMembro() {
    const id = getIdFromURL();

    const response = await fetch('./../JSON/equipe.json');
    const data = await response.json();

    const membro = data.equipe.find(m => m.id == id);

    if (!membro) return;

    preencherTela(membro);
}

function preencherTela(membro) {
    document.getElementById("imagem").src = "./../" + membro.imagem;
    document.getElementById("nome").innerText = membro.nome;
    document.getElementById("especialidade").innerText =
        "Especialidade desejada: " + membro.especialidade_desejada;
    document.getElementById("idade").innerText = membro.idade + " anos";

    document.getElementById("sobre").innerText = membro.sobre;
    document.getElementById("expectativas").innerText = membro.expectativas;
    document.getElementById("desafios").innerText = membro.medos_e_desafios;
    document.getElementById("motivacoes").innerText = membro.motivacoes;
}

if (window.location.pathname.includes("member.html")) {
    carregarMembro();
}

carregarEquipe();