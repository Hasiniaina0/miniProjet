
function getValue(){
let valeur = document.getElementById("in").value;
let mdp = document.getElementById("mdp").value;

    if(mdp == "fifi" && valeur == "malala0" && mdp.value<8){
        alert("Bonjour " +valeur);
    }
    else{
        alert('Connexion échouée');
    }

}