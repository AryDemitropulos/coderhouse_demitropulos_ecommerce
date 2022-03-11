const Conditional = ({ condition, children, elseElement = null }) => {
  return condition ? children : elseElement;
};

export default Conditional;
