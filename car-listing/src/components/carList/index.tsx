import React from 'react';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return(
    <div data-testid='accounts-table' className=''>
      <table className='row table'>
        <thead>
            <tr>
              <td onClick={()=>sort('accNo')}>Id</td>
              <td onClick={()=>sort('accName')}>brand</td>
              <td onClick={()=>sort('accType')}>Model</td>
              <td onClick={()=>sort('balance')}>Year</td>
            </tr>
        </thead>
        <tbody>
            {cars && cars.map((car, i) => (
              <tr key={i}>
                  <td>{car.id}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
