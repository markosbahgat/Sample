
fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
  .then(response => response.json())
  .then(data =>  {
    var html = data.map(photo => {
   return  `<div Class="conatiner col-3"><img src="${photo.url}"><h1>${photo.id}</h1></div>`;
    }).join("");
      document
      .querySelector("#main-post")
      .insertAdjacentHTML("afterbegin", html);
  
    });
  