import { Request } from 'express';

import {
  ADMIN_KEY,
  ADMIN_KEY_HEADER_NAME,
  ADMIN_KEY_QUERY_PARAM
} from '../constants';


/**
 * Use this function, providing and HttpRequest to check
 * if it contains a valid AdminKey
 * @param request
 * @returns true if the admin key exists and is valid
 */
export function hasValidAdminKey(request: Request): boolean {
  return (request.header(ADMIN_KEY_HEADER_NAME) || request.query[ADMIN_KEY_QUERY_PARAM]?.toString()) === ADMIN_KEY;
}
