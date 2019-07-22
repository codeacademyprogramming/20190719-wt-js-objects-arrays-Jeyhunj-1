"use strict";

let students = [];
let liItems = "";
let inputs = document.getElementsByClassName("student-input");

function Student(name, surname, email, phone, age) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.age = age;
}





function getInputValues() {

    let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);

    students.push(student);

    students.forEach(generateLiItems);

    document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
}


function empty() {
 if(document.getElementById("name").value == 0,document.getElementById("surname").value == 0,document.getElementById("email").value == 0,document.getElementById("phone").value == 0,document.getElementById("age").value == 0)
{
    alert("Please be sure  you fill them all")
}  else{
    getInputValues()
} 
}


function generateLiItems(val, ind, arr) {
    liItems += `
    <tr><div><td >${val.name}</td></div>
    <td>${val.surname}</td>
    <td>${val.email}</td> 
    <td>${val.phone}</td>
    
    <td>${val.age}</td></tr>`;

}

function sortName() {
    students.sort(function(a, b){
        if(a.name > b.name){
            return 1;

        }else {
            return -1;
        }
    })
}

function sortSurname() {
    students.sort(function (a, b) {
        if (a.surname > b.surname) {
            return 1;

        } else {
            return -1;
        }
    })
}

function sortEmail() {
    students.sort(function (a, b) {
        if (a.email > b.email) {
            return 1;

        } else {
            return -1;
        }
    })
}

function sortAge() {

    students.sort(function (a, b) {
        return a.age - b.age


    })
}

function sortPhone() {

    students.sort(function (a, b) {
        return a.phone - b.phone


    })
}

function reset() {
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

}



