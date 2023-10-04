// pages/graphql-isr.js
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
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

function GraphQLISRPage({ initialData }) {
  const { data: serverData } = useQuery(GET_CARS, { client, initialData });

  const [cars, setCars] = useState(serverData ? serverData.cars : []);

  useEffect(() => {
    // Fetch updated data on the client side
    client.query({ query: GET_CARS })
      .then((response) => {
        setCars(response.data.cars);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return <CarList cars={cars}/>;
}

export async function getStaticProps() {
  try {
    const { data } = await client.query({ query: GET_CARS });

    return {
      props: {
        initialData: data.cars,
      },
      revalidate: 60, // Regenerate the page every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        initialData: [],
      },
      revalidate: 60, // Regenerate the page every 60 seconds
    };
  }
}

export default GraphQLISRPage;

