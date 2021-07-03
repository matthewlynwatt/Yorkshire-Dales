export function Header() {
    return(
        
      <header>     
            <nav role="navigation" class="nav">
                <img src="../logo.svg" alt="Vector Smart Logo" class="nav__logo"/>
                <div class="nav__container__top">     
                   
                    <a class="nav__link" href="/">About</a>
                    <a class="nav__link" href="">How You Can Help</a>
                    <a class="nav__link" href="">Park Authority</a>
                    <a class="nav__link" href="">Planning</a>
                    <a class="nav__link" href="">Shop</a>
                    <a class="nav__link" href="">News</a>
                    <a class="nav__link" href="">Contact</a>
                    
                </div>
                
                <div class="nav__container__bottom"> 
                    <a class="nav__link" href="/">Places to Go</a>
                    <a class="nav__link" href="">Things to Do</a>
                    <a class="nav__link" href="">Plan Your Visit</a>
                    <a class="nav__link" href="">Be Inspired</a>
                    <a class="nav__link" href="">Explore By Map</a>
                </div>
                
            </nav>
     </header>
      

   
    )
}

export default Header 