// import React from "react";
// re

// export default function Nav() {
//     return (
//         <div className="nav">           
//            <div className="navBtns">
//                 <a href="/aboutme">About Me</a>
//                 <a href="/myprojects">My Projects</a>
//             </div> 

//         </div>
//     )
// }

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="/aboutme/">About Me</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/myprojects/">My Projects</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#">Resumé</a></MenuItem>
      </Menu>
    </div>
  );
}