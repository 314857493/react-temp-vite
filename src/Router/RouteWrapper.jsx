let tmp = null;

const RouteWrapper = ({ element, title }) => {
  document.title = title;
  if (tmp == element) return tmp;

  tmp = element;
  return element;
};

export default RouteWrapper;
