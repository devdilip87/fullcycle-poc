// pages/graphql.js
import { useQuery, gql } from '@apollo/client';
import client from '../../apolloClient';
import CarList from '../../components/carList';

const GET_CARS = gql`
  {
    cars {
      id
      brand
      year
      model
    }
  }
`;

function CarListISR({ initialData }) {
  const { loading, error, data } = useQuery(GET_CARS, {
    client,
    initialData: { cars: initialData }, // Pass initial data from the server to prevent re-fetching
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cars = data.cars;

  return <CarList cars={cars}/>;
}

export async function getServerSideProps() {
  try {
    // Fetch initial data for the SSR page at build time
    const res = await fetch('http://localhost:4000/graphql', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: GET_CARS }),
    });

    const { data } = await res.json();

    // Check if data is undefined and handle accordingly
    if (!data) {
      return {
        props: {
          initialData: [], // Set initialData to an empty array or null as appropriate
        },
      };
    }

    return {
      props: {
        initialData: data.cars,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        initialData: null, // Handle errors by setting initialData to null or omitting it
      },
    };
  }
}

export default CarListISR;
