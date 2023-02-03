import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  changeHandler = () => {
    console.log('checkbox value changed!');
  };
  render() {
    return (
      <div>
        <input
          tabIndex="1"
          type="checkbox"
          name="chkbox"
          id="checkbox"
          onChange={this.changeHandler}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          check me
        </label>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
