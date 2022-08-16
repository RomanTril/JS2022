// -Знайти та вивести довижину настипних стрінгових значень

// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення

// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення

// let str1='HELLO WORLD';
// let str2='LOREM IPSUM';
// let str3='JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.indexOf('g'));
// console.log(str.substring(1,13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні'];

// let str = 'Ревуть воли як ясла повні';
// let stringToArray=(str =>str.split(" "));
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let number=[10,8,-7,55,987,-1011,0,1050,0];
// let map = number.map(value=>value+"");
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let  sortNums=(array,direction)=>{
//     if (direction==='ascending'){
//         console.log(array.sort((one,two)=>one-two));
//     }else if(direction==="descending"){
//         console.log(array.sort((one,two)=>two-one));
//     }else{
//         console.log("Error");
//     }
// }
// sortNums(nums,'ascending');


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration));
// console.log(coursesAndDurationArray.filter(value => value.monthDuration>5));

// описати колоду карт
// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
// ];
// - знайти піковий туз

// let find=cards.find(value=>value.value==="Ace"&& value.cardSuit==="spades");
// console.log(find);

// - всі шістки

// let reduce=cards.reduce(function (acumulator,cards){
//     if (cards.value===6){
//         acumulator.Sixs.push(cards);
//     }
//     return acumulator;
// },{Sixs:[]});
// console.log(reduce);


// - всі червоні карти
// let red =cards.reduce(function (acum,cards){
//     if(cards.color==='red'){
//        acum.redCards.push(cards);
//     }
//     return acum;
// },{redCards:[]});
// console.log(red);

// - всі буби

// let diamonds=cards.reduce(function (acum,cards) {
//     if (cards.cardSuit === 'diamonds') {
//         acum.diamondsCards.push(cards);
//     }
//     return acum;
// },{diamondsCards:[]});
// console.log(diamonds);

// - всі трефи від 9 та більше

// let clubs=cards.reduce(function (acum,cards){
//     if(cards.cardSuit==='clubs'&& cards.value>='9'){
//         acum.clubsNine.push(cards);
//     }
//     return acum;
// },{clubsNine:[]});
// console.log(clubs);



// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
// ];
//
// let sort=cards.reduce(function (acum,cards){
//     switch (cards.cardSuit){
//         case 'spades':
//             acum.spades.push(cards);
//             break
//         case 'diamonds':
//             acum.diamonds.push(cards);
//             break
//         case 'hearts':
//             acum.hearts.push(cards);
//             break
//         case 'clubs':
//             acum.clubs.push(cards);
//             break
//         default:
//             console.log('Error');
//     }
//     return acum;
// },{spades:[],diamonds:[],hearts:[],clubs:[]});
// console.log(sort);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str,n){
//     let arr=[];
//     for (let i = 0; i < str.length; i+=n) {
//          arr.push((str.substring(i,n+i)));
//     }
//     return arr;
// }
// console.log(cutString('наслаждение',3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str =" Каждый охотник желает знать";
// let delete_characters=(string,length)=> {
//     let str2 = [];
//     let split=str.split(" ");
//     for (let i = 0; i < split.length; i++) {
//         const splitElement = split[i];
//         if (splitElement.length===length){
//             str2.push(splitElement);
//         }
//     }
//     return str2.join(' ');
// }
// document.write(delete_characters(str,6));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str="HTML JavaScript PHP";
// let insert_dash=(string)=>string.toUpperCase().replaceAll(" ", "-");
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let a='name uhuhj jkliji';
// let upper=(str)=>{return str.charAt(0).toUpperCase()+ str.slice(1)};
// console.log(upper(a));

// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2='Ron---Whisley';
// let n3='Hermione__Granger';

// const norm=(st)=> {
//      return  st.split('').map(value =>(value>='A'&& value<='Z' || value>='a' && value<='z')? value:" ").join('').trim().replaceAll('  ',' ');
// }
// console.log(norm(n1));
// console.log(norm(n2));
// console.log(norm(n3));

// const norm=(st)=>{
    // let string=st.split('').map(value=>(value>='A'&& value<='Z' )||(value>='a'&& value<='z')?
    //     value:" ").join(" ").trim();
    // while (string.includes('  ')) {
    //     string=string.replace('  ',' ');
    // }
    // return string;
// }
// console.log(norm(n1));


    // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// function random(length) {
// let array = [];
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.floor(Math.random() *100);
//     }
//     return array;
// }
// console.log(random(8))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// function random(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.floor(Math.random() * 100);
//     }
//         return array
// }
// let sort=array=>{
//     array.sort();
//     return array
// }
// console.log(sort(random(5)));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// function random(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array[i] = Math.floor(Math.random() * 100);
//     }
//        let filter= array.filter(function (value){
//         return value%2===0;
// })
//     console.log(filter)
//     return array;
// }
// console.log(random(5));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let string="asdas sdasd sdas";
// let capitalize=(str)=>{
//     let split=str.split(' ').map(value =>`${value[0].toUpperCase()}${value.slice(1)}`);
//     console.log(split)
// }
// capitalize(string)

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// const checkEmail=(email)=>{
//     const emailArr=email.split("@");
//     if(emailArr.length !==2){
//         return false
//     }
//     const [name,fullDomain]=emailArr;
//     const [beforeDot,afterDot]=fullDomain.split('.');
//     return !(beforeDot.length < 2 || !afterDot || !name);
// }
// console.log(checkEmail('gjjkjjh@gmail.com'))

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// console.log(coursesArray.sort((fisrt, second) => fisrt.modules.length - second.modules.length));
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// const count = (str,search) => str.split('').reduce((acc ,value) => value === search ? acc + 1 : acc, 0)
// const count1 = count ("Астрономия это наука о небесных объектах","х");
// console.log(count1);

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// const cutString=(str,n)=>{
//     console.log(str.split(" ").slice(0,n).join(" "));
// }
// cutString("Сила тяжести приложена к центру масс тела",5);

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// const books=[
//   {
//     title: "Misery",
//     pageCount: 564,
//     genre: "thriller",
//     author: [{name:"Stephen King" ,age:78},{name:"George R.R. Martin", age:68},{name:"Herbert Wells",age:147} ]
// },
//     {
//     title:"A game of thrones",
//     pageCount:896,
//     genre:["novel","novel","thriller"],
//     author: [{name:"George R.R. Martin", age:68},{name:"Stephen King" ,age:78},{name:"Herbert Wells",age:147}]
// },
// {
//     title: "The war of the worlds",
//     pageCount:542,
//     genre:"novel",
//     author:[{name:"Herbert Wells",age:147},{name:"Stephen King" ,age:78},{name:"George R.R. Martin", age:68}]
// }];
// -знайти наібльшу книжку.
// let max = books[0];
// books.forEach(book=>{
//     if (book.pageCount>max.pageCount){
//         max=book;
//     }
// })
// console.log(max);

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
// console.log(books.sort((one,two)=>one.pageCount-two.pageCount))
