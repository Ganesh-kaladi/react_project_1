import { v4 as uuid } from 'uuid'
// import { Checkarchive } from '../utile'

export const notesReducer = (state, { type, payload }) => {




    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPin: false }]
            }
        case 'CLEAR_NOTE':
            return {
                ...state,
                title: '',
                text: ''
            }
        case 'PIN':
           
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPin: true } : note)
            }

        case 'UN_PIN':
           
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPin: false } : note)
            }
        case 'ADD_ARCHIVE':
            return{
                ...state,
                archive: [...state.archive, state.notes.find(({id}) => id === payload.id) ],
                notes:state.notes.filter(({id}) => id !==(payload.id))
            }
        case 'REMOVE_ARCHIVE':
            return{
                ...state,
                notes:[...state.notes, state.notes.find(({id}) => id===payload.id)],
                archive:state.archive.filter(({id}) => id !==payload.id)
            }
        case 'DELETE_NOTE':
            return{
                ...state,
                deleteNote:[...state.deleteNote, (payload.isArchive) ? state.archive.find(({id})=> id===payload.id):state.notes.find(({id})=> id===payload.id)],
                notes:state.notes.filter(({id}) => id !==payload.id),
                archive:state.archive.filter(({id}) => id !==payload.id)
            }
        case 'P_DELETE_NOTE':
            return {
                deleteNote:state.deleteNote.filter(({id})=>id!==payload.id),
                notes:[...state.notes],
                archive:[...state.archive]
            }
        default:
            return
    }

}

