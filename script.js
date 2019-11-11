/// attributes characters
const characters = [
    {
        name: "Kyle Broflovski",
        pictureSmall: "images/kyle_broflovski_small.png",
        pictureLarge: "images/kyle_broflovski_large.png",
        sound: new Audio("sounds/Yourastupidahole.mp3")
    },
    {
        name: "Kenny McCormick",
        pictureSmall: "images/kenny_mcCormick_small.png",
        pictureLarge: "images/kenny_mcCormick_large.png",
        sound: new Audio("sounds/Kennylaughing.mp3")
    },
    {
        name: "Eric Theodore Cartman",
        pictureSmall: "images/eric_cartman_small.png",
        pictureLarge: "images/eric_cartman_large.png",
        sound: new Audio("sounds/Hippy.mp3")
    },
    {
        name: "Stan Marsh",
        pictureSmall: "images/stan_marsh_small.png",
        pictureLarge: "images/stan_marsh_large.png",
        sound: new Audio("sounds/Dirtylittlebastard.mp3")
    },
    {
        name: "Chef",
        pictureSmall: "images/chef_small.png",
        pictureLarge: "images/chef_large.png",
        sound: new Audio("sounds/chef_fromyourass.mp3")
    },
    {
        name: "Towelie",
        pictureSmall: "images/towelie_small.png",
        pictureLarge: "images/towelie_large.png",
        sound: new Audio("sounds/towelie_alittlehigh.mp3")
    },
    {
        name: "Timmy",
        pictureSmall: "images/timmy_small.png",
        pictureLarge: "images/timmy_large.png",
        sound: new Audio("sounds/timmy_scream.mp3")
    },
    {
        name:"Hennifer Lopez",
        pictureLarge: "images/hennifer_lopez_large.png",
        sound: new Audio("sounds/JenniferLopez.mp3")
    },
    {
        name:"The Coon",
        pictureLarge: "images/the_coon_large.png",
        sound: new Audio("sounds/Coon.mp3")
    },
    {
        name:"Professor Chaos",
        pictureLarge: "images/professor_chaos_large.png",
        sound: new Audio("sounds/Chaos.mp3")
    }
];

//players one and two
const players = [
    {
        name: "",
        picturePlayer: "",
        score: 100,
        sound: ""
    },
    {
        name: "",
        picturePlayer: "",
        score: 100,
        sound: ""
    }
];

const currentPage = document.location.href


if (currentPage.endsWith('enter.html') || currentPage.endsWith('index.html')){
    //get the characters in the DOM
    const kyle = document.getElementById('kyle');
    const kenny = document.getElementById('kenny');
    const cartman = document.getElementById('cartman');
    const stan = document.getElementById('stan');
    const chef = document.getElementById('chef');
    const towelie = document.getElementById('towelie');
    const timmy = document.getElementById('timmy');
    const mystery = document.getElementById('mystery');

    // attributes characters 
    kyle.addEventListener('click', () => cb(0));
    kenny.addEventListener('click', () => cb(1));
    cartman.addEventListener('click', () => cb(2));
    stan.addEventListener('click', () => cb(3));
    chef.addEventListener('click', () => cb(4));
    towelie.addEventListener('click', () => cb(5));
    timmy.addEventListener('click', () => cb(6));
    mystery.addEventListener('click',() => cb(randomMystery(7,9)));

    //mystery characters 
    function randomMystery(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // personnage aléatoire tiré du json characters entre la place 7 et 9
    }

    //display attributes player_one
    const turn = document.getElementsByClassName('turn');
    //const currentButton = document.getElementsByClassName
    let playerTurn = 0;
    const cb = (i) => {
        if (playerTurn != 2){
        if (playerTurn === 0) { // c'est au tour du joueur un de jouer
            players[0].name = characters[i].name; 
            players[0].picturePlayer = characters[i].pictureLarge; 
            players[0].sound = characters[i].sound;
            document.getElementById('img_player_one').src = players[0].picturePlayer // je change l'image du person choisi
            document.getElementById('name_player_one').innerText = players[0].name // je change le nom du perso choisi
            turn[0].addEventListener("click", () => { // au clique du btn_ready le bouton devient vert, et c'est au tour du joueur deux de choisir son perso
                players[0].sound.play()
                playerTurn++;
                document.getElementById('btn_player_one').style.background = "url('images/btn_player_one_current.png')no-repeat";  
            });
        } else  { // c'est au tour du joueur deux de jouer
            players[1].name = characters[i].name;
            players[1].picturePlayer = characters[i].pictureLarge;
            players[1].sound = characters[i].sound;
            document.getElementById('img_player_two').src = players[1].picturePlayer
            document.getElementById('name_player_two').innerText = players[1].name
            turn[1].addEventListener("click", () => {
                players[1].sound.play()
                playerTurn++;
                document.getElementById('btn_player_two').style.background = "url('images/btn_player_two_current.png')no-repeat";  
                document.getElementById('btn_play').style.display = 'block';
            });
        } 
    }
        localStorage.setItem('player', JSON.stringify(players));
    }
}


