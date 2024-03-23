import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
     { ID: 1, Name: 'jeevna', Age: 19 },
     { ID: 2, Name: 'sahithya', Age: 18 },
     { ID: 3, Name: 'sunny', Age: 20 },
     { ID: 4, Name: 'Rahul', Age: 23 },
     { ID: 5, Name: 'Kumar', Age: 21 },
  ];
  return (
     <div>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
           Array of Objects - Table View
        </h1> 
        <TableView data={data} />
     </div>
  );
};
export default App;