import { createContext, useState } from "react";


export const CreatePageContext = createContext(null)

export function CreatePageProvider({children}) {

    //to save input elements' value
    const [SKU, setSKU] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [Quantity, setQuantity] = useState("");



     //to catch errors
     const [error, setError] = useState("");


    return (
        <CreatePageContext.Provider value={{setError, error, SKU, setSKU, name, setName, description, setDescription, Quantity, setQuantity}}>
            {children}
        </CreatePageContext.Provider>
    )
}


