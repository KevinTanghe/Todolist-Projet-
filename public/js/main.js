let section = document.querySelector("section")

let valueText;
let input = document.querySelector("input")

input.addEventListener("change", function(){
    valueText = input.value;
    console.log(valueText);
});



let bouton = document.querySelector("button");

bouton.addEventListener("click", function(){    
    if (input.value == "") {
        
    } else {
        let div = document.createElement("div");
        div.setAttribute("class", "d-flex");
        section.append(div);
    
        let div2 = document.createElement("div");
        div2.setAttribute("class", "icone");
        div.append(div2);
    
        let div3 = document.createElement("div");
        div3.setAttribute("class", "icone");
        div.append(div3);
    
        let p = document.createElement("p");
        p.setAttribute("class", "tache");
        p.innerHTML = valueText;
        input.value = ""
        div2.append(p);

                // Début du bloc check
        let check = document.createElement("button");
        check.setAttribute("class", "fas fa-check-circle");
        div3.append(check)
        check.addEventListener("click", function(){
            div.setAttribute("id", "check")
        })

                // Début du bloc change
        let change = document.createElement("button");
        change.setAttribute("class","fas fa-edit")
        div3.append(change)
        let valueChange;
        change.addEventListener("click", function(){
            p.style.display = "none"
            let inputChange = document.createElement("input");
            let boutonChange = document.createElement("button")
            boutonChange.setAttribute("class", "choix")
            boutonChange.innerHTML = "OK"
            div2.append(inputChange,boutonChange)

            inputChange.addEventListener("change", function(){
                valueChange = inputChange.value
                p.innerHTML = valueChange
            })
            boutonChange.addEventListener("click", function(){
                div2.removeChild(boutonChange)
                div2.removeChild(inputChange)
                p.style.display = "block"
            })
        })


                // Début du bloc trash
        let trash = document.createElement("button");
        trash.setAttribute("class","fas fa-trash-alt")
        div3.append(trash)
        trash.addEventListener("click", function(){
            div3.removeChild(change)
            div3.removeChild(check)
            div3.removeChild(trash)
            let question = document.createElement("p")
            question.innerHTML = "Veux tu vraiment supprimer ?"
            let oui = document.createElement("button")
            oui.innerHTML = "Oui"
            oui.setAttribute("class", "choix")
            let non = document.createElement("button")
            non.innerHTML = "Non"
            non.setAttribute("class", "choix")
            div3.append(question,oui,non)

            oui.addEventListener("click", function(){
                section.removeChild(div)
            })

            non.addEventListener("click", function(){
                div3.removeChild(question)
                div3.removeChild(oui)
                div3.removeChild(non)
                div3.append(check,change,trash)
            })
        })

        let divTodo = document.querySelectorAll("button")
        divTodo[1].addEventListener("click", function(){
            if (div.hasAttribute("id")) {
                div.style.display = "none"
            }
        })
    }
})



        // Faire les derniers boutons avec la variable divTodo
        // Regarder pour que le bouton check fonctionne autrement et qu'on puissent l'enlever aussi