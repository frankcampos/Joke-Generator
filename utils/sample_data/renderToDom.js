const renderToDom = (div, html) => {
  document.querySelector(div).innerHTML = html;
};

export default renderToDom;
