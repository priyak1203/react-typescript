import { useAppDispatch, useAppSelector } from '../hooks';
import { decrement, increment, reset, setStatus } from './counterSlice';

const Component = () => {
  const { count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Status : {status}</h2>

      <div className="btn-container">
        <button className="btn" onClick={() => dispatch(increment())}>
          increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => dispatch(setStatus('active'))}>
          set status to active
        </button>
        <button className="btn" onClick={() => dispatch(setStatus('inactive'))}>
          set status to inactive
        </button>
      </div>
    </div>
  );
};

export default Component;
