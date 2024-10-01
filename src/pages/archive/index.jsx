import { Fragment } from "react"
import { Navbar } from "../../componenet/navbar"
import { Sidebar } from "../../componenet/aside";
import { useNotes } from "../../context/notes-context";
import { Notecard } from "../../componenet/noteCard";

export const Archive = () => {

    const { archive } = useNotes();

    return (
        <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar />
                <div>
                    <div>
                        {archive?.length > 0 && <h1 className="mt-10 mb-2 pl-4">Archive</h1>}
                        <div className='mt-18 flex flex-wrap gap-6'>
                            {
                                archive?.length > 0 && archive.map(({ id, title, text, isPin }) => {
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