// Création des listes et autres variables
let projects = [];
let cards = [];
let imgProjects = [];
let modal = document.getElementsByClassName('modal')[0];
let imgModal = document.getElementsByClassName('img_modal')[0];
let body = document.getElementsByTagName('body')[0];

// Récupération des élément du DOM
for (let i = 1; i <= 13; i++) {
    projects.push(document.getElementById(`project_${i}`));
    cards.push(document.getElementById(`card_${i}`));
};
imgProjects.push(document.getElementsByClassName('proj_img'));

// Cette boucle est obligatoire si l'on veut que le premier click soit pris en compte
for (let i = 1; i <= 13; i++) {
    cards[i-1].style.display = 'none'
};

for (let i = 1; i <= 13; i++) {
    projects[i-1].addEventListener('click', function() {
        for (let j = 1; j <= 13; j++) {
            if ((i%2 == 0 && j == (i-1)) || (i%2 == 1 && j == (i+1))){
                cards[j-1].style.display = 'none';
                projects[j-1].style.borderColor = "rgb(247, 233, 235)";
                projects[j-1].style.backgroundColor = "rgb(247, 233, 235)";
            } 
        };
        if (cards[i-1].style.display == 'none') {
            projects[i-1].style.borderColor = "black";
            projects[i-1].style.backgroundColor = '#ecacac';
            cards[i-1].style.display = 'flex';
        } else {
            cards[i-1].style.display = 'none';
            projects[i-1].style.borderColor = "rgb(247, 233, 235)";
            projects[i-1].style.backgroundColor = "rgb(247, 233, 235)";
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
// function biggerImg(img) {
//     img.classList.add('active');
// };
// for (let imgProject of imgProjects) {
//     imgProject.addEventListener('click', function() {
//         imgProject.style.transform = 'scale(2)';
//     });
// };