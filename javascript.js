
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

function getPersonne(){
    let nom = document.getElementById("anarana").value;
    let prenom = document.getElementById("fanampiny").value;
    let date = document.getElementById("daty").value;
    let profession = document.getElementById("asa").value;
    let situation;
    if(document.getElementById("marie").checked){
        situation = document.getElementById("marie").value;
    }
    else {
        situation = document.getElementById("celibataire").value;
    }

    let sexe;
    if(document.getElementById('feminin').checked){
        sexe = document.getElementById('feminin').value;
    }
    else {
       sexe = document.getElementById("masculin").value;
    }

    alert(" Je m'appelle " +nom + " " + prenom + ".\n Je suis néé(e) le " +date + " du sexe " +sexe+ " . \n Ma situation familiale est " + situation + " sans activité.");
    
    
}