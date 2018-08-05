import axe from 'axe-core';
import { findDOMNode } from 'react-dom';
import { mount } from 'enzyme';

export function testA11y(component, config) {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const wrapper = mount(component, { attachTo: div });
    const node = findDOMNode(wrapper.component);

    const originalNode = global.Node;
    global.Node = node.ownerDocument.defaultView.Node;

    axe.run(node, config, (err, results) => {
      global.Node = originalNode;
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });

    document.body.removeChild(div);
  });
}
