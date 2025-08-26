import { Navbar } from "../../componenet/navbar"
import { Fragment } from "react"
import { Sidebar } from "../../componenet/aside"
import { useNotes } from "../../context/notes-context"
import { Notecard } from "../../componenet/noteCard"


export const Home = () => {

    const { title, text, notes, notesDispatch } = useNotes();
    



    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_NOTE'
        })
    }



    const pinnedNote = notes?.length > 0 && notes.filter(({ isPin }) => isPin);
    const otherNote = notes?.length > 0 && notes.filter(({ isPin }) => !isPin);

    return (
        <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar className='basis-1/5' />
                <div className="basis-4/5 w-full">
                    <div className="flex justify-center pt-6">
                        <div className='flex flex-col w-[300px] border  relative rounded-md' >
                            <input value={title} onChange={onTitleChange} className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1" placeholder='Enter Title' />
                            <textarea value={text} onChange={onTextChange} className="border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder='Enter Text' />
                            <button disabled={(text?.length <= 0 || title?.length <= 0) && 'disabled'} className="absolute bottom-0 right-0 w-7 h-7  border bg-indigo-800 text-slate-50 rounded-full" onClick={onAddClick}>
                                <span className="material-icons">
                                    add
                                </span>
                            </button>
                        </div>
                    </div>

                    <div>
                        {pinnedNote?.length > 0 && <h1 className="mt-10 mb-2 pl-4">PinnedNote</h1>}
                        <div className='mt-18 flex flex-wrap gap-6'>
                            {
                                pinnedNote.length > 0 && pinnedNote.map(({ id, title, text, isPin }) => {
                                    return (
                                        <Notecard key={id} id={id} title={title} text={text} isPin={isPin} />
                                    )

                                })
                            }
                        </div>
                    </div>

                    <div className='mt-14 flex flex-wrap gap-6'>
                        {
                            otherNote.length > 0 && otherNote.map(({ id, title, text, isPin }) => {
                                return (
                                    <Notecard key={id} id={id} title={title} text={text} isPin={isPin} />
                                )

                            })
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}