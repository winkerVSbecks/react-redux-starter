import { configure } from '@kadira/storybook';

function loadStories() {
  require('../styles/index.css');
  require('../components/stories/button');
  // require as many stories as you need.
}

configure(loadStories, module);
