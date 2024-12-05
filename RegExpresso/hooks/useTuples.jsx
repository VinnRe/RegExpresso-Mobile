import { useState } from "react";
import { endpoints } from "../constants/endpoints";

const useTuples = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const getNFATuples = async (regex) => {
        try {
            const response = await fetch(endpoints.tuplesNFA, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    regEx: regex 
                })
            })
            
            if (!response.ok) {
                setErrorMessage("Error Fetching the Tuples!");
            }
            
            const data = await response.json()
            setErrorMessage("");
            return data
        } catch (error) {
            setErrorMessage("Error Receiving Tuples!");
        }
    }
    
    const getDFATuples = async (regex) => {
        try {
            const response = await fetch(endpoints.tuplesDFA, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    regEx: regex 
                })
            })
            
            if (!response.ok) {
                setErrorMessage("Error Fetching the Tuples!");
            }
            
            const data = await response.json()
            setErrorMessage("");
            return data
        } catch (error) {
            setErrorMessage("Error Receiving Tuples!");
        }
    }

    return { getDFATuples, getNFATuples, errorMessage, setErrorMessage }
}

export default useTuples