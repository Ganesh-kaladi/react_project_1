import logo from '../../assets/note.png'

export const Navbar = ()=>{
    return(
        <header className='flex p-3 gap-3 border-b-2 border-gray-400'>
            <div className='w-12 h-12'>
                <img src={logo} alt="img" className='w-full h-full' />
            </div>
            <h4 className='text-indigo-800 text-4xl font-bold'>NoteOne</h4>
        </header>
    )
} 