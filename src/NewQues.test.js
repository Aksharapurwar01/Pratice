import { render, fireEvent, screen } from '@testing-library/react';
import NewQues from './components/New ques/NewQues';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers'
import middleware from "./middleware";
import { legacy_createStore as createStore } from "redux";

const store = createStore(reducer, middleware);

test('when options input has no value, submit will be disabled', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQues />
            </Router>
        </Provider>
    );

    let inputOptionOne = screen.getByPlaceholderText('option1');
    let inputOptionTwo = screen.getByPlaceholderText('option2');
    let submitButton = screen.queryByTestId('submit-button');
    expect(inputOptionOne.value).toBe('');
    expect(inputOptionTwo.value).toBe('');
    expect(submitButton.disabled).toBeTruthy();
});

test('when input-one is given to input field it correctly changes and displays updated value', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQues />
            </Router>
        </Provider>
    );

    let ele = screen.getByPlaceholderText('option1');

    fireEvent.change(ele, {
        target: { value: "OPTION1" }
    });

    expect(screen.queryByTestId('input-one').value).toBe('OPTION1')
});

test('when input-two is given to input field it correctly changes and displays updated value', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQues />
            </Router>
        </Provider>
    );

    let ele = screen.getByPlaceholderText('option2');

    fireEvent.change(ele, {
        target: { value: "OPTION2" }
    });

    expect(screen.queryByTestId('input-two').value).toBe('OPTION2')
});
