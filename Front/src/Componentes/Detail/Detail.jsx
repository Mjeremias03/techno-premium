import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux" 
import {useParams} from "react-router-dom"
import { infoCelulares } from "../../Redux/Actions"
const Detail =()=>{
    const detail = useSelector((state)=> state.detail)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
         dispatch(infoCelulares({id}))
    },[dispatch])
    console.log(detail)
    return(
        <div className="h-screen  flex justify-center items-center">
           <div className="w-1/2 h-1/2 flex justify-between">
              <div className="flex flex-wrap justify-center items-center w-1/4">
              {
                  detail.imagenes.map((el)=>(
                      <div className="flex flex-wrap justify-center items-center">
                        <img src={el} alt={detail.marca} />
                    </div>
                ))
            }
              </div>
              <div className="flex justify-center items-center  flex-col">
            <h1>{detail.marca}</h1>
              <h1>wejqwjekqwj</h1>
              <h1>fefewqfq</h1>
              <h1></h1>
              <h1></h1>
              </div>
           </div>
        </div>
    )
}
export default Detail