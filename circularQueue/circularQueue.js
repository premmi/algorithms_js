/**
 * A circular queue implementation in JavaScript.
 * @class CircularQueue
 * @constructor
 */
function CircularQueue(){

    /**
     * Refererence to the queue
     * @property _queue
     * @type Array
     * @private
     */
    this._queue = null;

    /**
     * Index of first item in the array.
     * @property _head
     * @type int
     * @private
     */
    this._head = null;

    /**
     * Index of last item in the array.
     * @property _tail
     * @type int
     * @private
     */
    this._tail = null;

    /**
     * The number of items in the array.
     * @property _length
     * @type int
     * @private
     */
    this._length = 0;
}

CircularQueue.prototype = (function(){

    /**
     * Private method to check whether data passed in
     * is an integer
     * @param {variant} data The data to be checked for integer
     * @return {boolean}
     * @method isInteger
     */
    var isInteger = function(data){

        var intRegex = /^-{0,1}\d+$/;

        if(intRegex.test(data)) {
            return true;
        }
    };

    return {

        //restore constructor
        constructor: CircularQueue,

            /**
             * Initialise the array to user defined length
             * @param {int} length The length of the array
             * @return {boolean}
             * @method  initialize
             */
        initialize: function(length){

            if(length < 1) {

                return false;
            }

            this._length = length;
            this._queue = new Array(length);
            this._head = 0;
            this._tail = 0;
            return true;
        },

        /**
         * Appends data to the end of the array, if queue is'
         * not full already
         * @param {variant} data The data to add to the queue.
         * @return {boolean}
         * @method enqueue
         */
        enqueue: function (data){

                     if(this._queue && isInteger(data) && !this._queue[this._tail]) {

                         this._queue[this._tail] = data;
                         this._tail = ( this._tail + 1 ) % this._length;

                         return true;
                     }

                     return false;
                 },

        /**
         * Removes data from the beginning of the array, if queue is'
         * not empty already
         * @return {int}
         * @method dequeue
         */
        dequeue: function (){

                     var value = null;

                     if(this._queue) {

                         value =  this._queue[this._head];
                         if(value) {
                             this._queue[this._head] = null;
                             this._head = ( this._head + 1 ) % this._length;
                         }

                     }

                     return value;
                 },

        /**
         * Clone the array and return it
         * @return {Array}
         * @method getQueue
         */
        getQueue: function (){

                      var cloneArray = new Array(this._length);
                      var index;

                      for(index = 0; index < this._length; index++) {
                          cloneArray[index] = this._queue[index];
                      }

                      return cloneArray;
                  },

        /**
         * Converts the array into a string representation.
         * @return {String} A string representation of the array.
         * @method toString
         */
        toString: function(){

                      return this._queue.toString();
                  }
    };

})();

