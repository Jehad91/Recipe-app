/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const createElement = (selctor, textNode, attribute, attributeValue) => {
  const element = document.createElement(selctor);
  element.setAttribute(attribute, attributeValue);
  element.append(document.createTextNode(textNode));
  return element;
};
