import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (number) {
      str += "0123456789";
    }
    if (specialChar) {
      str += "!@#$%^&*()~`:'/?#[]{0,61}~`" //;
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, specialChar, number, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, specialChar, number, setPassword]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Password Generator</h1>
        
        <div className="space-y-4">
          {/* Password Display */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={password}
              placeholder="password"
              readOnly
              className="flex-grow p-2 border rounded-lg bg-gray-50 text-gray-700"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Copy
            </button>
          </div>

          {/* Length Slider */}
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="length" className="text-gray-700">Length: {length}</label>
              <input
                type="range"
                id="length"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-2/3"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <div className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="numbers"
                checked={number}
                onChange={() => setNumber(!number)}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="numbers" className="text-gray-700 cursor-pointer">Include Numbers</label>
            </div>
            <div className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="chars"
                checked={specialChar}
                onChange={() => setSpecialChar(!specialChar)}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="chars" className="text-gray-700 cursor-pointer">Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
