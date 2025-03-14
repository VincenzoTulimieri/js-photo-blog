// dichiarazioni delle variabili e cattura degli elementi html

const rowElement = document.querySelector('.row');
console.log(rowElement);
const cardElement = document.querySelector('.card')
console.log(cardElement)
const imgApi = 'https://lanciweb.github.io/demo/api/pictures/'



let items='';
for (let i = 0; i < 6; i++) {
    axios.get(imgApi)
        .then(response => {
            const elementImg = response.data[i].url
            const elementTitle = response.data[i].title
            console.log(elementTitle)
            items+=`<div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card p-3" style="width: 18rem;">
                        <img src="${elementImg}" alt="">
                        <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, facere.</p>
                        </div>
                    </div>
                </div>`
            rowElement.innerHTML = items;
        }).catch(error => {
            console.log(error)
        })
        
    }
    

  