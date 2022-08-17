// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name,surname,email,phone){
//     this.id=id
//     this.name=name
//     this.surname=surname
//     this.email=email
//     this.phone=phone
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arrayPerson=[];
// arrayPerson.push(new User('1','igor','pupkin','pupkin@gmail.com','0674565423'));
// arrayPerson.push(new User('2','olya','dadas','dasda@.com','02552149'));
// arrayPerson.push(new User('3','vika','asasa','sdasd@.com','84321.513318'));
// arrayPerson.push(new User('4','roman','ddaad','dasas@.com','5611'));
// arrayPerson.push(new User('5','nina','asda','DsD@.com','8645122'));
// arrayPerson.push(new User('6','boris','asdassssss','sdsfdf@.com','2485151'));
// arrayPerson.push(new User('7','josh','ttttt','wwww@.com','7878988'));
// arrayPerson.push(new User('8','oleh','rtrt','rtrtrt@.com','21321313'));
// arrayPerson.push(new User('9','dima','ethr','rtrth@.com','18423'));
// arrayPerson.push(new User('10','urik','sfsdf','sdsdfsd@gmai.com','86512'));
// console.log(arrayPerson)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(arrayPerson.filter(arrays=>arrays.id%2===0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arrayPerson.sort((a,b)=>a.id-b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id=id
//         this.name=name
//         this.surname=surname
//         this.email=email
//         this.phone=phone
//         this.order=order
//     }
// }
// let arrClient=[]
// arrClient.push(new Client('1','sads','ada','asdas','dss',['milk','cola']));
// arrClient.push(new Client('2','asdasd','asas','sdsdasd','651231',['pizza','tea','coffee']));
// arrClient.push(new Client('3','sdfs','fgdg','fdgdf','878612',['tomato','water','juice']));
// arrClient.push(new Client('4','sdfsdfs','gsdgs','dsfgs','79878',['apple','orange','bread','beef']));
// arrClient.push(new Client('5','kkl','klk','pkl,','54646',['pasta','lemon']));
// arrClient.push(new Client('6','rrr','ppp','opop','777',['milk','pasta','orange']));
// arrClient.push(new Client("7",'eee','eee','eeee','111',['water','milk']));
// arrClient.push(new Client('8','qqq','qqq','qqq','444',['tea','coffee','cola']));
// arrClient.push(new Client("9",'zzz','zzz','zzz','0000',['tomato','pasta']));
// arrClient.push(new Client("10",'ss','ss','ss','33',['tea','coffee']));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(arrClient.sort((a,b)=>a.order.length-b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars (made,year,maxSpeed,engineCapacity){
//     this.made=made
//     this.year=year
//     this.maxSpeed=maxSpeed
//     this.engineCapacity=engineCapacity
//     this.drive=function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info=function (){
//         for (const key in this) {
//             if (typeof this[key]!=='function'){
//             console.log(`${key}-${this[key]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//         console.log(this.maxSpeed+=newSpeed)
//
//     }
//     this.changeYear=function (newValue){
//         console.log(this.year=newValue)
//     }
// }
// function AddDrive(made,year,maxSpeed,engineCapacity,driver){
//     Cars.apply(this,arguments);
//     this.driver=driver;
// }
// let object1= {name:'john',age:32};
// let object=new AddDrive('BMW',2011,300,3.0,{object1});
// console.log(object)
// let car=new Cars('BMW',2010,320,3.2)
// car.drive()
// car.info()
// car.increaseMaxSpeed(420)
// car.changeYear(2015)
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars{
//     constructor(made,year,maxSpeed,engineCapacity) {
//         this.made=made;
//         this.year=year;
//         this.maxSpeed=maxSpeed;
//         this.engineCapacity=engineCapacity;
//     }
//     drive=function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info=function (){
//         for (const key in this) {
//             if (typeof this[key]!=='function'){
//             console.log(`${key}-${this[key]}`)
//             }
//         }
//     }
//     increaseMaxSpeed=function (newSpeed){
//         console.log(this.maxSpeed+=newSpeed)
//
//     }
//     changeYear=function (newValue){
//         console.log(this.year=newValue)
//     }
//     addDriver=function (driver){
//         console.log(this.driver=driver)
//
//     }
// }
// let object1={name:'john',age:32};
// let car=new Cars('BMW',2010,320,3.2)
// car.drive()
// car.info()
// car.increaseMaxSpeed(420)
// car.changeYear(2015)
// car.addDriver(object1)
// console.log(car)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name,age,footSize){
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}
let cinderellas=[];
cinderellas.push(new Cinderella('Liza','20','35'));
cinderellas.push(new Cinderella('Anna','21','36'));
cinderellas.push(new Cinderella('Olha','22','37'));
cinderellas.push(new Cinderella('Vika','23','38'));
cinderellas.push(new Cinderella("Nina",'24','39'));
cinderellas.push(new Cinderella('Vira','25','40'));
cinderellas.push(new Cinderella('Nadia','26','41'));
cinderellas.push(new Cinderella('Tanya','27','42'));
cinderellas.push(new Cinderella('Tamila','28','43'));
cinderellas.push(new Cinderella('Ulyana','29','44'));
console.log(cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince{
    constructor(name,age,shoe){
        this.name=name;
        this.age=age;
        this.shoe=shoe;
    }
}
let mainPrince=new Prince('Vasil','65','38');
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

    for (const cinderellaObject of cinderellas) {
            if(cinderellaObject.footSize===mainPrince.shoe){
                console.log(`${cinderellaObject.name}`)
            }
    }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let find=cinderellas.find(cinderella =>cinderella.footSize===mainPrince.shoe)
// console.log(find)
