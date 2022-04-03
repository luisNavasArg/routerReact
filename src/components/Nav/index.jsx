const Nav=()=>{
return(
   <nav className="navbar navbar-dark bg-dark">
   <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#home">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#cats">Gatos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#dogs">Perros</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#faq">Preguntas frecuentes</a>
  </li>
</ul>
</nav>
)
}
export default Nav