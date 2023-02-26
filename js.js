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
    console.log(data.data[0])
    
    data.data.map(x => showInCard(x))
}
const showInCard = phone => {
    const cardContainer = document.getElementById('card-container');
    const newDiv = document.createElement('div');
    newDiv.classList.add('card col-4');
    newDiv.style.width='18rem';
    newDiv.innerHTML = `
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>            
        </div>
    `
}