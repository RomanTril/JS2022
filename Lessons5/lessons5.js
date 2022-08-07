// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let area=(a,b)=>a*b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const PI=3.14;
// function areaCircle(radius){
//    let res=PI*Math.pow(radius,2);
//    return res;
// }
// console.log(areaCircle(6));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const PI=3.14;
// function areaCylinder(height,radius){
//     let res;
//     res=2*PI*Math.pow(radius,2)+2*PI*height*radius;
//     return res;
// }
// console.log(areaCylinder(6,8))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let a=[1,2,3];
// function outputElementOfTheArray(array){
//         for (const arrayElement of array) {
//             console.log(arrayElement);
//         }
// }
// outputElementOfTheArray(a);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let texts= 'Lorem lorem,lorem.';
// function createParagraph(text){
//     document.write(`<p>${text}</p>`)
// }
// createParagraph(texts);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let texts= 'Lorem lorem,lorem.';
// function createThreeLi(text){
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// createThreeLi(texts);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let texts= 'Lorem lorem,lorem.';
// function createThreeLi(text,numbers){
//     document.write(`<ul>`)
//     for (let i = 0; i < numbers; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createThreeLi(texts,8);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr=[1,2,true,'string'];
// function buildsList(arrays){
//     document.write(`<ul>`)
//     for (const array of arrays) {
//        document.write( `<li>${array}</li>`)
//     }
//     document.write(`</ul>`)
// }
// buildsList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr=[a={id:1,name:'max',age:17},b={id:2,name: "viktoria",age:25},c={id:3,name: "john",age:30}];
// function outputsDocument(arrayObject){
//     for (let arrayObjectElement of arrayObject) {
//         document.write(`<div>`)
//        for(let key in arrayObjectElement){
//            document.write(`${arrayObjectElement[key]}` + " ")
//        }
//         document.write(`</div>`)
//     }
// }
// outputsDocument(arr);

// - створити функцію яка повертає найменьше число з масиву

// let arr=[1,2,3,4,5,6,7,0,-18 ];
// function returnSmallestNumber(arrays){
//     let min =arrays[0];
//     for (let i = 0; i < arrays.length; i++) {
//             if(arrays[0]>arrays[i]){
//                 min=arrays[i];
//             }
//     }
//     return min;
// }
// console.log(returnSmallestNumber(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayNumbers=[1,2,10];
//
// function elementSum(array){
//     let number=0;
//     for (let i = 0; i < array.length; i++) {
//             number+=array[i];
//     }
//     return number;
// }
// console.log(elementSum(arrayNumbers));

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let a=5;
// let b=8;
// let c=12;
//
// let smallestNumber=(a,b,c)=>{
//     if(a<b && a<c ){
//         console.log(a)
//     }else if (b<a&&b<c){
//         console.log(b)
//     }else if (c<a&&c<b){
//         console.log(c)
//     }else {
//         console.log("Error")
//     }
// }
// smallestNumber(a,b,c);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let a=20;
// let b=18;
// let c=25;
//
// let largestNumber=(a,b,c)=>{
//     if(a>b && a>c ){
//         console.log(a)
//     }else if (b>a&&b>c){
//         console.log(b)
//     }else if (c>a&&c>b){
//         console.log(c)
//     }else {
//         console.log("Error")
//     }
// }
// largestNumber(a,b,c);

// - створити функцію яка повертає найбільше число з масиву

// let arr=[1,5,9,10,-18];
// let numberLargest=(array)=>{
//     let max=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i]
//         }
//     }
//     console.log(max);
// }
// numberLargest(arr);

// - створити функцію яка повертає найменьше число з масиву

// let arr=[1,5,9,10,-18];
// let numberSmallest=(array)=>{
//     let min=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i]
//         }
//     }
//     console.log(min);
// }
// numberSmallest(arr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr=[1,2,10];
//
// let sumArray=(array)=>{
//     let sum=0;
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i];
//     }
//     console.log(sum);
// }
// sumArray(arr);



// - Дано натуральное число n. Выведите все числа от 1 до n.
// let num=5;
// let orderNumber=(number)=>{
//         for (let i = 1; i <= number; i++) {
//         console.log(i);
//         }
// }
// orderNumber(num);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let a = 40;
// let b=20;
// let outputNumber=(a,b)=>{
//     if(a<b){
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     }else if(b<a){
//         for (let i= a;i>=b; i--) {
//             console.log(i);
//         }
//     }else if(a===b){
//        console.log(`a=${a} b=${b}`);
//     }else {
//         console.log("Error");
//     }
// }
// outputNumber(a,b);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr =[9,8,0,4];
// let num=2;
//
// let changesPosition=(array,number)=> {
//    let i = array[number];
//     array[number] = array[number + 1];
//     array[number + 1] = i;
//     console.log(array);
// }
// changesPosition(arr,num);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const array=[5,8,0,9,0,4,4,0];
let zeroEnd=(arr)=>{
    const res=[];
    let count=0;
    let index=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        } else {
            res[index++] = arr[i];
        }
    }
let zeroCount=res.length;
    for (let j = 0; j < count; j++) {
        res[zeroCount++] = 0;
    }
    console.log(res);
}
zeroEnd(array);