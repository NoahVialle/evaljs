const inputCodePostal = document.getElementById('inputCodePostal');
const inputVille = document.getElementById('inputVille');

function searchCityByPostalCode() {
    const codePostal = inputCodePostal.value;

    if (codePostal.length === 5) {
        const url = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}&fields=nom&format=json`;
        const proxyUrl = 'https://api.allorigins.win/raw?url=';

        fetch(proxyUrl + encodeURIComponent(url))
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const ville = data[0].nom;
                    inputVille.value = ville;
                } else {
                    inputVille.value = '';
                    alert("Aucune ville trouvée pour le code postal");
                }
            })
            .catch(error => {
                console.error(`Erreur lors de la récupération des données: ${error}`);
            });
    } else {
        inputVille.value = '';
        alert("Veuillez entrer un code postal à 5 chiffres");
    }
}
