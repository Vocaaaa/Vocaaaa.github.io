document.body.appendChild( createPostElement('Alma ', 'Andersson', '@alma', new Date(), 'Hej på dig!') );
document.body.appendChild( createPostElement('Pelle ', 'Pärsson', '@pelle', new Date(), 'Jag är pelle..') );


function createPostElement(firstname, lastname, username, date, content) {
    const body = document.body;
    const post = document.createElement("div");
    const postMeta = document.createElement("div");
    const a = document.createElement("a");
    const i = document.createElement("i");
    const span = document.createElement("span");
    const postContent = document.createElement("div");

    post.setAttribute("class", "post");
    post.append(postMeta);
    post.append(postContent);
    postMeta.setAttribute("class", "post-meta");
    postMeta.append(a);
    a.append(firstname, lastname);
    postMeta.append(i);
    i.append(username);
    postMeta.append(span);
    span.append(date.getFullYear() + "-");
    span.append(date.getMonth() + "-");
    span.append(date.getDay() + " ");
    span.append(date.getHours() + ":");
    span.append(date.getMinutes() + ":");
    span.append(date.getSeconds());
    postContent.setAttribute("class", "post-content");
    postContent.append(content);

    return post;

}

