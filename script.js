let formulario=document.getElementById("todo-form")
let  input=document.getElementById("task-input")
let   lista=document.getElementById("todo-list")
console.log(formulario,input,lista)

function adicionartarefa(event){
event.preventDefault()
let text=input.value
if(text !=""){
let novoitem=document.createElement("li")
novoitem.classList.add("todo-item")
novoitem.addEventListener("click",()=>{
novoitem.classList.toogle("completed")

})

let textoitem=document.createElement("span")
textoitem.innerText=text
novoitem.appendChild(textoitem)

let botaodeletar=document.createElement("button")
botaodeletar.innerText="deletar"
botaodeletar.classList.add("btn-excluir")
botaodeletar.addEventListener("click", ()=>{
lista.removeChild(novoitem)

})

novoitem.appendChild(textoitem)
novoitem.appendChild(botaodeletar)
novoitem.classList.add("todo-item")


lista.appendChild(novoitem)
input.value=""
}
}
formulario.addEventListener("submit",adicionartarefa)

