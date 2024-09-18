import { useReducer } from 'react';
import { counterReducer, initialState } from './reducer';

const Component = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: 0</h2>
      <h2>Status: Active</h2>
      <div className="btn-container">
        <button onClick={() => console.log('increment')} className="btn">
          increment
        </button>
        <button onClick={() => console.log('decrement')} className="btn">
          decrement
        </button>
        <button onClick={() => console.log('reset')} className="btn">
          reset
        </button>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => console.log('set status to active')}
        >
          set status to active
        </button>
        <button
          className="btn"
          onClick={() => console.log('set status to inactive')}
        >
          set status to inactive
        </button>
      </div>
    </div>
  );
};

export default Component;
