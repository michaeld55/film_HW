import React, { Component } from "react";
import Film from "./Film";

class FilmsList extends Component{

    render(){
        const filmList = this.props.films.map(film => {
            return(
                <Film key = {film.id}>
                   <li> 
                       <a href = {film.url}> {film.name}</a>
                   </li>
                        
                </Film>
            );
        });

        return(
            <div className = "film-list">
                <ul>{filmList}</ul> 
            </div>
        )
    }
}

export default FilmsList;