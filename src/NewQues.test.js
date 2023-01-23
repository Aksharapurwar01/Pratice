import { render,screen } from '@testing-library/react';
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
