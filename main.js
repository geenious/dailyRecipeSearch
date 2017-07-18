let section = document.querySelector("#results");


let searchButton = document.querySelector('#search');
let queryInput = document.querySelector('#input');
let url = "https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=";

searchButton.addEventListener('click', function() {
  let val = queryInput.value;
  let finalUrl = url + val;

  fetch(finalUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    let html = "";
    for (let i = 0; i < data.results.length; i++) {

      let thumbnail = data.results[i].thumbnail || "http://www.placecage.com/80/80";
      

      html += `
        <div>
        <h3>${data.results[i].title}</h3>
        <img src="${thumbnail}">
        <p>Ingredients: ${data.results[i].ingredients}</p>
        <p>Find more information <a href="${data.results[i].href}">here</a></p>
        </div>`
    }
    section.innerHTML = html;
  });
});
