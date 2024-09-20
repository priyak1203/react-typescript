const Component = () => {
  return (
    <div>
      <h2>Count : 0</h2>
      <h2>Status : Pending</h2>

      <div className="btn-container">
        <button className="btn" onClick={() => console.log('Increment')}>
          increment
        </button>
        <button className="btn" onClick={() => console.log('Decrement')}>
          decrement
        </button>
        <button className="btn" onClick={() => console.log('Reset')}>
          reset
        </button>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => console.log('Active')}>
          set status to active
        </button>
        <button className="btn" onClick={() => console.log('Inactive')}>
          set status to inactive
        </button>
      </div>
    </div>
  );
};

export default Component;
