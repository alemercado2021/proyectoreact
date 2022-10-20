import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        
            <header>
                <nav>
                    <p>Funko Argentina</p>
                    <ul>
                        <li><a href="">Marvel</a></li>
                        <li><a href="">DC</a></li>
                        <li><a href="">Disney</a></li>
                        <li><a href="">Star Wars</a></li>
                        <li><a href="">Pokemon</a></li>
                        <li><a href=""><CartWidget/></a></li>
                    </ul>
                </nav>
            </header>
        
    )
}

export default NavBar