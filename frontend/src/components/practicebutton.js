import 'bulma/css/bulma.min.css'
import React from 'react';
import { Button } from 'react-bulma-components'


class PracticeButton extends React.Component {
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
      <><Button color="danger">Button</Button><main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {/* {this.renderItems()} */}
              </ul>
            </div>
          </div>
        </div>
      </main></>
    )
  }
}


export default PracticeButton