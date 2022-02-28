const loadPhone = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
};

const displayPhone = phones => {
    console.log(phones)
    const searchPhone = document.getElementById('search-result');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `                 
                        <div class="card">
                            <div class="text-center">
                            <img class="w-50" src="${phone.image}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body text-center">
                            <h2>${phone.phone_name}</h2>
                                <h3 class="card-title">${phone.brand}</h3>
                                <p class="card-text"></p>
                                <button onclick="loadPhoneById('${phone.slug}')">Details</button>
                            </div>
                        </div>
        `;
        searchPhone.appendChild(div);
    });
};