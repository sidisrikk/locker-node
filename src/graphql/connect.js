import { GraphQLClient } from 'graphql-request';
import config from '../config/loadenv';


const endpoint = 'http://localhost:4000';
const client = new GraphQLClient(endpoint, { 'headers': {} });


const mutateFreeUnit = (unitNo) => {
  const query = /* GraphQL */ `
  mutation setFreeUnit($locker_no: Int!,$unit_no: Int!) {
    freeUnit(locker_no:$locker_no,unit_no:$unit_no){
      ok
    }
  }
  `;
  const variables = {
    'locker_no': config.LOCKER_NO,
    'unit_no': unitNo,
  };
  client.request(query, variables);
};

const mutateReserveUnit = (unitNo) => {
  const query = /* GraphQL */ `
  mutation setReserveUnit($locker_no: Int!,$unit_no: Int!) {
    reserveUnit(locker_no:$locker_no,unit_no:$unit_no){
      ok
    }
  }
  `;
  const variables = {
    'locker_no': config.LOCKER_NO,
    'unit_no': unitNo,
  };
  client.request(query, variables);
};

export { mutateFreeUnit, mutateReserveUnit };
