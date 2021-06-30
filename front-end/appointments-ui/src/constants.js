const SERVER = process.env.REACT_APP_SERVER;

export const APP_NAME = 'Appointments';
export const AUTH_ENDPOINT = `${SERVER}/oauth/token`;
export const API_ENDPOINT = `${SERVER}`;
export const JWT_TOKEN_NAME = 'jwt';

// export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'appointments';
// export const CLIENT_SECRET =  process.env.REACT_APP_CLIENT_SECRET ?? 'appointments';
export const CLIENT_ID = 'appointments';
export const CLIENT_SECRET = 'appointments';
