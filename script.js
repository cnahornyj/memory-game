const card1 = ['img/looser.gif', 'img/kickass.gif', 'img/servietsky.gif', 'img/brk.gif', 'img/geekcartman.gif', 'img/timmy.gif', 'img/whatwhat.gif', 'img/wtf.gif'];

const tableCard1 = [...card1,...card1];

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

let playerTurn = true;

function majScorePlayer (){
    document.getElementById('scoreplayer1').innerHTML = `<p>${players[0].score}</p>`
    document.getElementById('scoreplayer2').innerHTML = `<p>${players[1].score}</p>`
}

// Boucle pour attribuer img et id //
for (let i = 0 ; i < tableCard1.length ; i++){
    frontFace[i].src = tableCard1[i];
    data[i].dataset.framework = tableCard1[i]
}

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


