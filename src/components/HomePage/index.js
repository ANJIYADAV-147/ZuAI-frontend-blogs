import Footer from '../Footer'
import Header from '../Header'
import './index.css'

const HomePage=()=>(
    <>
        <Header/>
            <div className='Home-container'>
                <h1 className='home-heading'>Best Blogs</h1>
                <img src='https://spacebar.in/wp-content/uploads/2018/04/blog-2355684_1920-2-1536x1023.jpg' alt='img' className='home-img'/>
            </div>
        <Footer/>
    </>
)
export default HomePage