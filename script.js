//DEFINITION DES VARIABLES

//Tableau d'images
const card1 = ['img/looser.gif', 'img/kickass.gif', 'img/servietsky.gif', 'img/brk.gif', 'img/geekcartman.gif', 'img/timmy.gif', 'img/whatwhat.gif', 'img/wtf.gif'];
const tableCard1 = [...card1,...card1];

//Chemin vers images et data
const frontFace = document.getElementsByClassName('front-face');
const data = document.getElementsByClassName('memory-card');

// Création de la variable cards  ??? 
const cards = document.querySelectorAll('.memory-card');

/* Création de la variable hasFlippedCard de la valeur false (boléenne)  */
let hasFlippedCard = false;
/* Création des variables firstCard & secondCard  */
let firstCard, secondCard; 

//Création des players et du score d'entrée
const players = [{
    name : '',
    img : '',
    score : 100, },
    { name : '',
    img : '',
    score : 100,}
]

//A qui le tour? true = joueur 1 / false = joueur 2
let playerTurn = true;

//Met le score à jour à l'appel
function majScorePlayer (){
    document.getElementById('scoreplayer1').innerHTML = `<p>${players[0].score}</p>`
    document.getElementById('scoreplayer2').innerHTML = `<p>${players[1].score}</p>`
}





//FONCTION RANDOM CARTE ----------------------------------------------------

const randomCarte = (img, number) => {

    //CREATION D'UN TABLEAU RANDOM DE 0 à 16

    //Permet de créer un chiffre au hasard d'une valeur max de 'max'
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //Permet de créer un tableau avec des chiffres aléatoire de 0 à 16
    const tableCreation = () => {
        const tableau = new Array(16);
        for (let i = 0 ; i < tableau.length ; i++){
            tableau[i] = i;
        }

        const newTableau = new Array(16);

        for (let i = 0 ; i < newTableau.length ; i++){
            let randomValue = getRandomInt(tableau.length-1)
            newTableau[i] = tableau[randomValue]
            tableau.splice(randomValue, 1);
        }

        return newTableau
    }

    //Créer tableau à partir de la fonction ci-dessus

    const randomTable = tableCreation();

    //ATTRIBUER UNE IMAGE RANDOM A UNE CASE

    //Attribuer une image au hasard grace à l'index de randomTable

    for (let i = 0 ; i < randomTable.length ; i++){

        img[i].src = tableCard1[randomTable[i]];
        number[i].dataset.framework = tableCard1[randomTable[i]]

    }

}

//APPEL DE LA FONCTION randomCarte ------------------------------------------

randomCarte(frontFace, data);

/* Fonction click fait retourner carte  */
function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

    return ;
    } 

      hasFlippedCard = false;
      secondCard = this;
    
      checkForMatch();
    }

/* Création de la fonction checkForMatch permettant de vérifier si les images correspondent  */
function checkForMatch() { 
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

   // isMatch ? disableCards() : unflipcards();

    if (isMatch){
        disableCards()
        if (playerTurn){
            players[1].score -= 20;
        }
        else{
            players[0].score -= 20
        }
    }
    else {
        unflipcards()
        playerTurn = !playerTurn;
    }
    majScorePlayer();
}

/* Fonction qui permet de laisser fixe les deux cartes si elles correspondent ??? */
function disableCards() { 
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); 
}

/* Fonction qui permet de retourner les deux cartes si elles ne correspondent pas */
function unflipcards() { 
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

cards.forEach(card => card.addEventListener('click' , flipCard))

