//DEFINITION DES VARIABLES -------------------------------------------------------

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
    name : 'cartman',
    img : 'img/Temporaire/im3.png',
    score : 100, },
    { name : 'Stan',
    img : 'img/Temporaire/im2.png',
    score : 100,}
]

//A qui le tour? true = joueur 1 / false = joueur 2
let playerTurn = true;


// Fonction de Mise à jour des score dans les blocs player
const playerCard = (score1, score2, turn) => {
    //Nom joueur
    document.getElementById("playerName1").innerText = `${players[0].name}`
    document.getElementById("playerName2").innerText = `${players[1].name}`


    //Image joueur
    document.getElementById("playerImg1").src=`${players[0].img}`
    document.getElementById("playerImg2").src=`${players[1].img}`


    //Barre de vie
    const progressBarre1 = document.getElementById("progressBarre1");
    const progressBarre2 = document.getElementById("progressBarre2");

    //Attribue le score à la variable
    let scorePlayer1Barre = score1;
    let scorePlayer2Barre = score2;

    //Applique la valeur du score à la taille de la jauge
    progressBarre1.style.width=`${scorePlayer1Barre}%`;
    progressBarre2.style.width=`${scorePlayer2Barre}%`;

    //Player Turn

    if (turn){
        document.getElementById("yourTurn1").style.visibility = "visible"
        document.getElementById("yourTurn2").style.visibility = "hidden"
    }else{
        document.getElementById("yourTurn1").style.visibility = "hidden"
        document.getElementById("yourTurn2").style.visibility = "visible"
    }

}

//Initialisation des scores
playerCard(players[0].score, players[1].score, playerTurn);


//Fonction pour mélange des cartes
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
            let randomValue = getRandomInt(tableau.length)
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

//Mélange des cartes
randomCarte(frontFace, data);


//Attribu à chaque carte l'event Click associé à la fonction flipcard
cards.forEach(card => card.addEventListener('click' , flipCard))

//Fonction click fait retourner carte
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

//Création de la fonction checkForMatch permettant de vérifier si les images correspondent
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
        cards.forEach(card => card.removeEventListener('click' , flipCard))//empeche de retourner d'autres cartes
        unflipcards()
        playerTurn = !playerTurn;
        }
    playerCard(players[0].score, players[1].score, playerTurn);

    if (players[0].score === 0 || players[1].score === 0){
        document.getElementById("modalTemp").style.display="flex";
    }
}

//Fonction qui permet de laisser fixe les deux cartes si elles correspondent ???
function disableCards() { 
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); 
}


//Fonction qui permet de retourner les deux cartes si elles ne correspondent pas
function unflipcards() { 
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        cards.forEach(card => card.addEventListener('click' , flipCard));//Permet à nouveau de retourner les cartes
    }, 1200);
}



//TEMPORAIRE FIN DE PARTIE
const newGame = () => {
    document.location.href="index.html"
}

//TEMPORAIRE FIN DE PARTIE
document.getElementById("newGame").addEventListener('click', newGame);





// audio


function play(){
    const audio = document.getElementById("audio");
    audio.play();
    }



