import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"
function Show(){
    const [movie, setMovie] = useState([])
    const params = useParams()
    const Mid = params.id
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Mid}?api_key=9b743af1d4fde1d65af33c40dcccce87`)
        .then((data) => setMovie(data.data))
        .catch((err) => console.log(err))
    }, [])
console.log(movie);
    return (
        <>
    <div className="container text-center mt-5">
        <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
                <div className="card mb-3">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" style={{width:'400px'}} alt="..." />
                </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
                 <div className="card" style={{width:'50rem'}}>
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <p className="card-text">release in: {movie.release_date }</p>
                    <p className="card-text">Language: {movie.original_language }</p>

                </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Show