import axios from "axios"
import { useEffect, useState } from "react"


const Main = () => {

    const[data,setdata] = useState(null)

    const imgs = [
        "./images/one.png",
        "./images/two.png",
        "./images/three.png",
        "./images/four.png",
        "./images/five.png",
        "./images/six.png",
        "./images/seven.png",
        "./images/eight.png",
        "./images/nine.png",
        "./images/one.png"
    ]

    useEffect(()=>{
        dta()
    },[])

    const dta = async() => {
        const a = await axios.get("https://jsonplaceholder.typicode.com/users")
        const b = a.data
        setdata(b)
    }

    return(
        <>
        <h1>Alumnus of Law College</h1>
        <div className="main">
        {
            data?.map((c,i)=>{
                return(
                    <>
                    <div className="card">
                        <img src={imgs[i]} alt={c.name} height={200} />
                        <h2>{c.name}</h2>
                        <h5>{c.email}</h5>
                        <span>{c.company.name}</span>
                        <span>{c.city}</span>
                        <span>{c.phone}</span>
                        <span>{c.company.bs}</span>
                    </div>
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export default Main