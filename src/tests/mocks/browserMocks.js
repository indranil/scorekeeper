// Mocking for localStorage
// https://github.com/facebook/jest/issues/2098

var localStorageMock = (function() {
  var store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

var confirmMock = function(msg) {
  // just returning true here...
  return true;
};

Object.defineProperty(window, 'localStorage', {
     value: localStorageMock
});

Object.defineProperty(window, 'confirm', {
     value: confirmMock
});
