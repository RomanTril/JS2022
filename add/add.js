// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     i=0;
//     while (i<numbers.length){
//         console.log(numbers[i]);
//         i++;
//     }

//     2. перебрати його циклом for
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for(let i=0;i<numbers.length;i++){
//         console.log(numbers[i]);
//     }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     i=0;
//     while (i<numbers.length){
//         if (numbers[i]%2!==0){
//             console.log(`${numbers[i]}`);
//         }
//         i++;
//     }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for( let i=0;i<numbers.length;i++){
//         if(numbers[i]%2!==0){
//             console.log(`${numbers[i]}`);
//         }
//     }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     i=0;
//     while (i<numbers.length){
//         if(numbers[i]%2===0){
//             console.log(`${numbers[i]}`)
//         }
//     i++;
//     }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for (let i=0;i<numbers.length;i++){
//         if(numbers[i]%2===0){
//             console.log(`${numbers[i]}`)
//         }
//     }
// 7. замінити кожне число кратне 3 на слово "okten"
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for (let i=0;i<numbers.length;i++){
//         if(numbers[i]%3===0){
//             numbers[i]='okten';
//             document.write(`<div>${numbers[i]}</div>`);
//         }
//     }

// 8. вивести масив в зворотньому порядку.
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for (let i=numbers.length-1; i>=0;i--){
//         let number=numbers[i];
//         console.log(number);
//     }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     let i=numbers.length;
//     while ( i--){
//         let number=numbers[i];
//         console.log(number);
//     }

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for(let i=numbers.length-1; i>=0;i--){
//         let number=numbers[i];
//         console.log(number);
//     }

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     i=numbers.length;
//     while (i--){
//         if (numbers[i]%2!==0){
//             console.log(`${numbers[i]}`);
//         }
//     }

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for(let i=numbers.length-1;i>0;i--){
//         if(numbers[i]%2!==0){
//             console.log(`${numbers[i]}`);
//         }
//     }

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     i=numbers.length;
//     while (i--){
//         if(numbers[i]%2===0){
//             console.log(`${numbers[i]}`)
//         }
//     }

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for (let i=numbers.length;i>0;i--){
//         if(numbers[i]%2===0){
//             console.log(`${numbers[i]}`)
//         }
//     }

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
//     for (let i=numbers.length;i>0;i--){
//         if(numbers[i]%3===0){
//             numbers[i]='okten';
//             document.write(`<div>${numbers[i]}</div>`);
//         }
//     }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers=[1,2,3,4,5,6,7,8,9,10 ];
// for (const number of numbers) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings=['sasda','aas','asasdq','trtt','ttttt','ooooo','uuu','rrr','bbb','mmm'];
// for (const string of strings) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrays=[14,true,'rrr',false,0,'ttt','iii',8,9,10];
// for (const array of arrays) {
//     console.log(array);
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrays=[14,true,'rrr',false,0,'ttt','iii',8,9,10];
//     for (const array of arrays){
//         if(typeof array==='boolean'){
//             console.log(array);
//         }
//     }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrays=[14,true,'rrr',false,0,'ttt','iii',8,9,10];
//     for (const array of arrays){
//         if(typeof array==='string'){
//             console.log(array);
//         }
//     }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrays=[14,true,'rrr',false,0,'ttt','iii',8,9,10];
//     for (const array of arrays){
//         if(typeof array==='number'){
//             console.log(array);
//         }
//     }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array=[ ];
// array[0]=1;
// array[1]='aaa';
// array[2]='zzz';
// array[3]=true;
// array[4]=false;
// array[5]=5;
// array[6]='yyy';
// array[7]='ooo';
// array[8]=8;
// array[9]=3;
// for (let i=0; i<array.length;i++){
//     console.log(`${array[i]}`)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++){
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++){
//     console.log(i++);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i+=2){
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if(i%2===0){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if(i%2!==0){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }



