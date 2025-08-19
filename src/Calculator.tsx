import React, { useState } from 'react';

type VariableOption = {
  value: number;
  imgSrc: string;
  altText: string;
};

type VariableProps = {
  variableName: string;
  options: VariableOption[];
  onSelect: (variable: string, value: number) => void;
  selectedValue: number | null;
};

const Variable: React.FC<VariableProps> = ({ variableName, options, onSelect, selectedValue }) => {
  return (
    <div className="variable" id={`${variableName}-variables`}>
      <h2>{variableName.toUpperCase()}:</h2>
      {options.map((option, index) => (
        <div 
          key={index} 
          className={`image ${selectedValue === option.value ? 'selected' : ''}`} 
          onClick={() => onSelect(variableName, option.value)}
        >
          <img src={option.imgSrc} alt={option.altText} />
        </div>
      ))}
    </div>
  );
};

const Calculator: React.FC = () => {
  // Track selected values for each variable (x, y, z)
  const [selectedValues, setSelectedValues] = useState<Record<string, number | null>>({
    x: null,
    y: null,
    z: null,
  });

  // Function to handle selection of a variable
  const handleSelectVariable = (variable: string, value: number) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [variable]: value
    }));
    console.log(`Selected ${variable} with value: ${value}`);
  };

  // Function to reset all selected values
  const handleReset = () => {
    setSelectedValues({ x: null, y: null, z: null });
    console.log('All values reset');
  };

  // Calculation logic 
  const calculateFirstResult = () => {
    const { x, y, z } = selectedValues;
    if (x !== null) {
      return Math.abs(2*x + 11);
    }
    return 'Please select an X value';
  };

  const calculateSecondResult = () => {
    const { x, y, z } = selectedValues;
    if (y !== null && z !== null) {
      return Math.abs((2*z + y) -5);
    }
    return 'Please select Z and Y values';
  };

  const calculateThirdResult = () => {
    const { x, y, z } = selectedValues;
    if (x !== null && y !== null && z !== null) {
      return Math.abs(y + z - x);
    }
    return 'Please select X, Y and Z values';
  };

  const variableOptions: VariableOption[] = [
    { value: 0, imgSrc: '/public/0.jpg', altText: 'Value 0' },
    { value: 10, imgSrc: '/public/10.jpg', altText: 'Value 10' },
    { value: 11, imgSrc: '/public/11.jpg', altText: 'Value 11' },
    { value: 20, imgSrc: '/public/20.jpg', altText: 'Value 20' },
    { value: 21, imgSrc: '/public/21.jpg', altText: 'Value 21' },
    { value: 22, imgSrc: '/public/22.jpg', altText: 'Value 22' },
  ];

  return (
    <div>
      <Variable 
        variableName="x" 
        options={variableOptions} 
        onSelect={handleSelectVariable} 
        selectedValue={selectedValues.x} 
      />
      <Variable 
        variableName="y" 
        options={variableOptions} 
        onSelect={handleSelectVariable} 
        selectedValue={selectedValues.y} 
      />
      <Variable 
        variableName="z" 
        options={variableOptions} 
        onSelect={handleSelectVariable} 
        selectedValue={selectedValues.z} 
      />
      
      <div className="calculation-section">
        <h2>Calculation Result</h2>
        <p>1st Number: <strong>{calculateFirstResult()}</strong></p>
        <p>2st Number: <strong>{calculateSecondResult()}</strong></p>
        <p>3st Number: <strong>{calculateThirdResult()}</strong></p>
      </div>

      <button onClick={handleReset} className="reset-button custom-button text-white font-bold py-2 px-4 rounded">
        Reset
      </button>
    </div>
  );
};

export default Calculator;
