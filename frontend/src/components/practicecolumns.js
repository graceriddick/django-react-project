import React from 'react';
import 'bulma/css/bulma.min.css'
import { Notification, Columns } from 'react-bulma-components'

class PracticeColumns extends React.Component {
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
        <Columns>
          <Columns.Column>
            <Notification color="primary">First Column</Notification>
          </Columns.Column>
          <Columns.Column>
            <Notification color="primary">Second Column</Notification>
          </Columns.Column>
          <Columns.Column>
            <Notification color="primary">Third Column</Notification>
          </Columns.Column>
          <Columns.Column>
            <Notification color="primary">Fourth Column</Notification>
          </Columns.Column>
        </Columns>
      );
    }
  }

  export default PracticeColumns;