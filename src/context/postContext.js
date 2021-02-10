import React, {createContext, useState} from "react"

export const PostContext = createContext()

export const PostContextProvider = (props) => {
    const [currentId, setCurrentId] = useState(null)

    const idSetter = (id) => {
        setCurrentId(id);
    }

    return (
        <PostContext.Provider value = {{currentId, idSetter}}>
            {props.children}
        </PostContext.Provider>
    )
}
