const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/";

fetch(rickAndMortyUrl)
	.then((response) => {
		return response.json();
	})
	.then((json) => handleJson(json))
	.catch((error) => console.log(error));

function handleJson(json) {
	const results = json.results;
	console.dir(results);

	const resultsContainer = document.querySelector(".row.results");

	let html = "";

	results.forEach(function(result) {
		let imageUrl = "https://via.placeholder.com/300";

		if (result.image) {
			imageUrl = result.image;
		}

		let typeResult = "Unknown";

		if (result.type) {
			typeResult = result.type;
		}

		html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                        <img class="image" src="${imageUrl}" alt="Character Name">
                        <div class="details">
                            <h4 class="name">${result.name}</h4>
                            <p>Type: ${typeResult}</p>    
                            <p>Episode count: ${result.episode.length}</p>                                  
                            <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                        </div>
                    </div>
                </div>`;
	});

	resultsContainer.innerHTML = html;
}
