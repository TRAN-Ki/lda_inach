import React, {useState} from 'react';
import "./form.css";
import * as events from "events";


class Form extends React.Component{

    state = {
        nom : "",
        email : "",
        message : "",
    }

    HandleSubmit = events =>{
        //alert(this.state.email)
        //alert(this.state.nom)
        //alert(this.state.message)
    };
    handelchandge = events =>{
        this.setState({[events.target.name]: events.target.value})
    };

    render()
    {
        return(
            <main>
                <form action="submit" onSubmit={this.HandleSubmit} >
                    <div className="card">
                        <h3>Formulaire</h3>
                        <span>Nom complet :</span>
                        <input type="text" name="nom" onChange={this.handelchandge}/>
                        <span>Email :</span>
                        <input type="text" name="email" onChange={this.handelchandge} />
                        <span>Message :</span>
                        <input type="text" name="message" onChange={this.handelchandge}/>
                        <span>Service :</span>
                        <select>
                            <option>S.A.V</option>
                            <option>Demande de devis</option>
                            <option>Postuler</option>
                            <option id="idAutre" value="autre">Autre</option>
                        </select>
                        <input type="text" id="name" name="autre" hidden/>
                        <p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p><p>  iuiuibikhnuin</p>
                        <button className="enter" type="submit">Envoyer</button>
                    </div>
                </form>
            </main>
        )
    }

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