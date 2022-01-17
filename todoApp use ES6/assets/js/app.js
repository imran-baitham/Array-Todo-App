let input = document.getElementById("input")
let todoList = document.getElementById("todolist")
let list = []

let todoApp = {
     addTask() {
          if (input.value) {
               list.push(input.value)
               input.value = ""
          } else {
               alert("Plz input Your task ?")
          }
          this.myFun()
     },
     myFun() {
          todoList.innerHTML = ""
          list.forEach((value, index) => {
               todoList.innerHTML += `<li>${value}<div onclick="todoApp.editTask(${index})">Edit</div><div onclick="todoApp.dltTask(${index})">X</div></li>`
          })
     },
     dltTask(index) {
          if (list) {
               let confim = confirm("You Want to Delete Task?")
               if (confim) {
                    list.splice(index, 1)
               }
          }
          this.myFun()
     },
     editTask(index) {
          let update = prompt("Update New Task?")
          if (update) {
               list.splice(index, 1, update)
          }
          this.myFun()
     },
     clearTask() {
          if (list.length) {
               list.splice(0, list.length)
          }
          this.myFun()
     },
     rander(e) {
          console.log("Main Function rander")
     },
}
todoApp.rander()