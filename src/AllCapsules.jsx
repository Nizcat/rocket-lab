import { useEffect, useState } from "react";
import styles from "./AllCapsules.module.css"

export function AllCapsules() {
    const [capsules, setCapsules] = useState()
    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/capsules")
        .then(response => response.json())
        .then(data => setCapsules(data));
   
    }, [])
    console.log(capsules)
    return (
        <section>
            <div><h1>All Capsules :</h1></div>
            <div>

            </div>
        </section>
    )
}