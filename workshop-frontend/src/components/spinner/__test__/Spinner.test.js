import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './../Spinner';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

try {
    it("renders without crashing!", () => {
        const div = document.createElement("button");
        ReactDOM.render(<Spinner />, div);
    })
} catch (err) {
    console.log(err.message);
}


