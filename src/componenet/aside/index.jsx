import { NavLink } from "react-router-dom"

export const Sidebar = () => {

    const style = ({isActive})=>{
        return isActive ? 'bg-indigo-800 flex content-center gap-2 px-2 py-1 rounded-tr-full rounded-br-full text-gray-100' :'hover:bg-indigo-800 hover:text-gray-100 flex content-center gap-2 px-2 py-1 rounded-tr-full rounded-br-full'
    }
    return (
        <aside className='flex flex-col gap-3 border-r-2 border-gray-400 h-screen p-3'>

            <NavLink to='/' className={style}>
                <span className="material-icons">
                    home
                </span>
                <span>Home</span></NavLink>
            <NavLink to='/archive' className={style}>
                <span className="material-icons">
                    archive
                </span>
                <span>Archive</span></NavLink>
            <NavLink to='/bin' className={style}>
                <span className="material-icons">
                    delete
                </span>
                <span>Bin</span>
            </NavLink>

        </aside>
    )
}