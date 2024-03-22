const apiKey = "a216da29"; // Remplacez YOUR_API_KEY par votre clé d'API OMDB

// Fonction pour récupérer les informations d'un film par son titre
function getMovieInfoByTitle(title) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    title
  )}`;

  // Effectuer la requête GET
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Traiter les données ici
      console.log(data);
      // afficher le imdbid du film
      console.log(title + " ID IS " + data.imdbID);

      // Appeler getBechdelTestByImdbId avec l'IMDB ID ici, à l'intérieur de la promesse
      getBechdelTestByImdbId(data.imdbID);

      //afficher poster du film dans la balise img dans index.html
      document.getElementById("poster").src = data.Poster;
    })
    .catch((error) => {
      // Gérer les erreurs ici
      console.error("Une erreur s'est produite:", error);
    });
}

function getBechdelTestByImdbId(imdbID) {
  const url = `http://bechdeltest.com/api/v1/getMovieByImdbId?imdbid=${imdbID}`;

  // Effectuer la requête GET
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Traiter les données ici
      console.log(data);
    })
    .catch((error) => {
      // Gérer les erreurs ici
      console.error("Une erreur s'est produite:", error);
    });
}

// Exemple d'utilisation

getMovieInfoByTitle("Her");
