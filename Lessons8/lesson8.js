// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id,name,surname,email,phone){
    this.id=id
    this.name=name
    this.surname=surname
    this.email=email
    this.phone=phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let person=new User('1','igor','pupkin','pupkin@gmail.com','0674565423');
let person2=new User('2','olya','dadas','dasda@.com','02552149');
let person3=new User('3','vika','asasa','sdasd@.com','84321.513318');
let person4=new User('4','roman','ddaad','dasas@.com','5611');
let person5=new User('5','nina','asda','DsD@.com','8645122');
let person6=new User('6','boris','asdassssss','sdsfdf@.com','2485151');
let person7=new User('7','josh','ttttt','wwww@.com','7878988');
let person8=new User('8','oleh','rtrt','rtrtrt@.com','21321313');
let person9=new User('9','dima','ethr','rtrth@.com','18423');
let person10=new User('10','urik','sfsdf','sdsdfsd@gmai.com','86512')

let array=[person,person2,person3,person4,person5,person6,person7,person8,person9,person10];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(array.filter(arrays=>arrays.id%2===0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array.sort((a,b)=>a.id-b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id,name,surname,email,phone,order) {
        this.id=id
        this.name=name
        this.surname=surname
        this.email=email
        this.phone=phone
        this.order=order
    }
}
let buyer=new Client('1','sads','ada','asdas','dss',['milk','cola'])
let buyer2=new Client('2','asdasd','asas','sdsdasd','651231',['pizza','tea','coffee'])
let buyer3=new Client('3','sdfs','fgdg','fdgdf','878612',['tomato','water','juice'])
let buyer4=new Client('4','sdfsdfs','gsdgs','dsfgs','79878',['apple','orange','bread','beef'])
let buyer5=new Client('5','kkl','klk','pkl,','54646',['pasta','lemon'])
let buyer6=new Client('6','rrr','ppp','opop','777',['milk','pasta','orange'])
let buyer7=new Client("7",'eee','eee','eeee','111',['water','milk'])
let buyer8=new Client('8','qqq','qqq','qqq','444',['tea','coffee','cola'])
let buyer9=new Client("9",'zzz','zzz','zzz','0000',['tomato','pasta'])
let buyer10=new Client("10",'ss','ss','ss','33',['tea','coffee'])



// створити пустий масив, наповнити його 10 об'єктами Client
let arrClient=[buyer,buyer2,buyer3,buyer4,buyer5,buyer6,buyer7,buyer8,buyer9,buyer10];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrClient.sort((a,b)=>a.order.length-b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars (made,year,maxSpeed,engineCapacity){
    this.made=made
    this.year=year
    this.maxSpeed=maxSpeed
    this.engineCapacity=engineCapacity
}


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку