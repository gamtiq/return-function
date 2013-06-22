
/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module.exports) {
    module.exports = {};
    module.client = module.component = true;
    module.call(this, module.exports, require.relative(resolved), module);
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("return-function/index.js", function(exports, require, module){
/** @module return-function */

/** @private */
function emptyFunc() {};

/** @private */
function returnThis() {
    return this;
}

module.exports = {
    /** 
     * Empty function.
     * @return {undefined}
     */
    emptyFunction: emptyFunc,

    /** 
     * Return <code>undefined</code>.
     * @return {undefined}
     */
    returnUndefined: emptyFunc,

    /** 
     * Return <code>null</code>.
     * @return {null}
     */
    returnNull: function() {
        return null;
    },

    /** 
     * Return <code>true</code>.
     * @return {boolean}
     */
    returnTrue: function() {
        return true;
    },

    /** 
     * Return <code>false</code>.
     * @return {boolean}
     */
    returnFalse: function() {
        return false;
    },

    /** 
     * Return empty string.
     * @return {string}
     */
    returnEmptyStr: function() {
        return "";
    },

    /** 
     * Return <code>NaN</code>.
     * @return {NaN}
     */
    returnNaN: function() {
        return NaN;
    },

    /** 
     * Return <code>0</code>.
     * @return {number}
     */
    returnZero: function() {
        return 0;
    },

    /** 
     * Return <code>1</code>.
     * @return {number}
     */
    returnOne: function() {
        return 1;
    },

    /** 
     * Return empty object.
     * @return {Object}
     */
    returnEmptyObject: function() {
        return {};
    },

    /** 
     * Return empty array.
     * @return {Array}
     */
    returnEmptyArray: function() {
        return [];
    },

    /** 
     * Return date.
     * @return {Array}
     */
    returnDate: function() {
        return new Date();
    },

    /** 
     * Return empty function.
     * @return {Function}
     */
    returnEmptyFunction: function() {
        return function() {};
    },

    /** 
     * Return <code>this</code>.
     * @return {object}
     */
    returnThis: returnThis,

    /** 
     * Return global object.
     * @return {object}
     */
    returnGlobal: function() {
        return returnThis.call(null);
    },

    /** 
     * Return the first argument (parameter).
     * 
     * @param a
     *          Argument of any type.
     * @return The first argument (<code>a</code>).
     */
    returnFirstArg: function(a) {
        return a;
    },

    /** 
     * Return the second argument (parameter).
     * 
     * @param a
     *          Argument of any type.
     * @param b
     *          Argument of any type.
     * @return The second argument (<code>b</code>).
     */
    returnSecondArg: function(a, b) {
        return b;
    },

    /** 
     * Return array of arguments.
     * 
     * @return {Array}
     *          Array of arguments.
     */
    returnArgList: function() {
        return Array.prototype.slice.call(arguments, 0);
    }
};

});
require.alias("return-function/index.js", "return-function/index.js");

