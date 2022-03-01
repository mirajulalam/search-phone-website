const errorMessage = document.getElementById('error-message');
errorMessage.style.display = "none";
const loadPhone = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    // clear data
    searchBox.value = '';
    if (searchText.length == '') {
        errorMessage.style.display = "block"
    }
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
    errorMessage.style.display = "none";
};

const displayPhone = phones => {
    console.log(phones)
    const searchPhone = document.getElementById('search-result');
    searchPhone.textContent = '';
    if (phones.length == 0) {
        errorMessage.style.display = "block";
    }
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `                 
                        <div class="card p-3">
                            <div class="text-center">
                            <img class="w-50" src="${phone.image}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body text-center">
                            <h2>${phone.phone_name}</h2>
                                <h3 class="card-title">${phone.brand}</h3>
                                <p class="card-text"></p>
                                <button  onclick="loadPhoneById('${phone.slug}')" class="bg-primary rounded text-white border px-4 py-1 fs-5">Details</button>
                            </div>
                        </div>
        `;
        searchPhone.appendChild(div);
    });
};
const loadPhoneById = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneByDetails(data.data))
};
const displayPhoneByDetails = info => {
    console.log(info)
    const phoneDetails = document.getElementById('phone-Details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="text-center p-3">
    <img  src="${info.image}" class="card-img-top w-50 mb-3" alt="...">
    </div>
                    <div class="card-body">
                        <h2 class="card-title">Name: ${info.name}</h2>
                        <h4>ReleaseDate: ${info.releaseDate || 'No release date found'}</h4>
                        <p class="card-text">Storage: ${info.mainFeatures.storage}
                         </p>
                         <p class="card-text">Memory: ${info.mainFeatures.memory}
                         </p>
                        <p class="card-text">DisplaySize: ${info.mainFeatures.displaySize}
                         </p>
                        <p class="card-text">ChipSet: ${info.mainFeatures.chipSet}
                         </p>
                        <h5 class="card-text">Sensors: ${info.mainFeatures.sensors}
                      </h5>                
                         <p">Bluetooth: ${info.others.Bluetooth}</p>
                         <p">Gps: ${info.others.GPS}</p>
                         <p">Nfc: ${info.others.NFC}</p>
                         <p">Radio: ${info.others.Radio}</p>
                         <p">Usb: ${info.others.USB}</p>
                         <p">Wlan: ${info.others.WLAN}</p>
                    </div>
    `;
    phoneDetails.appendChild(div)
}