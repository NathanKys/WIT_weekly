const btn = document.querySelector(`#fetchBtn`);

const createContent = (arg)=>{
    divArr = [];

    if(arg.userId){
        const divUserId = document.createElement(`div`);
        divUserId.innerHTML = "<b>UserId</b>: " + arg.userId;
        divArr.push(divUserId);
    }
    if(arg.title){
        const divTitle = document.createElement(`div`);
        divTitle.innerHTML = "<b>Title</b>: " + arg.title;
        divArr.push(divTitle);
    }
    if(arg.body){
        const divBody = document.createElement(`div`);
        divBody.innerHTML = "<b>Body</b>: " + arg.body.replaceAll("\n","<br/>&emsp;&emsp;&emsp;");
        divArr.push(divBody);
    }
    return divArr;
}

const makeDiv = (arg)=>{
    const wrapperDiv = document.createElement(`div`);
    wrapperDiv.id = "wrapper-div";

    if(arg.userId === 1)
        createContent(arg).forEach(e => wrapperDiv.append(e));

    return wrapperDiv;
};

btn.onclick = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => json.map(e=>document.body.append(makeDiv(e))));
};