# Simple Redux Boilerplate

A simple, yet comprehensive React + Redux application, complete with DevTools.

Author: [@tsaiDavid](https://github.com/tsaiDavid/) | [www.davidtsai.codes](https://www.davidtsai.codes)

### Overview

This is the perfect way to start any React + Redux application - **especially if you're looking for a middle-ground**. The intention behind this boilerplate / starter-kit is to offer the user just the right amount of tools and code to hit the ground running, while minimizing bulk and overhead.

My intention was to keep the overall style and structure as un-opinionated as possible, to offer you - the user - as much creativity and flexibility when it comes to your needs. Please feel free to explore the repo, I will continue to leave educational comments where I see fit, and suggestions and advice are always welcome. Of course, this is still a work in progress - so do let me know if you see things that might need a look at - or feel free to make a PR!

This project features a super simple UI - just for you to see how everything is wired up, using the classic counter example:

![](http://i.giphy.com/kVzC2nNRbFgC4.gif)

I hope you find this helpful! If you like what you see please star/fork/follow me on **[GitHub](https://github.com/tsaiDavid/)** and be sure to follow me on **[Twitter](https://twitter.com/tftsai)**!

### Features

  - React + Redux
  - Babel 6 w/ basic presets and transform
  - Webpack w/ basic dev and prod configurations
  - Express development server; easily roll out a production enabled server of your own
  - Eslint w/ basic configs
  - Redux DevTools + Logger middleware - easily removable/replaceable based on your needs

### Requirements
  - Recommend using `node ^5.0.0`

### FAQ

  - Why another React and Redux boilerplate?
  > There are tons of great boilerplates out there, some of them with some pretty advanced functionality! But they aren't good for learning the holistic approach of getting a React/Redux app up and running. I wanted to create a boilerplate that would encourage and help the user learn how everything is set up, from Babel and Webpack through conditional requires and giving them the DevTools they need!

  - Why not use WebpackDevServer?
  > The included `devServer.js` is a Node/Express server - mainly because most people will end up creating applications that rely on a Node server! Using the `webpack-dev-middleware` and `webpack-hot-middleware` allow us to get syntax errors displayed in an overlay, which using WebpackDevServer doesn't allow for.

  >![](https://cloud.githubusercontent.com/assets/1539088/11611771/ae1a6bd8-9bac-11e5-9206-42447e0fe064.gif)

  - How can I get this thing into production?
  > I'm currently working on including a guide or walkthrough, but at the moment all you have is a `devServer.js`, your first step would probably include creating a separate `server.js` file and going from there - just be sure to see how the application relies on the NODE_ENV variables to select between "dev" and "prod" files!

  - What is this missing?
  > At the moment, I have not enabled the loading of SASS, but I do plan on it. As your apps grow in size, you might want to consider creating a `utils` directory. Lastly, be sure to follow @gaeron's tips on reducer composition!

### Usage

##### Getting Started:

To begin, fork this repo and then clone those contents down!

Ideally, fork this boilerplate, then clone.
```
$ git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/simple-redux-boilerplate.git
```

Install required dependencies.
```
npm install
```

Run development server, complete with DevTools and related configuration.
```
npm run dev
```

You're now ready to get working! *(enter command or visit via browser directly)*
```
open http://localhost:3000/
```

##### Next Steps & Other Notes:

Now that your development server is up and running, you will see that you have your Redux DevTools available for you to use. The keyboard shortcuts available follow the generally accepted config - but you're free to make changes to them here: `containers/DevTools.js`.

***To toggle the DevTool panel during development:***
<kbd>CTRL</kbd> + <kbd>H</kbd>

***Change the DevTool panel's position during development:***
<kbd>CTRL</kbd> + <kbd>Q</kbd>

### Roadmap

 - [x] Base boilerplate design off of "react-transform-boilerplate"
 - [x] Begin work on a complementary Yeoman generated package
 - [x] Implement Redux
 - [x] Implement Redux DevTools
 - [x] Optional Redux Logger Middleware is included (pop open console to see logging)
 - [x] Conditional require statements of `configureStore.js` and `Root.js` - based on whether user is in development or production environments
 - [ ] Clean up Redux actions, reducers, constants
 - [ ] Add basic styles and enable webpack compilation of CSS/SASS
 - [ ] Provide additional documentation and example of pushing to production

### Style Guide

Code style can be a tricky subject - I've instead decided to rely on the ever trustworthy configurations that AirBnb follows!

This project relies on `eslint-config-airbnb`.
Learn more here: [AirBnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

### Credits

>This boilerplate is initially based on [@gaeron's](https://github.com/gaeron) awesome [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate).

This project supports [Babel 6](https://github.com/babel/babel), with reference implementations of:

 **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)**. It can be used as a boilerplate for quickly getting a new project up and running with a few useful transforms:

* [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr) - enables hot reloading react components
* [**react-transform-catch-errors**](https://github.com/gaearon/react-transform-catch-errors) - catches errors inside `render()`

For convenience they are packed in a single preset called [**react-transform-hmre**](https://github.com/danmartinez101/babel-preset-react-hmre) but you can make your own.

Syntax errors are displayed in an overlay using **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)**, which replaces Webpack Dev Server. This project **[does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.
