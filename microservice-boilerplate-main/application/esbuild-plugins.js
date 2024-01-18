/* eslint-disable @typescript-eslint/no-var-requires */
const { esbuildDecorators } = require('@anatine/esbuild-decorators');

// default export should be an array of plugins
module.exports = [esbuildDecorators()];
