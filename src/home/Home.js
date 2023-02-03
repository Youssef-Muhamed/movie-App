import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import './Style.css'
import Card from "../components/Card"
import { useDispatch ,useSelector} from "react-redux"
// import { useSelector } from "react-redux"

import { AddFave } from "../Store/Actions/AddFave"
import { AddIndex } from "../Store/Actions/AddIndex"


// 

function Home(){
    const [movie, setMovie] = useState([])
    const [numPage, setNumPage] = useState(1)
    const [movId, setMovId] = useState()
    const [bg, setBg] = useState('btn btn-info')
    const [change,setchange] = useState()
    const [searchKey, setsearchKey] = useState('')
    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87')
    const dispatch = useDispatch()
    function handleFave(mov,id){
      dispatch(AddFave(mov))     
      
    }
    function AddIndexToChangeBg(index){
      dispatch(AddIndex(index))     
       
      }
    const myFaves = useSelector((state) => state.Rmovie.movie)
    const myIndex = useSelector((state) => state.Rmovie.index)

    
    function search(e){
        setsearchKey(e.target.value)
        setUrl("https://api.themoviedb.org/3/search/movie?api_key=9b743af1d4fde1d65af33c40dcccce87&")

    }
function paginate(e){
        setNumPage(e)
    }
    
    useEffect(() => {
      
        axios.get(url,{
            params:{
                page:numPage,
                query:searchKey
            }
        })
        .then((data) => setMovie(data.data.results))
        .catch((err) => console.log(err))
        
    }, [numPage,searchKey])
   
    return (
        <>
         <form className="d-flex w-50 p-3" role="">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e)=>search(e)} />
      </form>
        <div className="row mx-auto" >
            { movie.map((m,i) => { return <div className="col-lg-3 col-md-6 col-sm-12  my-2 card" key={m.id}> <Card title={m}/> <button className={myIndex.includes(i)?'btn btn-danger':'btn btn-info'} onClick={()=>{handleFave(m,m.id);AddIndexToChangeBg(i)}} disabled={myIndex.includes(i)}>{myIndex.includes(i)?"Added":"Add To favourite"}</button> </div>} )	}
        </div>
        <nav className="w-100">
  <ul className="pagination justify-content-center">
    <li className="page-item ">
      <button className="page-link" disabled={numPage==1} onClick={()=>paginate(numPage-1)} >Previous</button>
    </li>
    <li className="page-item"><button onClick={()=>paginate(1)} className="page-link" >1</button></li>
    <li className="page-item"><button onClick={()=>paginate(2)} className="page-link" >2</button></li>
    <li className="page-item"><button onClick={()=>paginate(3)} className="page-link" >3</button></li>
    <li className="page-item"><button onClick={()=>paginate(4)} className="page-link" >4</button></li>
    <li className="page-item"><button onClick={()=>paginate(5)} className="page-link" >5</button></li>
    <li className="page-item"><button onClick={()=>paginate(6)} className="page-link" >6</button></li>
    <li className="page-item"><button onClick={()=>paginate(7)} className="page-link" >7</button></li>
    
    <li className="page-item">
      <button className="page-link" onClick={()=>paginate(numPage+1)}>Next</button>
    </li>
  </ul>
</nav>
        </>
    )
}

export default Home