// dichiarazioni delle variabili e cattura degli elementi html
const rowElement = document.querySelector('.row');
const btnElement = document.querySelector('.vt-btn');
const overlayElement = document.getElementById('overlay')

// salvataggio in una variabile dell'Api
const dateApi = 'https://lanciweb.github.io/demo/api/pictures/'


let items = '';
axios.get(dateApi)
    .then(response => {
        // iterazione degli elementi dell'Api
        for (let i = 0; i < 6; i++) {
            // prendo i singoli elementi dall'Api
            const elementImg = response.data[i].url
            const elementTitle = response.data[i].title
            const elementDate = response.data[i].date
            // creo elemento html dove inserisco gli elementi presi
            items += `<div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card p-3" style="width: 18rem;">
                            <img src="${elementImg}" alt="${elementTitle}">
                            <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                        <div class="card-body">
                          <p class="card-text vt-text-date vt-text"><strong>${elementDate}</strong></p>
                          <p class="card-text vt-text-description vt-title"><strong>${elementTitle}</strong></p>
                        </div>
                        </div>
                    </div>`
            // stampo gli elemnti creati nel DOM   
            rowElement.innerHTML = items;
        }

        // prendo gli elementi creati
        const cardsElement = document.querySelectorAll('.card')
        //itero sugli elementi 
        cardsElement.forEach(element => {
            // metto gli elementi in ascolto di un evento e mostro l'overlay
            element.addEventListener('click', function () {
                // prendo l'immagine corrente della card
                const currentImage = element.querySelector('img').src
                const currentAlt = element.querySelector('img').alt
                // inserisco l'immagine corrente al overlay
                overlayElement.querySelector('img').src = currentImage
                overlayElement.querySelector('img').alt = currentAlt
                overlayElement.classList.remove('d-none')
                document.body.classList.add('no-scroll') 
                
            })
        })

        // nascondo di nuovo l'overlay
        btnElement.addEventListener('click', function () {
            document.body.classList.remove('no-scroll')
            overlayElement.classList.add('d-none')
               
        })


    }).catch(error => {
        console.log(error)
    })










