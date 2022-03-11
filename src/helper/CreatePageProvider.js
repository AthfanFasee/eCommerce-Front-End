import { createContext, useState } from "react";


export const CreatePageContext = createContext(null)

export function CreatePageProvider({children}) {

    //to save input elements' value
    const [createFormData, setCreateFormData] = useState({
        SKU: "", name: "", description: "", Quantity: 0, images: {}
    });

    

     //to catch errors
     const [error, setError] = useState("");


    return (
        <CreatePageContext.Provider value={{setError, error, createFormData, setCreateFormData}}>
            {children}
        </CreatePageContext.Provider>
    )
}


