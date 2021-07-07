// Select Elements
let $input = document.querySelector("#new_item");
let $btn =document.querySelector("#add-btn");
let $results = document.querySelector(".results");
let $completed = document.querySelector(".completed");
let $msg = document.querySelector(".warn");
let $form = document.querySelector("#todo_form");
$btn.style.cursor= "pointer";
let c=0;

//-------Start Event--------
$form.addEventListener("click" , function(e) {
    e.preventDefault()
    c=0;
    if($input.value=="") {
        warnMsg()
    }
    else
    addElement()
    Var.completeE.style.display="block";

})
//-------end Event--------

//variables
var Var= {
       newLi: document.createElement("li"),
       DeleteE: document.createElement("button"),
       completeE: document.createElement("button"),
       DeleteT: document.createTextNode("delete"),
       completeT: document.createTextNode("complete"),
       label: document.createElement("label")
}
// Add Element
function addElement() {
    Var.DeleteE.type="button";
    Var.completeE.type="button";
    Var.DeleteE.appendChild(Var.DeleteT);
    Var.completeE.appendChild(Var.completeT);
    Var.label.innerHTML=$input.value;
    Var.newLi.append(Var.label, Var.DeleteE, Var.completeE);
    $results.appendChild(Var.newLi);
    Var.newLi.classList.add("liSty");
    Var.DeleteE.classList.add("delClass");
    Var.completeE.classList.add("comClass");
    
    Var.DeleteE.innerHTML="Delete";
    Var.completeE.innerHTML="Complete";

    Var.DeleteE.style.cursor= "pointer";
    Var.completeE.style.cursor= "pointer";

}
//completed tasks
Var.completeE.addEventListener("click", function(e){ 
    c=1;
    Var.label.innerHTML=$input.value;
    Var.newLi.append(Var.label, Var.DeleteE);
    $completed.appendChild(Var.newLi); 
    Var.completeE.style.display="none";

})

//delete tasks
Var.DeleteE.addEventListener("click", function(e){
    let parentD = this.parentNode;
    parentD.remove();
    
})

//warn massage
function warnMsg() {
    $msg.style.display= "block" ;
    $input.style.border= "1px solid red"

}
$input.addEventListener("keypress" ,function() {
    $msg.style.display= "none" ;
    $input.style.border= "1px solid #fff"

})

// //variables
// class variables {
//     newLi = document.createElement("li")
//     DeleteE = document.createElement("button")
//     completeE = document.createElement("button")
//     DeleteT = document.createTextNode("delete")
//     completeT = document.createTextNode("complete")
//     label = document.createElement("label")
// }


// let Var = new variables()
// //data from html page
// class Data {
//     $input = document.querySelector("#new_item");
//     $btn = document.querySelector("#add-btn");
//     $results = document.querySelector(".results");
//     $completed = document.querySelector(".completed");
//     $msg = document.querySelector(".warn");
//     $form = document.querySelector("#todo_form");
//     c = 0
//     //$btn.style.cursor= "pointer";

//     startEvent() {
//         //-------Start Event--------
//         this.$form.addEventListener("click", function (e) {
//             e.preventDefault()
//             this.c = 0;
//             if (this.$input.value == "") {
//                 warnMsg()
//             }
//             else
//                 addElement()
//             Var.completeE.style.display = "block";

//         })
//         //-------end Event--------
//     }

//     //warn massage
//     warnMsg() {
//         this.$msg.style.display = "block";
//         this.$input.style.border = "1px solid red"
//     }

// }
// let data = new Data();
// //class extends from variables class
// class addTasks extends variables {
//     // Add Element
//     addElement() {
//         DeleteE.type = "button";
//         completeE.type = "button";
//         DeleteE.appendChild(DeleteT);
//         completeE.appendChild(completeT);
//         label.innerHTML = data.$input.value;
//         newLi.append(label, DeleteE, completeE);
//         data.$results.appendChild(newLi);
//         newLi.classList.add("liSty");
//         DeleteE.classList.add("delClass");
//         completeE.classList.add("comClass");
//         DeleteE.innerHTML = "Delete";
//         completeE.innerHTML = "Complete";
//         DeleteE.style.cursor = "pointer";
//         completeE.style.cursor = "pointer";
//     }
//     //completed tasks
//     completeTask() {
//         completeE.addEventListener("click", function (e) {
//             data.c = 1;
//             label.innerHTML = data.$input.value;
//             newLi.append(label, DeleteE);
//             data.$completed.appendChild(newLi);
//             completeE.style.display = "none";
//         })
//     }
//     //delete tasks
//     deleteTask() {
//         DeleteE.addEventListener("click", function (e) {
//             let parentD = this.parentNode;
//             parentD.remove();
//         })
//     }

// }

// function start(num) {
//     let da = new Data()
//     let add=new addTasks()
//     if (num == 1) {
//         da.startEvent();
//     }
    
//     else if (num == 2) {
//        add.completeTask()
//     }
// }

// // $input.addEventListener("keypress", function () {
// //     $msg.style.display = "none";
// //     $input.style.border = "1px solid #fff"

// // })