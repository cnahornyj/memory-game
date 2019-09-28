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
    }
];

//mystery characters 
const mystery = [
    {
        name: "Hennifer Lopez",
        pictureLarge: "images/hennifer_lopez_large",
    },
    {
        name: "The Coon",
        pictureLarge: "images/the_coon_large",
    },
    {
        name: "Professor Chaos",
        pictureLarge: "images/professor_chaos_large",
    }
]

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

//get the characters
const kyle = document.getElementById('kyle');
const kenny = document.getElementById('kenny');
const cartman = document.getElementById('cartman');
const stan = document.getElementById('stan');
const chef = document.getElementById('chef');
const towelie = document.getElementById('towelie');
const wendy = document.getElementById('wendy');
const timmy = document.getElementById('timmy');
//const mystery = document.getElementById('mystery');

//display attributes player_one
const cb = (i) => {
    if (players[0] === players[0]) {
        players[0].name = characters[i].name;
        players[0].picturePlayer = characters[i].pictureLarge;
        document.getElementById('img_player_one').src = players[0].picturePlayer
        document.getElementById('name_player_one').innerText = players[0].name
    } else if (players[0] != players[0]) {
        players[1].name = characters[i].name;
        players[1].picturePlayer = characters[i].pictureLarge;
        document.getElementById('img_player_one').src = players[0].picturePlayer
        document.getElementById('name_player_one').innerText = players[0].name
    } else {
    }
    }

// attributes characters player_one
kyle.addEventListener('click', () => cb(0));
kenny.addEventListener('click', () => cb(1));
cartman.addEventListener('click', () => cb(2));
stan.addEventListener('click', () => cb(3));
chef.addEventListener('click', () => cb(4));
towelie.addEventListener('click', () => cb(5));
timmy.addEventListener('click', () => cb(6));


// button ready for change players
//let button_player = true;
const buttonPlayerTwo = document.getElementById('btn_player_two');
const btnPlay = document.getElementsByClassName('btn_play');
buttonPlayerTwo.addEventListener('click', () => {
btnPlay.style.display = 'block';
});




