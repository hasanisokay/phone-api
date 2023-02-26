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
    if(searchFieldText =="jannat" || searchFieldText =="Jannat" || searchFieldText =="জান্নাত"){
        return alert("জান্নাত তোমাকে ভালোবাসি")
    }
    fetchingSearch(searchFieldText);
    searchField.value ='';
}
const fetchingSearch = searchText => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.status){
                displayFetchedData(data)
            }
            else{
                alert('No phone found. Try with another brand')
            }
        })
}
const cardContainer = document.getElementById('card-container');
const displayFetchedData = data => {
    cardContainer.innerHTML = ``;
    data.data.map(x => showInCard(x))
}
const showInCard = phone => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card', 'col-4', 'g-4');
    newDiv.style.width = '18rem';
    newDiv.innerHTML = `
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Brand: ${phone.brand}</h5>
            <h6 class="card-title">Model: ${phone.phone_name}</h6>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneModal"  onclick="slugF('${phone.slug}')">Details</button>            
        </div>
    `
    cardContainer.appendChild(newDiv)
}
function slugF(x) {
    fetch(`https://openapi.programming-hero.com/api/phone/${x}`)
        .then(res => res.json())
        .then(data => {
            const slugInfo = data.data.mainFeatures;
            document.getElementById('phoneModalLabel').innerText = x;
            document.getElementById('phone-storage').innerText = slugInfo.storage;
            document.getElementById('phone-display').innerText = slugInfo.displaySize;
            document.getElementById('phone-chipset').innerText = slugInfo.chipSet;
            document.getElementById('phone-memory').innerText = slugInfo.memory;
            const sensors = document.getElementById('phone-sensors');
            slugInfo.sensors.map(sensor=> {
                const newSpan = document.createElement('span');
                newSpan.innerText = sensor +", ";
                sensors.appendChild(newSpan)
            })
        })
}
document.getElementById