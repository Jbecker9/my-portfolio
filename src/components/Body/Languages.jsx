import React from "react";
import "../../styles/Languages.css"

function Languages(){

    return(
        <div className="Languages-div">
           <div className="Languages-content">
                <p> Import </p> <p className="Languages-name"> React </p> <p> from "../skills"; </p>
           </div>
           <div className="Languages-content">
                <div> <p className="Languages-name"> ruby_on_rails </p> <p>{ ' = Skills.create!() ' }</p> </div>
           </div>
           <div>
                <p className="Languages-name"> CSS </p> <p> {' { height: max; } '} </p>
           </div>
           <div className="Languages-content">
                <p> { ' let skills = [ ...skills,' } </p> <p className="Languages-name"> Javascript </p> <p> { ' ] ' } </p>
           </div>
           <div className="Languages-content">
                <p> { ' @@skills = [ *skills, ' } </p> <p className="Languages-name"> Ruby </p> <p> { ' ] ' } </p>
           </div>
           <div className="Languages-content">
                <p> INSERT INTO skills VALUES </p> <p> { ' ( ' } </p> <p className="Languages-name"> SQL, </p> <p className="Languages-name"> postgreSQL </p> <p> { ' ) ' } </p>
           </div>
           <div className="Languages-content">
                <p> { ' < !SKILLTYPE ' } </p> <p className="Languages-name"> HTML </p> <p> { ' > ' } </p>
           </div>
        </div>
    )
}

export default Languages