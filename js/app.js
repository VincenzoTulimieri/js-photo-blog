// dichiarazioni delle variabili e cattura degli elementi html

const rowElement = document.querySelector('.row');
const btnElement = document.querySelector('.btn');
const overlayElement = document.getElementById('overlay')

console.log(btnElement)
console.log(overlayElement)
const imgApi = 'https://lanciweb.github.io/demo/api/pictures/'


// presa degli elementi dall'api 
let items = '';

axios.get(imgApi)
    .then(response => {
        for (let i = 0; i < 6; i++) {
            // inserimento di dati e stampa in html
            const elementImg = response.data[i].url
            const elementTitle = response.data[i].title
            const elementDate = response.data[i].date
            items += `<div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card p-3" style="width: 18rem;">
                            <img src="${elementImg}" alt="">
                            <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                        <div class="card-body">
                          <p class="card-text vt-text-date vt-text"><strong>${elementDate}</strong></p>
                          <p class="card-text vt-text-description vt-title"><strong>${elementTitle}</strong></p>
                        </div>
                        </div>
                    </div>`
            rowElement.innerHTML = items;
        }
        const cardsElement = document.querySelectorAll('.card')
        console.log(cardsElement)
        cardsElement.forEach(element => {
            console.log(element)
            element.addEventListener('click', function () {
                overlayElement.classList.remove('d-none')
                
            })
        })
           
        btnElement.addEventListener('click', function () {
            overlayElement.classList.add('d-none')
        })


    }).catch(error => {
        console.log(error)
    })






// cardElement.addEventListener('click', function () {
//     overlayElement.classList.remove('d-none')
//     console.log('funziona')
// })



