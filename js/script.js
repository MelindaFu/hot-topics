const main = document.querySelector('.main');

const links = document.querySelectorAll('.nav-link');

let url = 'partials/home.html';


function loadContent(){
    fetch(url)
        .then(function(rsp){
        return rsp.text();
    }).then(function (data){
        main.innerHTML = data;
    });
};

function selectContent(e){
    e.preventDefault();
    let elem = e.target;
    url = elem.href;
    loadContent();
}

for(let link of links){
    link.addEventListener("click", selectContent);
};
loadContent();