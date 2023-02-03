import { Link } from "react-router-dom"

function Card(props){
    return (
        <>
        <div className="col-md-4">
            <div className="card" style={{width: "20rem"}} >
  <img src={`https://image.tmdb.org/t/p/w500/${props.title.poster_path}`} className="card-img-top" alt="..." />
  <div className="card-body">
   <Link style={{textDecoration:'none ',color:'#fff'}} to={`/show/${props.title.id}`}> <h5 className="card-title">{props.title.title}</h5></Link>
    
  </div>
</div>
</div>
        </>
    )
}

export default Card