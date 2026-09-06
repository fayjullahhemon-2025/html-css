import { IoMdSearch } from "react-icons/io"

const Nav = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '4px'
    }
    const listStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        listStyleType: 'none',

    }
    const linkStyle = {
        textDecoration: 'none',
        color:'black'
    }
    return (
        <nav style={navStyle}>
            <img src="" alt="" />
            <ul style={listStyle}>
                <li><a style={linkStyle} href="/">Home</a></li>
                <li><a style={linkStyle} href="/">About Us</a></li>
                <li><a  style={linkStyle} href="/">Services</a></li>
            </ul>
            <div style={navStyle}>
                <IoMdSearch />
                <button>Login</button>
                <button>Signup</button>
            </div>
        </nav>
    )
}
export default Nav;