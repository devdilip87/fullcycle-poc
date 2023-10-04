import CarList from '../../components/carList';

// pages/graphql-csr.js
import { useQuery, gql } from '@apollo/client';
import client from '../../apolloClient';

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

function GraphQLCSRPage() {
  const { loading, error, data } = useQuery(GET_CARS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cars = data.cars;

  return <CarList cars={cars}/>;
};

export default GraphQLCSRPage;

