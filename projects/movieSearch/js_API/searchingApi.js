function searching_movie() {
	// Fetch API
	const control = document.getElementById("search_control"); // Selector to html ID search_control
	const Input = control.value; // Get The search value
	fetch("https://www.omdbapi.com/?apikey=68d923d9&s=" + Input)
		.then((response) => response.json()) // Fetch API to Json File
		.then((response) => {
			Search_API(response); // Locate response data result to Data_API Function
		})
		.catch((err) => console.error(err)); // Get information error from API
	//fetch API //

	// Do processing data responses
	function Search_API(response) {
		const movies = response.Search; // process response search results into movies variable
		let cards = ""; // inisiate cards
		movies.forEach((m) => {
			cards += showcards(m); // Show cards display based on the number of results
		});
		console.log(movies); // Check results by console
		const paste = document.getElementById("Smovie_container_cards");
		paste.innerHTML = `<div class="row">` + cards + `</div>`; // Put many cards into cards container

		// function button details
		const detailbt = document.querySelectorAll(".modal-detail-button"); // get button details value
		detailbt.forEach((btn) => {
			btn.addEventListener("click", function () {
				const imdbid = this.dataset.imdbid; //Getting imdbid datas each clicked on single card details button

				// Show information about Details
				fetch("https://www.omdbapi.com/?apikey=68d923d9&i=" + imdbid)
					.then((response) => response.json()) // Fetch API to Json File
					.then((m) => {
						const movieDetail = showMovieDetail(m); // puts details information into modal adjust imdbid
						const modalBody = document.querySelector(".modal-body");
						modalBody.innerHTML = movieDetail;
					})
					.catch((err) => console.error(err)); // Get information error from API
			}); // Show information about Details //
		}); // function button details //
	} // Do processing data responses //
}

function showcards(m) {
	return `
		<div class="col my-4">
			<div class="card h-100">
				<img src="${m.Poster}" class="card-img-top" alt= Movie "${m.Title}">
				<div class="card-body">
				<h5 class="card-title">${m.Title}</h5>
				<h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
				<a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#details_movie" data-imdbid="${m.imdbID}">Details</a>
				</div>
			</div>
		</div>
`;
}

function showMovieDetail(m) {
	return `<div class="container-fluid">
    <div class="row">
      <div class="col">
        <img src="${m.Poster}" class="img-fluid" alt="">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item">
            <h4>${m.Title} (${m.Year})</h4>
          </li>
          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writter : </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
