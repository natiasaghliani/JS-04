//დავალება 1
//გაქვთ ობიექტების მასივი. ობიექტს აქვს ორი ფროფერთი, იუზერნეიმი და ასაკი.
//ჯავასკრიპტიდან უნდა შექმნათ სია html მხარეს (ul -> li), რომელშიც ჩაემატება 
//მხოლოდ ის იუზერნეიმები ობიექტებიდან, რომლის ასაკიც მეტია 18 ზე.

//დავალება 2
//მოიძიეთ ინფორმაცია onclick  ზე.
//html - ის მხარეს განათავსეთ ორი ღილაკი, ერთი წაშლის პირველ დავალებაში შესრულებულ სიას, 
//ხოლო მეორე შექმნის. თუ სია უკვე არსებობს, მაშინ შექმნის ღილაკი ან დამალული იყოს, ან დადიზეიბლებული.
//იგივე წაშლის შემთხვევაშიც(თუ სია წაშლილია, მაშინ ან დამალული, ან დადიზეიბლებული)

const users = [
    { usarname: "Natia", age: 23 },
    { usarname: "Mushni", age: 22 },
    { usarname: "Mari", age: 16 },
    { usarname: "Salome", age: 10 },
    { usarname: "Gega", age: 28 },
    { usarname: "Papuna", age: 40 },
];

const create = document.getElementById("create");

const deleteList = document.getElementById("delete");
const listContainer = document.getElementById("userList")

const myDiv = document.getElementById('myDiv');
const myBtn = document.getElementById('myBtn');


function createList(users) {
    listContainer.innerHTML = "";

    users.forEach(user => {
        if (user.age > 18) {
            const li = document.createElement("li");
            li.textContent = user.usarname;
            listContainer.appendChild(li);
        }
    });

    create.disabled = true;
    deleteList.disabled = false;

    myDiv.classList.add("divstyle")
}

createList(users);

function deleteLists() {
    listContainer.innerHTML = "<span style='color:red'>Musho</span>";
    create.disabled = false;
    deleteList.disabled = true;

    myDiv.classList.remove("divstyle")
}

myBtn.addEventListener("click", toggleClass)

function toggleClass() {
    myDiv.classList.toggle("divstyle");
}

const hasClass = element.classList.contains("divstyle");
const fakeBtn = document.getElementById('fake');

fakeBtn.addEventListener("click", fakeToggle)

function fakeToggle() {
    if (hasClass = element.classList.contains("divstyle")) {
        myDiv.classList.remove("divstyle")
    }
    else {
        myDiv.classList.add("divstyle")
    }
}






