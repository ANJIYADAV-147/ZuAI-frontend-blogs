import {Link} from 'react-router-dom'
import './index.css'

const PostItem=(props)=>{
    const {postDetails}=props
    const {id,title}=postDetails
    return(
        <li>
            <Link to={`/posts/${id}`} className='link'>
                <h1>{title}</h1>
            </Link>
        </li>
    )
}
export default PostItem