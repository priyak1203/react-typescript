import { ThemeProvider, useTheme } from './context';

const ParentComponent = () => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

const Component = () => {
  const context = useTheme();
  console.log(context);

  return (
    <div>
      <h2>Context API</h2>
    </div>
  );
};

export default ParentComponent;
