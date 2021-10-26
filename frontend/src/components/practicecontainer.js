import 'bulma/css/bulma.min.css'
import React from 'react';
import { Container } from 'react-bulma-components'
import { Notification } from 'react-bulma-components'

class PracticeContainer extends React.Component {
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
    <div>
      <Container>
      <Notification color="warning">
      {/* This container will strech depending of the breakpoint you choose */}
      Nola Natural Disaster Resources
      </Notification>
    </Container>
    <Notification>Hey</Notification>
    </div> 
    ) 
  }
}


export default PracticeContainer