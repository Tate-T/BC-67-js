// отребут data-set 

// const inputList = document.querySelectorAll("[data-user]");
// console.log(inputList);

const inputEmail = document.querySelector("[data-user = email]");
console.log(inputEmail);
function showInputEmail() {
    if (inputEmail.dataSet.user === "email") {
       alert("інпут для email у форми існує") 
    }
}
