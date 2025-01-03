let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = input.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('delete');

    ul.appendChild(item);
    item.appendChild(delBtn);
    console.log('Input added');
    input.value = '';
});

ul.addEventListener('click',function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
        console.log('Item gone');
    }
});


// let delBtns = document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         console.log('item removed');
//         let parent = this.parentElement;
//         parent.remove();
//     });
// };