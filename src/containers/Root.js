/**
 * Just like our store, we configure a 'Root' component that is
 * required based on the env variable. This component is typically one
 * surrounded by a <Provider>.
 */

let loadedModule = null;

if (process.env.NODE_ENV === 'production') {
  loadedModule = require('./Root.prod.js');
} else {
  loadedModule = require('./Root.dev.js');
}

export const Root = loadedModule;
