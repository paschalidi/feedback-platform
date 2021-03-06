# Simple Component Library

React components used inside of your web apps.

## Component Development

To get started developing components first read [the storybook quickstart](https://storybook.js.org/basics/quick-start-guide/).

Essentially all you need is to create your component and link it together with the current stories in `stories/index.stories.js`.

## Automated Deployment

Deployment for the component library is an automated process requiring three separate tasks:

- Testing: Building, linting, and unit testing code
- Packaging: Deploying the npm package
- Website: Deploying storybook static assets to Github pages

All tasks are ran using [Circle CI](https://circleci.com/gh/UvitaTeam/) whenever any changes are detected (excluding the master branch). Both the packaging and website steps are only triggered when a new tag is added to the project. To handle releases we use Github's release interface which will automatically run the steps necessary to make new changes available.

## Tech Used

- Storybook
- React
- Styled components
- Webpack / Babel
