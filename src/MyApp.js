var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function MyApp() {
  var _React$useState = React.useState(2),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _React$useState3 = React.useState(1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      count = _React$useState4[0],
      setCount = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      sum = _React$useState6[0],
      setSum = _React$useState6[1];

  React.useEffect(function () {
    setSum(step + count);
    return function () {};
  }, [step, count]);
  return React.createElement(
    'section',
    { className: 'app' },
    React.createElement(
      'h1',
      null,
      'React'
    ),
    React.createElement(
      'h2',
      null,
      'How much will?'
    ),
    React.createElement(
      'p',
      null,
      count,
      ' + ',
      step
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        'Result: ',
        sum
      )
    ),
    React.createElement(
      'div',
      { className: 'math' },
      'Counter:',
      React.createElement(
        'button',
        {
          className: 'button minus',
          onClick: function onClick() {
            setCount(count - 1);
          }
        },
        '-1'
      ),
      React.createElement(
        'button',
        {
          className: 'button plus',
          onClick: function onClick() {
            setCount(count + 1);
          }
        },
        " ",
        '+1'
      )
    ),
    React.createElement(
      'div',
      { className: 'math' },
      'Step:',
      React.createElement(
        'button',
        {
          className: 'button minus',
          onClick: function onClick() {
            setStep(step - 2);
          }
        },
        " ",
        '-2'
      ),
      React.createElement(
        'button',
        {
          className: 'button plus',
          onClick: function onClick() {
            setStep(step + 2);
          }
        },
        " ",
        '+2'
      )
    )
  );
}

var container = document.getElementById("react-app");
var root = ReactDOM.createRoot(container);
root.render(React.createElement(MyApp, null));