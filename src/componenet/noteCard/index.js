import { useNotes } from "../../context/notes-context"
import { Checkarchive } from '../../utile/index'

export const Notecard = ({ id, title, text, isPin }) => {

    const { notesDispatch, archive, deleteNote } = useNotes();

    const isArchive = Checkarchive(archive, id);

    const checkDeleteNote = (deleteNote,id)=>{
        return deleteNote.some((note)=>note.id===id)
    }
    const isDel = checkDeleteNote(deleteNote,id);
    console.log('-----del');
    console.log(isDel);
    

    const addPinnedNote = (id) => {
        !isPin ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UN_PIN',
            payload: { id }
        })
    }
    const addArchiveClick = (id) => {
        !isArchive ? notesDispatch({
            type: 'ADD_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_ARCHIVE',
            payload: { id }
        })
    }
    const deleteNoteClick = (id)=> {
        !isDel ?notesDispatch({
            type:'DELETE_NOTE',
            payload:{id,isArchive}
        }):notesDispatch({
            type:'P_DELETE_NOTE',
            payload:{id}
        })
    }
    console.log('--------------------');
    console.log(deleteNote);



    return (
        <>
            <div key={id} className='w-56 border border-neutral-800 ml-2 p-2 rounded-md'>
                <div className="flex justify-between border-b border-slate-400">
                    <p className="text-gray-500">{title}</p>
                    {
                        !isArchive && !isDel && <button onClick={() => addPinnedNote(id)}><span >
                            <span className={isPin ? 'material-icons' : 'material-icons-outlined'}>
                                push_pin
                            </span>
                        </span></button>
                    }
                </div>
                <div className="flex flex-col">
                    <p className='text-emerald-950'>{text}</p>
                    <div className="ml-auto">
                        {
                            !isArchive && !isDel  ? <button onClick={() => addArchiveClick(id)} >
                                <span className={isArchive ? 'material-icons' : "material-icons-outlined"}>
                                    archive
                                </span>
                            </button> : <></>
                        }

                        <button onClick={()=>deleteNoteClick(id)} >
                            <span className={isDel ? 'material-icons' : "material-icons-outlined"}>
                                delete
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}