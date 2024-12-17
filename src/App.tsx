import React from 'react';
import Calculator from './Calculator';

const App: React.FC = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
            <h1>Black Ops 6 - Terminus Equation Calculator</h1>
        </div>
        <div className="flex justify-center items-center">
            <Calculator></Calculator>
        </div>
    </div>
  );
};

export default App;
