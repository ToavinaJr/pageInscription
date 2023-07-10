let input_nom = document.getElementById('nom')
let input_prenom = document.getElementById('prenom')
let input_age = document.getElementById('age')
let input_mail = document.getElementById('mail')
let input_mdp_1 = document.getElementById('mdp-1')
let input_mdp_2 = document.getElementById('mdp-2')
let color_success = 'green'
let color_danger = 'red'

input_mdp_1.addEventListener('input', verificationMotDePasse)
input_mdp_2.addEventListener('input', verificationMotDePasse)
input_age.addEventListener('input', verificationAge)

function verificationMail(){

}

function verificationMotDePasse(){
    let mdp_1 = input_mdp_1.value
    let mdp_2 = input_mdp_2.value
    let message_mdp = document.getElementById('message-mdp')
    let message
    let color

    if (mdp_1 !== "" && mdp_2 !== "" && mdp_1 === mdp_2 ){
        message = "Mot de passe correct !"
        color = color_success
    }
    else{
        message = "Mot de passe incorrect !"
        color = color_danger
    }

    message_mdp.style.color = color
    message_mdp.textContent = message
}

function verificationAge() {
    let age = input_age.value
    let message_age = document.getElementById('message-age')
    
    if (age >= 18){
        message = "Age valide !"
        color = color_success
    }
    else{
        message = "Age invalide !"
        color = color_danger
    }

    message_age.style.color = color
    message_age.textContent = message
}