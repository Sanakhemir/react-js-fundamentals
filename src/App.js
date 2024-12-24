
import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';



function App() {

  const firstName = "Sana";

  return (
    <div>
      <div>
        <Name />
        <Price />
        <Image />
        <Description />
      </div>

      <div>
        <h4>{`Bonjour, ${firstName}!`}</h4>
      </div>
    </div>
  );
}

export default App;
