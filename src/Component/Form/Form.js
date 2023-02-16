import React, {useRef, useState} from 'react';
import "./form.css";
import * as events from "events";



function Form(props) {
    //state
    const [message, setMessage] = useState("vqfv") ;

    //comportement

    const handelchandge = events => {
        console.log("uhukb")
    }

    const HandleSubmit = (events) => {
        events.preventDefault()
        alert("ton pere le fdp")
        console.log();
    }

    //affichage
    return (
        <main>
            <form action="submit" onSubmit={HandleSubmit} >
                <div className="card">
                    <h3>Formulaire</h3>
                    <span>Nom complet :</span>
                    <input value={message} type="text" name="name" onChange={handelchandge}/>
                    <span>Email :</span>
                    <input type="text" name="email" />
                    <span>Message :</span>
                    <input type="text" name="message" />
                    <span>Service :</span>
                    <select>
                        <option>S.A.V</option>
                        <option>Demande de devis</option>
                        <option>Postuler</option>
                        <option id="idAutre" value="autre">Autre</option>
                    </select>
                    <input type="text" id="name" name="autre" hidden/>
                    <button className="enter">Valide ta mere</button>
                </div>
            </form>
        </main>
    );
}

/**
 * idAutre.addEventListener("click", () => {
 *     if (getComputedStyle(autre).display !== "none"){
 *         autre.style.display = "none";
 *     } else {
 *         autre.style.display = "block";
 *     }
 * })
 */

const idAutre = document.getElementById("idAutre");
const autre = document.getElementById("autre");

console.log(idAutre+" "+autre);

export default Form;