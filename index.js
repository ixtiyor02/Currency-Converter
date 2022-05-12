let firstSelect = document.querySelector('.first-select')
let secondSelect = document.querySelector('.second-select')
let getBtn = document.querySelector('.get-btn')
let exRate = document.querySelector('.exchange-rate')
let input = document.querySelector('.amount input')

let valyuta;
for (let country in country_code) {
    let option = document.createElement('option');
    option.value = `${country}`;
    option.textContent = `${country}`
    firstSelect.appendChild(option);
}


for (let country in country_code) {
    let option = document.createElement('option');
    option.value = `${country}`;
    option.textContent = `${country}`
    secondSelect.appendChild(option);
}

getBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let x = firstSelect.value;
    let y = secondSelect.value;
    console.log(`${x} + ${y}`)
    getApi()
})


function getApi() {
    let url = `https://v6.exchangerate-api.com/v6/e06a3a2bee2ae56779a4fbfb/latest/${firstSelect.value}`
    fetch(url)
        .then((res) => res.json())
        .then((value) => {
            console.log(firstSelect.value)
            console.log(`input value is ${input.value}`)
            let exchangeRate = value.conversion_rates[secondSelect.value]
            console.log(`qiymat : ${exchangeRate}`)


            let newElement = document.createElement('p')
            newElement.textContent = `${input.value} ${firstSelect.value} = ${exchangeRate}${secondSelect.value}`
            exRate.appendChild(newElement)


        })

}