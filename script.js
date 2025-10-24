 const portfolio = document.querySelector("#sandunga");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let resultado = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);
        trabajos.forEach((trabajo) => {
            portfolio.innerHTML += `

                            <div class="col">
                                <div class="card shadow-sm">
                                <img src="${trabajo.imagen}" class"card-img-top">
                                <div class="card-body">
                                <p class="card-text">${trabajo.titulo}</p>
                                <div class="d-flex
                                justify-content-between
                                align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">${trabajo.categoria}</button>
                                </div>
                                <small class="text-body-secondary">Reciente </small>
             </div>
             </div>
            </div>
            </div>`;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

datos("https://api.myjson.online/v1/records/f417578c-d423-4f48-8deb-cf6b24559b85");