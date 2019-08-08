import printMe from './print.js'
import './styles.css'
import { cube } from './math.js';


function component() {
  let element = document.createElement('pre');

  var btn = document.createElement('button');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is qual to ' + cube(5)
  ].join('\n\n');

  return element;
}

let element = component();

document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to  update the click handler
    document.body.appendChild(element); 
  })
}