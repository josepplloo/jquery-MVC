const Observer = (
  function () {
    let changeListener = [];
    let data = {};

    const getData = function () {
      return data;
    }

    const setData = function (key, value) {
      return data[key]= value;
    }

    /*
     * This function puts in the array
     * the functions you want to "make react".
     * @param {Function} callbackfunction 
     */
    const subscribe = function subscribe(callbackfunction) {
      changeListener.push(callbackfunction);
    }

    /**
     * While the data change, the functions "react". 
     * @param {Object} data 
     */
    function publish() {
      changeListener.forEach((changeListener) => { changeListener(data); });
    }

    return {
      subscribe,
      publish,
      getData,
      setData
    }
  }
)();