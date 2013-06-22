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
     * Return empty function.
     * @return {Function}
     */
    returnEmptyFunction: function() {
        return function() {};
    },

    /** 
     * Return date.
     * @return {Date}
     */
    returnDate: function() {
        return new Date();
    },

    /** 
     * Return <code>this</code>.
     * @return {Object}
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