//DEFINITION DES VARIABLES -------------------------------------------------------

//Tableau d'images
const card1 = ['images/arms01.jpg', 'images/arms02.jpg', 'images/arms03.jpg', 'images/arms04.jpg', 'images/arms05.jpg', 'images/arms06.jpg', 'images/arms07.jpg', 'images/arms08.jpg'];
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

//A qui le tour? true = joueur 1 / false = joueur 2
let whosTurn = true;

if (currentPage.endsWith('game.html')){

    const players = JSON.parse(localStorage.getItem('player'))

    // Fonction de Mise à jour des score dans les blocs player
    const playerCard = (score1, score2, isturn) => {
        //Nom joueur
        document.getElementById("playerName1").innerText = `${players[0].name}`
        document.getElementById("playerName2").innerText = `${players[1].name}`


        //Image joueur
        document.getElementById("playerImg1").src=`${players[0].picturePlayer}`
        document.getElementById("playerImg2").src=`${players[1].picturePlayer}`


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

        if (isturn){
            document.getElementById("yourTurn1").style.visibility = "visible"
            document.getElementById("yourTurn2").style.visibility = "hidden"
        }else{
            document.getElementById("yourTurn1").style.visibility = "hidden"
            document.getElementById("yourTurn2").style.visibility = "visible"
        }

    }

    //Initialisation des scores
    playerCard(players[0].score, players[1].score, whosTurn);


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
        if (this.className!='memory-card flip'){
            this.classList.add('flip');

            if (!hasFlippedCard) {
                // first click
                hasFlippedCard = true;
                firstCard = this;
                
                if (countForCheat >= 10){
                for (let i = 0 ; i < cards.length ; i++){
                    if (cards[i].dataset.framework === firstCard.dataset.framework){
                        cards[i].style.border = "2px red solid"
                    }
                }
            }

            return ;
            } 

            hasFlippedCard = false;
            secondCard = this;
            
            checkForMatch();
            }
        }

    //Création de la fonction checkForMatch permettant de vérifier si les images correspondent
    function checkForMatch() { 

        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    // isMatch ? disableCards() : unflipcards();

        const sound = new Audio("sounds/fight1.mp3");

        if (isMatch){
            disableCards()
            if (whosTurn){
                players[1].score -= 25;
                document.getElementById('playerImg2').style.animation = "shake 0.1s 5"
               setTimeout(function(){
                   document.getElementById('playerImg2').style.animation = ""
                 }, 600)
                 sound.play()
            }
            else{
                players[0].score -= 25
                document.getElementById('playerImg1').style.animation = "shake 0.1s 5"
                setTimeout(function(){
                    document.getElementById('playerImg1').style.animation = ""
                  }, 600)
                  sound.play()
            }
        }
        else {
            cards.forEach(card => card.removeEventListener('click' , flipCard))//empeche de retourner d'autres cartes
            unflipcards()
            whosTurn = !whosTurn;
            }
        playerCard(players[0].score, players[1].score, whosTurn);

            if (players[0].score === 0){
                document.getElementById("looser").src= players[0].picturePlayer
                document.getElementById("modal").style.display = "flex"

            }
            if (players[1].score === 0){
                document.getElementById("looser").src= players[1].picturePlayer
                document.getElementById("modal").style.display = "flex"
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

    function goToUrl (wanted) {
        document.location.href = wanted
    }

    //Mode triche
    let countForCheat = 0
    document.getElementById("KO").addEventListener('click', function(){
        countForCheat += 1
        console.log(countForCheat)
        if (countForCheat === 10) {
            document.getElementById("KO").style.border = '2px yellow solid'
            console.log("Boum")
        }
    })

    

}
