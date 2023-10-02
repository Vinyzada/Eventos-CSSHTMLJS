function filter(){
    const filtro = document.getElementById("filtro").value.toLowerCase();
    const lista = document.getElementsByTagName("li");

    for(li of lista){
        if (li.innerText.toLowerCase().includes(filtro)){
            li.style.opacity = "1"
        }
        else{
            li.style.opacity = "0.3"
        }
    }
}
function tabuada(){
    const fator = document.getElementById("fator").value;
    const produto = document.getElementById("produto");
    let valores = []
    for(i = 1; i <= 10; i++){
        valores.push(`${fator} x ${i} = ${fator*i}`);
    }
    produto.innerHTML = valores.join(`<br>`)
    if(fator == ""){
        produto.innerHTML = ""
    }
}

