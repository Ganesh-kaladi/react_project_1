
import { useNotes } from "../../context/notes-context"
import { Checkarchive } from '../../utile/index'

export const Notecard = ({ id, title, text, isPin }) => {

    const { notesDispatch, archive, deleteNote } = useNotes();

    const isArchive = Checkarchive(archive, id);

    const checkDeleteNote = (deleteNote, id) => {
        return deleteNote?.length > 0 && deleteNote.some((note) => note.id === id)
    }
    const isDel = checkDeleteNote(deleteNote, id);


    const addPinnedNote = (id) => {
        !isPin ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UN_PIN',
            payload: { id }
        })
    }
    const addArchiveClick = (Id, Title, Text) => {
        if (!isArchive) {
            localStorage.setItem('archive', JSON.stringify([...archive, isArchive ? { id: Id, title: Title, text: Text } : { id: Id, title: Title, text: Text }]));
            notesDispatch({
                type: 'ADD_ARCHIVE',
                payload: { id }
            })
        }
        else {
            notesDispatch({
                type: 'REMOVE_ARCHIVE',
                payload: { id }
            });
            
        }
    }


    const deleteNoteClick = (Id, Title, Text) => {
        
        if (!isDel) {
            localStorage.setItem('deleteNote', JSON.stringify([...deleteNote, { id: Id, title: Title, text: Text }]));
            notesDispatch({
                type: 'DELETE_NOTE',
                payload: { id, isArchive }
            });
            removeArchiveFromStorage(Id);
        } else {
            notesDispatch({
                type: 'P_DELETE_NOTE',
                payload: { id }
            });
            romveDeletePerment(Id);
        }
    }
    function romveDeletePerment(id){
        const dArray = JSON.parse(localStorage.getItem('deleteNote'));
        const uArry = dArray.filter(p=>p.id!==id);
        console.log(uArry);
        localStorage.setItem('deleteNote',JSON.stringify([...uArry]));

    }
    function removeArchiveFromStorage(id){
        const aArray = JSON.parse(localStorage.getItem('archive'));
        const updatedArchive = aArray.filter(p=>p.id!==id);
        console.log(updatedArchive);
        localStorage.setItem('archive',JSON.stringify([...updatedArchive]));
    }



    return (
        <>
            <div key={id} className='w-56 border border-neutral-800 ml-2 p-2 rounded-md'>
                <div className="flex justify-between border-b border-slate-400">
                    <p className="text-gray-500 text-balance break-all">{title}</p>
                    {
                        !isArchive && !isDel && <button onClick={() => addPinnedNote(id)}><span >
                            <span className={isPin ? 'material-icons' : 'material-icons-outlined'}>
                                push_pin
                            </span>
                        </span></button>
                    }
                </div>
                <div className="flex flex-col">
                    <p className='text-emerald-950 text-balance break-words'>{text}</p>
                    <div className="ml-auto">
                        {
                            !isArchive && !isDel ? <button onClick={() => addArchiveClick(id, title, text)} >
                                <span className={isArchive ? 'material-icons' : "material-icons-outlined"}>
                                    archive
                                </span>
                            </button> : <></>
                        }

                        <button onClick={() => deleteNoteClick(id, text, title)} >
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