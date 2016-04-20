import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../button';
import Form from '../form';

const Info = ({ children }) => {
  return (
    <p className="p2 mt2 border rounded"
      style={{
        color: '#8a6d3b',
        backgroundColor: '#fcf8e3',
        borderColor: '#faebcc',
      }}>
      { children }
    </p>
  );
};

Info.propTypes = {
  children: React.PropTypes.node.isRequired,
};


storiesOf('Button', module)
  .add('default button with text', () => (
    <div className="p4 center">
      <Button>This is a button</Button>
    </div>
  ))
  .add('with an action', () => (
    <div className="p4 center">
      <Button onClick={ action('clicked') }>Submit</Button>
      <Info>Clicking the button should fire the action</Info>
    </div>
  ))
  .add('submit for a form', () => (
    <div className="p4 center">
      <Form
        handleSubmit={ () => action('form submitted') }>
        <Button type="submit">Submit</Button>
      </Form>
      <Info>Clicking the button should submit the form</Info>
    </div>
  ))
  .add('with custom classes', () => (
    <div className="p4 center">
      <Button className="bg-red">Delete</Button>
      <Info>The button should have a red background</Info>
    </div>
  ));
