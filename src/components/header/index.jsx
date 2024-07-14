import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <ul style={{display: 'flex', gap: '20px'}}>
            <li style={{listStyle: 'none'}}>
              <Link style={{textDecoration: 'none', fontWeight: '600', color: '#000'}} to={"/"}>Home</Link>
            </li>
            <li style={{listStyle: 'none'}}>
              <Link style={{textDecoration: 'none', fontWeight: '600', color: '#000'}} to={"/admin"}>Management</Link>
            </li>
            <li style={{listStyle: 'none'}}>
              <Link style={{textDecoration: 'none', fontWeight: '600', color: '#000'}} to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
