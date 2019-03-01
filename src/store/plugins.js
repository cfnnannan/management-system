const plugins = [];
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('vuex/dist/logger');
  plugins.push(createLogger({
    collapsed: false
  }));
}
export default plugins;