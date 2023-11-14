import { useState } from "react";
import DataMovie from "../../utils/DataMovie";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies() {


    // state
    const [item, setItem] = useState(DataMovie)

    const handleClick = () => {
        const movie = {
            id: 4,
            title: "THE MARVELS",
            date: "11 juni 2002",
            image: "https://www.themoviedb.org/t/p/w220_and_h330_face/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg"
        }

        const movie2 = {
            id: 8,
            title: "FURRY",
            date: "11 juni 2002",
            image: "https://www.themoviedb.org/t/p/w220_and_h330_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg"
        }

        setItem([...item, movie, movie2])
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__tittle}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    {
                        item.map(function(data){
                            return(
                                
                                    <Movie key={data.id} title={data.title} date={data.date} image={data.image}/>                              
                               
                            )
                        })
                    }
                    {/*
                    *Duplicate 10 movies below
                    */}
                  </div>
                <button onClick={handleClick}>Tambahkan Movie</button>
            </section>
        </div>
    )
}

export default Movies;