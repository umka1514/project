const numberOfFilms = +prompt('Qancha filmlar ko\'rdingiz','');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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


