export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  VERIFY: '/auth/verify',
  LOGOUT: '/auth/logout',
} as const; 

export const AUTH_RESPONSE = {
  SUCCESS: 'success',
  ERROR: 'error',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
  INTERNAL_SERVER_ERROR: 'internal_server_error',
  BAD_REQUEST: 'bad_request',
  UNPROCESSABLE_ENTITY: 'unprocessable_entity',
  TOKEN_EXPIRED: 'token_expired',
} as const;