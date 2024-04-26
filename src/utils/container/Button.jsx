import styled, { css } from 'styled-components';

// Define your styled button component
const StyledButton = styled.button.attrs(props => ({
  variant: props.variant || 'default',
  size: props.size || 'medium'
}))`
  padding: ${props => getSize(props.size).padding};
  font-size: ${props => getSize(props.size).fontSize};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Default button style */
  background-color: ${props => getVariant(props.variant).backgroundColor};
  color: ${props => getVariant(props.variant).color};
  border: none;

  &:hover {
    background-color: ${props =>
      darken(0.1, getVariant(props.variant).backgroundColor)};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Helper functions to determine size and variant
const getSize = size => {
  switch (size) {
    case 'small':
      return { padding: '5px 10px', fontSize: '12px' };
    case 'large':
      return { padding: '15px 30px', fontSize: '20px' };
    default:
      return { padding: '10px 20px', fontSize: '16px' };
  }
};

const getVariant = variant => {
  switch (variant) {
    case 'primary':
      return { backgroundColor: '#007bff', color: '#fff' };
    case 'secondary':
      return { backgroundColor: '#6c757d', color: '#fff' };
    default:
      return { backgroundColor: '#007bff', color: '#fff' };
  }
};

const MyButton = ({ onClick, disabled, variant, size, children }) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    variant={variant}
    size={size}
  >
    {children}
  </StyledButton>
);

function App() {
  return (
    <div>
      <MyButton
        onClick={() => console.log('Button clicked!')}
        variant="primary"
        size="large"
      >
        Click Me
      </MyButton>
      <MyButton
        onClick={() => console.log('Button clicked!')}
        variant="secondary"
        size="small"
      >
        Click Me Too
      </MyButton>
    </div>
  );
}

export default App;
