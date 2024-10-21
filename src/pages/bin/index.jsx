import { Fragment } from "react"
import { Navbar } from "../../componenet/navbar"
import { Sidebar } from "../../componenet/aside"
import { useNotes } from "../../context/notes-context"
import { Notecard } from "../../componenet/noteCard"

export const Binnote = () => {

    const { deleteNote } = useNotes();
    
    return (
        <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar />
                <div>
                    <div>
                       
                        <div className='mt-18 flex flex-wrap gap-6'>
                            {
                                deleteNote?.length > 0 && deleteNote.map(({ id, title, text, isPin }) => {
                                    return (
                                        <Notecard key={id} id={id} title={title} text={text} isPin={isPin} />
                                    )

                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}