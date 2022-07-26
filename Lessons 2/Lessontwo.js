// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array=['string',1,'book',true,false,15,3.14,'magazine','newspaper',10 ];
console.log(array [0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookOne = {
    title: "Sherlock Holmes",
    pageCount: 1208,
    genre:"detective"
}

let bookTwo ={
    title: "Harry Potter",
    pageCount: 1855,
    genre: "novel"
}

let bookThree={
    title:"The green mile",
    pageCount:877,
    genre:"novel"
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let bookFour= {
    title: "Misery",
    pageCount: 564,
    genre: "thriller",
    author: ["Stephen King",78 ]
}


let bookFive={
    title:"A game of thrones",
    pageCount:896,
    genre:"novel",
    author: ["George R.R. Martin",68]
};

let bookSix={
    title: "The war of the worlds",
    pageCount:542,
    genre:"Science fiction",
    author:["Herbert Wells",147]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const nick={
    name:"Nick",
    username:"Niko@51",
    password: 1232445
}

const john={
    name: "John",
    username: "John12@",
    password: 42135132
}

const roman={
    name:"Roman",
    username:"Roman@78545",
    password:5121532
}

const anna={
    name:"Anna",
    username:"A@nna87",
    password:321215
}

const viktoria={
    name:"Viktoria",
    username:"Vik@5222",
    password:6153558
}

const max={
    name:"Max",
    username:"Maxim",
    password:2326562
}

const igor={
    name:"Igor",
    username:"Igor@00",
    password:12135
}
const natalia={
    name:"Natalia",
    username:"N@t@lia",
    password:89899
}

const adam={
    name:"Adam",
    username:"@Dam",
    password:44568761
}

const boris={
    name:"Boris",
    username:"Bor",
    password:84512325
}

let users=[nick,john,roman,anna,viktoria,max,igor,natalia,adam,boris]
console.log(users[0].password)
console.log(users[1]["password"])
console.log(users[2].password)
console.log(users[3]["password"])
console.log(users[4].password)
console.log(users[5]["password"])
console.log(users[6].password)
console.log(users[7]["password"])
console.log(users[8].password)
console.log(users[9]["password"])