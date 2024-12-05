import { useState } from "react";
import { endpoints } from "../constants/endpoints";

const useRegexOptions = () => {
    const [errorMessageFetch, setErrorMessageFetch] = useState("");
    const [errorMessageSave, setErrorMessageSave] = useState("");
    const [errorMessageDelete, setErrorMessageDelete] = useState("");

    const fetchRegex = async (token) => {
        try {    
            const response = await fetch(endpoints.fetchRegex, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            setErrorMessageFetch("")

            if (!response.ok) {
                // throw new Error(`Error: ${response.status}`);
                setErrorMessageFetch("Oh no! Error fetching the regular expressions")
            }
            
            const data = await response.json()
            return data
        } catch (error) {
            // console.error("Failed to fetch regex:", error)
            setErrorMessageFetch("Oh no! Error fetching the regular expressions")
        }
    }

    const saveRegex = async (regex, token) => {
        try {
            if (!token) return;
            
            const response = await fetch(endpoints.saveRegex, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ regEx: regex })
            });
            setErrorMessageSave("")
    
            if (!response.ok) {
                setErrorMessageSave("Regular expression couldn't be visualized")
            }

        } catch (error) {
            console.error("Failed to save regex:", error);
            throw error;
        }
    };

    const deleteRegex = async (regexId, token) => {
        try {
            const response = await fetch(endpoints.deleteRegex + regexId, {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                 },
            })
            setErrorMessageDelete("")

            if (!response.ok) {
                setErrorMessageDelete("Oh no! Error deleting the regex.")
                // throw new Error(`Error: ${response.status}`);
            }
            
        } catch (error) {
            setErrorMessageDelete("Oh no! Failed to delete the regex.")
            // console.error("Failed to delte regex: ", error)
            // throw error
        }
    }
    

    return { fetchRegex, saveRegex, deleteRegex, errorMessageFetch, errorMessageSave, errorMessageDelete, setErrorMessageSave, setErrorMessageDelete, setErrorMessageFetch }
}

export default useRegexOptions