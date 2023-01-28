import Nav from "./Nav"
import logo from '../assets/icons_assets/Logo .png'

export default function Header() {


    return (

        <header id="header">

            <img src={logo} alt="logo" />

            <Nav />


        </header>
    )
}