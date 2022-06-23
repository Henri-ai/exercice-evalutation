let array=["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel",]; 
let prenom=window.prompt("Saisir un prénom")


if (array.includes(prenom)){

    array.splice(array.indexOf(prenom),1)
        array.push(" ")
                console.log(array)
                            }

else alert("erreur veuillez réessayez")