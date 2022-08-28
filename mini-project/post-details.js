// / На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {

        let comment = document.createElement('button');
        let commentDiv = document.createElement('div');
        let wrap = document.createElement('div');
        let grandfatherDiv = document.createElement('div');

        comment.innerText = 'Comment';

        commentDiv.classList.add('comment');
        wrap.classList.add('wrap');
        grandfatherDiv.classList.add('grandfatherDiv');

        commentDiv.append(comment);

        for (const value in data) {

            let fatherDiv = document.createElement('div');
            fatherDiv.append(`${value} : ${data[value]}`);
            wrap.append(fatherDiv);
        }

        comment.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let itemDiv = document.createElement('div');
                        itemDiv.append(item.body);
                        grandfatherDiv.append(itemDiv);
                    }

                });
        };

        document.body.append(wrap, commentDiv,grandfatherDiv);

    })




