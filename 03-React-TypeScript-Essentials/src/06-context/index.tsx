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
      <button
        onClick={() => {
          if (context.theme === 'dark') {
            context.setTheme('system');
            return;
          }
          context.setTheme('dark');
        }}
        className="btn btn-center"
      >
        toggle theme
      </button>
    </div>
  );
};

export default ParentComponent;
