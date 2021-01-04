let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Qancha filmlar ko\'rdingiz','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Qancha filmlar ko\'rdingiz','');
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    
        const a = prompt('Oxirgi ko\'rgan filmingiz?', ''),
              b = +prompt('Nechchiga baholaysiz?', '');
    
              if (!a || a.length >= 50) {
                  alert('Film nomini uzunligi 50 ta harfdan oshmasligi kerak va bo\'sh bo\'lmasligi kk')
                  break;
              }else {
                personalMovieDB.movies[a] = b;
              }
    }
}

rememberMyFilms();


function detectPersonalLevel() {

    let count = personalMovieDB.count;

    if (count <= 10 ) {
        alert('Siz juda oz film ko\'ribsiz!');
    } else if (count > 10 &&  count < 30) {
        alert('Siz klasik film tomoshabini ekansiz!');
    } else if (count >= 30) {
        alert('Siz film tomosha qilish bo\'yicha export ekansiz!');
    }else {
        alert('Error');
    }

    console.log(personalMovieDB);
}

detectPersonalLevel();


function writeYourGenres(){
    
    for(let i = 1; i <= 3; i++) {
        let a = prompt(`siz yoqtirgan janrdagi film No: ${i} `,'');

        if(a == "" || a == null) {
            i--;
        }else {
            personalMovieDB.genres[i - 1] = prompt(`siz yoqtirgan janrdagi film No: ${i} `,'');
        }

    }
}

writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }else {
        console.log('Error');
    }
}

showMyDB();

//functions

// let num = 20;

// function showFirstMassage() {
//     console.log('Hello world!');
//     let num = 5;
// }

// console.log(num);
// showFirstMassage();