import logo from '../../public/logo.jpg'
export default function Navbar(){
    return(
        <div className="navbar absolute">
            <div className="navElements">
                <ul className="flex">
                    <li >About Us</li>
                    <li>Our Teams</li>
                    <li>Events</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="Img">
                <img src={logo} />
            </div>
        </div>
    )
}