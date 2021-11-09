# Parcel Widget Example

This project contains an example of how to build a component in react with Parcel2 that can be embedded as a global script in other, non-react pages.

It's a response to [this stackoverflow question](https://stackoverflow.com/questions/69894366/css-does-not-load-in-react-widget-built-with-parcel).

## Test Instructions
1. Run `yarn` to install dependencies
2. Run `yarn build:widget` to build the react code with parcel. This will output a `.css` and .`js` file to `test-consumer/dist-widget` folder.
3. Run `yarn serve` to serve `test-consumer/index.html` at http://localhost:8080. This page is vanilla html that embeds the build `.js` and `.css` files built in step #2