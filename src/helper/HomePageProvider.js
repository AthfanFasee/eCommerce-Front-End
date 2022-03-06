import { createContext, useState } from "react";


export const HomePageContext = createContext(null)

export function HomePageProvider({children}) {

    //to save input elements' value
    const [SKU, setSKU] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [Quantity, setQuantity] = useState("");

    
    return (
        <HomePageContext.Provider value={{SKU, setSKU, name, setName, description, setDescription, Quantity, setQuantity}}>
            {children}
        </HomePageContext.Provider>
    )
}


