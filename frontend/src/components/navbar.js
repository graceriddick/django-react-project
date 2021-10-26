import React from 'react';
import 'bulma/css/bulma.min.css'
import { Navbar } from 'react-bulma-components'

class PracticeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      inventoryList: []
      };
  }
 
render() {
    return (
<Navbar>
  <NavbarBrand>
    <NavbarItem href="#">
      <img
        alt="Bulma: a modern CSS framework based on Flexbox"
        height="28"
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
      />
    </NavbarItem>
    <NavbarBurger />
  </NavbarBrand>
  <NavbarMenu>
    <NavbarContainer>
      <NavbarItem href="#">
        <NavbarLink>
          First
        </NavbarLink>
        <NavbarDropdown>
          <NavbarItem href="#">
            Subitem 1
          </NavbarItem>
          <NavbarItem href="#">
            Subitem 2
          </NavbarItem>
          <NavbarDivider />
          <NavbarItem href="#">
            After divider
          </NavbarItem>
        </NavbarDropdown>
      </NavbarItem>
      <NavbarItem href="#">
        Second
      </NavbarItem>
    </NavbarContainer>
    <NavbarContainer align="end">
      <NavbarItem href="#">
        At the end
      </NavbarItem>
    </NavbarContainer>
  </NavbarMenu>
</Navbar>
);
    }
        }