let heart = document.getElementById('heart');
let h_bg = document.getElementsByClassName('h_bg')[0]

heart.addEventListener('onclick', function (val) {
    if (h_bg.style.background == 'white') {
        h_bg.style.background = 'red';
    }
    else {
        h_bg.style.background = 'white';
    }
})

// for searching the products
const search = () => {
    const searchbar = document.getElementById("search-bar").value.toUpperCase();
    const storeitems = document.getElementById("hoodie");
    const product = storeitems.querySelectorAll(".shop-content");
    const productname = document.getElementsByTagName("h3");

    for (let i = 0; i < productname.length; i++) {
        let match = product[i].getElementsByTagName("h3")[0];

        if (match) {
            let text = match.textContent || match.innerHTMl;

            if (text.toUpperCase().indexOf(searchbar) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
};