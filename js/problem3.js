const loadAllCountries = async() =>{
    const url ='https://restcountries.com/v3.1/all';
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCountries(data);
    } catch (error) {
        console.log(error)
    }
}

const displayCountries = countries =>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText = '';
    countries.forEach(country => {
    const div = document.createElement("div");

  div.innerHTML =`
  <div class="card w-full h-full bg-base-100 shadow-xl border">
    <figure class="px-10 pt-10">
        <img src="${country.flags.png} " alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">Country Name:${country.name.common} </h2>
        <p>Population: ${country.population} </p>
        <p>Capital: ${country.capital} </p>
        <div class="card-actions">
        <button class="btn btn-info">Details</button>
        </div>
    </div>
    </div>
  `
  cardContainer.appendChild(div);
});
}

const loadRegionCountries = async(region) =>{
    const url = `https://restcountries.com/v3.1/region/${region}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCountries(data);
    } catch (error) {
        console.log(error)
    }
}
const showRegionCountries = () =>{
    const selectElement = document.getElementById("region-select");
    selectElement.addEventListener("change", function() {
    const regionValue = selectElement.value;
    loadRegionCountries(regionValue);  
  });
    
}
showRegionCountries();
//loadRegionCountries("asia");
loadAllCountries();

