const url = "https://pokeapi.co/api/v2/pokemon";
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

//fetch(url)
 //   .then((res) => res.json())
 //   .then((data) => console.log(data))
   // .catch((err) => console.log(err))
    
