/// attributes characters
const characters = [
    {
        name: "Kyle Broflovski",
        pictureSmall: "images/kyle_broflovski_small.png",
        pictureLarge: "images/kyle_broflovski_large.png"
    },
    {
        name: "Kenny McCormick",
        pictureSmall: "images/kenny_mcCormick_small.png",
        pictureLarge: "images/kenny_mcCormick_large.png"
    },
    {
        name: "Eric Theodore Cartman",
        pictureSmall: "images/eric_cartman_small.png",
        pictureLarge: "images/eric_cartman_large.png"
    },
    {
        name: "Stan Marsh",
        pictureSmall: "images/stan_marsh_small.png",
        pictureLarge: "images/stan_marsh_large.png"
    },
    {
        name: "Chef",
        pictureSmall: "images/chef_small.png",
        pictureLarge: "images/chef_large.png"
    },
    {
        name: "Towelie",
        pictureSmall: "images/towelie_small.png",
        pictureLarge: "images/towelie_large.png"
    },
    {
        name: "Timmy",
        pictureSmall: "images/timmy_small.png",
        pictureLarge: "images/timmy_large.png"
    },
    {
        name:"Hennifer Lopez",
        pictureLarge: "images/hennifer_lopez_large.png"
    },
    {
        name:"The Coon",
        pictureLarge: "images/the_coon_large.png"
    },
    {
        name:"Professor Chaos",
        pictureLarge: "images/professor_chaos_large.png"
    }
];

//players one and two
const players = [
    {
        name: "",
        picturePlayer: "",
    },
    {
        name: "",
        picturePlayer: "",
    }
];

//get the characters in the DOM
const kyle = document.getElementById('kyle');
const kenny = document.getElementById('kenny');
const cartman = document.getElementById('cartman');
const stan = document.getElementById('stan');
const chef = document.getElementById('chef');
const towelie = document.getElementById('towelie');
const wendy = document.getElementById('wendy');
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
const currentButton = document.getElementsByClassName
let playerTurn = 0;
const cb = (i) => {
    if (playerTurn === 0) { // c'est au tour du joueur un de jouer
        players[0].name = characters[i].name; 
        players[0].picturePlayer = characters[i].pictureLarge; 
        document.getElementById('img_player_one').src = players[0].picturePlayer // je change l'image du person choisi
        document.getElementById('name_player_one').innerText = players[0].name // je change le nom du perso choisi
        turn[0].addEventListener("click", () => { // au clique du btn_ready le bouton devient vert, et c'est au tour du joueur deux de choisir son perso
            playerTurn++;
            document.getElementById('btn_player_one').style.background = "url('images/btn_player_one_current.png')no-repeat";  
        });
     } else  { // c'est au tour du joueur deux de jouer
        players[1].name = characters[i].name;
        players[1].picturePlayer = characters[i].pictureLarge;
        document.getElementById('img_player_two').src = players[1].picturePlayer
        document.getElementById('name_player_two').innerText = players[1].name
        turn[1].addEventListener("click", () => {
            playerTurn++;
            document.getElementById('btn_player_two').style.background = "url('images/btn_player_two_current.png')no-repeat";  
            document.getElementById('btn_play').style.display = 'block';
        });
    } 
 }




 