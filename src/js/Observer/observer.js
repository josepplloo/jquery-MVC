let changeListener = [];

/**
 * This function puts in the array
 * the functions you want to "make react".
 * @param {Function} callbackfunction 
 */
export function subscribe(callbackfunction) {
  changeListener.push(callbackfunction);
}

/**
 * While the data change, the functions "react". 
 * @param {Object} data 
 */
function publish(data) {
  changeListener.forEach((changeListener) => { changeListener(data); });
}