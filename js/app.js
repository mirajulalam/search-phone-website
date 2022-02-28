const loadPhone = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
};