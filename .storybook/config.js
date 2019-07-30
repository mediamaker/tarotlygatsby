import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const req = require.context("../src", true, /.stories.js$/)


function loadStories() {
  req.keys().forEach(filename => req(filename));
}
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
configure(loadStories, module)