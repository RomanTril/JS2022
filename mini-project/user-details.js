// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {

        let fatherDiv = document.createElement('div');
        let childDiv = document.createElement('div');
        let btnDiv = document.createElement('div');
        let info=document.createElement("div");
        let btn = document.createElement('button');
        let mainInfo=document.createElement("div");

        let postP=document.createElement("p");
        postP.classList.add('postP');

        btn.innerText = 'post of current user'.toUpperCase();

        mainInfo.append(btnDiv,info);
        mainInfo.classList.add('main.Info');
        fatherDiv.classList.add('father');
        childDiv.classList.add('child');
        btnDiv.classList.add('btnDiv');
        info.classList.add('info');

        fatherDiv.append(childDiv,mainInfo);
        btnDiv.append(btn);


        function  getObject(object) {
            explorer(object);


            function explorer(element) {
                for (let value in element) {

                    if (typeof element[value] !== 'object'){
                        let p = document.createElement('p');
                        p.classList.add('userP');
                        p.append(`${value} : ${element[value]}`);
                        childDiv.append(p);
                    }else {
                        let divNestedObject = document.createElement('div');
                        divNestedObject.classList.add('divNestedObject');
                        divNestedObject.append(`${value} :`);
                        childDiv.append(divNestedObject);

                        explorer(element[value]);
                    }
                }
            }
        }

        getObject(data);

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(data => {

                    btn.onclick = function (){

                        for (const item of data) {

                            let tagButton = document.createElement('button');
                            tagButton.innerText = 'More';
                            tagButton.onclick=function () {
                                location.href = `post-details.html?id=${id}`;
                            }

                            let itemDiv = document.createElement('div');
                            itemDiv.classList.add('itemDiv');
                            let itemP=document.createElement('p');
                            itemP.classList.add('itemP');
                            itemDiv.append(itemP,tagButton);
                            itemP.append(item.title);
                            info.append(itemDiv);

                        }

                     };
                });

        document.body.append(fatherDiv);
    })








