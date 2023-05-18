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
];

const create = document.getElementById("create");
const deleteList = document.getElementById("delete");

function createList(users) {
    const listContainer = document.getElementById("userList")
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
}

createList(users);





function deleteLists() {
    listContainer.innerHTML = "";
    create.disabled = false;
    deleteList.disabled = true;
}


