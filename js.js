// search button listener
const searchField = document.getElementById('search-field');
document.getElementById('btn-search').addEventListener('click', function () {
    getSearch()
})
// enter key to search field
searchField.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        getSearch()
    }
})
// getting search text 
const getSearch = () => {
    const searchFieldText = searchField.value;
    fetchingSearch(searchFieldText);
    // searchField.value ='';
}
const fetchingSearch = searchText => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFetchedData(data))
}
const displayFetchedData = data => {
    data.data.map(x => showInCard(x))
}
const showInCard = phone => {
    console.log(phone)
    const cardContainer = document.getElementById('card-container');
    const newDiv = document.createElement('div');
    newDiv.classList.add('card', 'col-4', 'g-4');
    newDiv.style.width='18rem';
    newDiv.innerHTML = `
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Brand: ${phone.brand}</h5>
            <h6 class="card-title">Model: ${phone.phone_name}</h6>
            <p class="card-text">${phone.slug}</p>
            <button class="btn btn-primary">Details</button>            
        </div>
    `
    cardContainer.appendChild(newDiv)
}