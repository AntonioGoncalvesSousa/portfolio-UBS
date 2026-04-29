async function carregarEquipe() {
    const response = await fetch('./../JSON/equipe.json');
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
                <a href="#" class="btn">Ver perfil completo ></a>
            </div>
        `;

        container.appendChild(card);
    });
}

carregarEquipe();