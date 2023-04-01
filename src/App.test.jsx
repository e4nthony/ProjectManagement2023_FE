/* eslint-disable no-use-before-define : 0 */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
