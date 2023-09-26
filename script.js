const btn = document.querySelector('.btn');
let task = document.querySelector('input').value;
const myDiv = document.getElementById('tdiv');
btn.onclick = () => {
    let task = document.querySelector('input').value;
    const done = document.createElement('button');
    const input = document.createElement('input');
    input.type = "checkbox";
    input.type = "checkbox";
    // input.setAttribute('id','pp');
    input.setAttribute('style',
    'margin-left:10px;width:20px;height:20px; \
    accent-color:#1b44b5'
    )
    const p = document.createElement('label');
    // p.setAttribute('for','pp');
    p.textContent = `⚫${task} `;
    p.setAttribute('style',
    'display:inline-block;width:fit-content;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;');
    done.textContent = 'Done';
    done.setAttribute('style',
    'background-color:blue;color:white;margin-left:200px');
    if(p.textContent !== `⚫ `){
        document.getElementById('tdiv').appendChild(p);
        document.getElementById('tdiv').appendChild(input);
        document.getElementById('tdiv').innerHTML += '<br>';
    }
    console.log(input.id);
}