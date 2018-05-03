import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SparkButton from '@ciscospark/react-component-button';
import styles from './button.css';

class Button extends Component {
  handleClick() {
    console.log('clicked');
  }
  render() {
    return (
      <div className={styles.container}>
        <SparkButton
          label="Test?!?!"
          iconType="icon-cancel_20"
          onClick={this.handleClick}
          />
      </div>
    );
  }
};

ReactDOM.render(<Button />, document.getElementById('content'));
