
function registrar() {
    const name  = document.getElementById("name").value
    const idade =document.getElementById("idade").value
    const paper = document.getElementById("paper").value
    if(name ===""|idade ===""|paper ===""){
        window.alert("Complete todos os dados ")}
        else{
            document.querySelector("p").innerHTML = name +" "+ 'cadastro concluido'
        }
    
}