import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import World from './components/World';
import store from './store';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        mainElement
    );
};

render(World);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
    module.hot.accept('./components/World', () => {
        import('./components/World').then(World => {
            render(World.default);
        });
    });
}
