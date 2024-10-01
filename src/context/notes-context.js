import { createContext,useContext, useReducer } from "react";
import { notesReducer } from "../reducers";


const NotesContext = createContext();

const NotesProvider = ({children})=>{

    const initialState = {
        title: "",
        text: '',
        notes: [],
        archive:[],
        deleteNote:[]
    }

    const [{ title, text, notes, archive,deleteNote }, notesDispatch] = useReducer(notesReducer, initialState);


    return(
        <NotesContext.Provider value={{ title, text, notes, archive, notesDispatch, deleteNote }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {useNotes, NotesProvider}