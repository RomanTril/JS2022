// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
            let usersMainDiv=document.createElement("div");
            usersMainDiv.classList.add('usersMainDiv');

        for ( let user of users) {
            let divInner=document.createElement("div");
            let h2Main=document.createElement("h2");
            let buttonMain=document.createElement("button");

            divInner.classList.add('divInner');

            h2Main.innerText=`${user.id}  -  ${user.name}`;
            buttonMain.innerText="Users Information";

            divInner.append(h2Main,buttonMain);
            usersMainDiv.append(divInner);

            buttonMain.onclick=function (){

                location.href=`user-details.html?id=${user.id}`
                localStorage.setItem('user',JSON.stringify(user));
            }

        }
            document.body.appendChild(usersMainDiv);
    });








