import {Link} from 'react-router-dom'
import './index.css'

const Header=()=>(
    <>
    <nav className='nav-container'>
        <div className='header-container'>
            <h1 className='company-name'>ZuAl</h1>
            <ul className='header-items' type='none'>
                <Link to='/'>
                    <li className='items'>Home</li>
                </Link>
                <Link to='/bloglist'>
                <li className='items'>Blog List</li>
                </Link>
                <Link to='/postForm'>
                    <li className='items'>Post Form</li>
                </Link>
            </ul>
            <div className='button-container'>
                <button type='button' className='loginButton'>Login</button>
                <button type='button' className='loginButton'>Join</button>
            </div>
        </div>
    </nav>
    </>
)
export default Header