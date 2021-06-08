import React from 'react';

import { PullFromEdge } from 'react-pull-from-edge';

const App = () => {
    return (
        <PullFromEdge onPullTop={() => alert('top')}>
            Welcome to Storybook Storybook helps you build UI components in isolation from your app's business logic, data, and context.
            That makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during development, testing, or
            QA. Browse example stories now by navigating to them in the sidebar. View their code in the src/stories directory to learn how
            they work. We recommend building UIs with a component-driven process starting with atomic components and ending with pages.
            CONFIGURE
        </PullFromEdge>
    );
};

export default App;
