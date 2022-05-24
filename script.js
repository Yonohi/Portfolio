// Création des listes et autres variables
let nbProject = 13;
let projects = [];
let cards = [];
let modal = document.getElementsByClassName('modal')[0];
let imgModal = document.getElementsByClassName('img_modal')[0];
let body = document.getElementsByTagName('body')[0];

// Récupération des élément du DOM
for (let i = 1; i <= nbProject; i++) {
    projects.push(document.getElementById(`project_${i}`));
    cards.push(document.getElementById(`card_${i}`));
};

// Cette boucle est obligatoire si l'on veut que le premier click soit pris en compte
for (let i = 1; i <= nbProject; i++) {
    cards[i-1].style.display = 'none'
};

for (let i = 1; i <= nbProject; i++) {
    projects[i-1].addEventListener('click', function() {
        for (let j = 1; j <= nbProject; j++) {
            if ((i%2 == 0 && j == (i-1)) || (i%2 == 1 && j == (i+1))){
                cards[j-1].style.display = 'none';
                projects[j-1].classList.remove('active');
            } 
        };
        if (cards[i-1].style.display == 'none') {
            projects[i-1].classList.add('active');
            cards[i-1].style.display = 'flex';
        } else {
            cards[i-1].style.display = 'none';
            projects[i-1].classList.remove('active');
        };
    })
};
function biggerImg(img) {
    modal.style.display = 'flex';
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    body.style.overflow = "hidden";
};

function closeModal() {
    modal.style.display = 'none';
    body.style.overflow = "scroll";
};
