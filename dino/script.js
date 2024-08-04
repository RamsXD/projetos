
function pulo() {

    if(!dino.classList.contains("pulo")){
        dino.classList.add("pulo")

        setTimeout(function() {
            dino.classList.remove("pulo")
        },500)
    }
}
document.addEventListener("keydown", function(event){
    if(event.code == "Space"){
        pulo()
    }

})