import 'bulma/css/bulma.min.css';
import PracticeTile from './components/practicetile';
import PracticeButton from './components/practicebutton';
import PracticeContainer from './components/practicecontainer';
import PracticeFooter from './components/practicefooter';
import PracticeColumns from './components/practicecolumns';
import React from 'react';


class App extends React.Component {
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
  
    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/inventories/');
        const inventoryList = await res.json();
        this.setState({
          inventoryList
        });
      } catch (e) {
        console.log(e);
    }
    }
    render() {
      const { viewCompleted } = this.state;
      console.log(this.state.inventoryList.results)
      const newItems = this.state.inventoryList.results
      console.log(newItems)
      //   item => item.completed === viewCompleted
      // );
      return(<><PracticeTile /><PracticeButton /><PracticeContainer /><PracticeFooter /><PracticeColumns /></>) 
}
};

  export default App;





