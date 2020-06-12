import React from 'react';
import Header from './components/header';
import Page from './components/page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: 'Page'
    };
    this.setState = this.setState.bind(this);
    this.setPanel = this.setPanel.bind(this);
  }

  setPanel(type) {
    this.setState({ panel: type })
  }

  render() {
    const { panel } = this.state;
    return (
      <div className="body">
        <Header setPanel={this.setPanel} panel={panel} />
        <Page panel={panel}/>
      </div>
    );
  }
}

export default App;
