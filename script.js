const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click' , flipCard))

/*
const img = [ 
    {
        numberImg : 0;
        pictures : src="";
    },
    {
        numberImg : 1;
        pictures : src="";
    },
    {
        numberImg : 2;
        pictures : src="";
    },
    {
        numberImg : 3;
        pictures : src="";
    },
    {
        numberImg : 4;
        pictures : src="";
    },
    {
        numberImg : 5;
        pictures : src="";
    },
    {
        numberImg : 6;
        pictures : src="";
    },
    {
        numberImg : 7;
        pictures: src="";
    },
]

*/
