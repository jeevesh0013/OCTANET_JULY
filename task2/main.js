// const addbutton=document.querySelector('.addbtn');
// var inputval=document.querySelector('.input');
// const container=document.querySelector('.container');

// class item{
//     constructor(itemName){
//         this.createDiv(itemName);
//     }
//     createDiv(itemName){
//         let input=document.createElement('input');
//         input.value=itemName;
//         input.disabled=true;
//         input.classList.add('iteminput');
//         input.type="text";

//         let itembox=document.createElement('div');
//         itembox.classList.add('item');


//         let editbtn=document.createElement('button');
//         editbtn.innerHTML="EDIT";

//         editbtn.classList.add('editbtn');

//         let removebtn=document.createElement('button');
//         removebtn.innerHTML="REMOVE"
//         removebtn.classList.add('removebtn');

//         container.appendChild(input);
//         itembox.appendChild(input);
//         itembox.appendChild(editbtn);
//         itembox.appendChild(removebtn);

//     }
// }
// new item("sport");
const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('iteminput');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("sport");