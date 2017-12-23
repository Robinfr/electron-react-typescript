import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import World from './components/World';

//Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

//Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mainElement
    );
}

render(World);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/World', () => {
        import('./components/World').then(World => {
            render(World.default);
        });
    });
}