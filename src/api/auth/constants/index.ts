/**
 * The ADMIN_KEY constant string will be used in
 * AdminGuard Guard file to check if the provided
 * authorization key is correct or not
 */
export const ADMIN_KEY = 'CBD27658832B6C5ED150ED475F0450B3A94CDFCC4B9CF7C950A7ED1044EC56B9';


/**
 * The ADMIN_KEY_HEADER_NAME will be used in AdminGuard
 * canActivate implementation to try to extract the AdminKey
 * from the request headers
 */
export const ADMIN_KEY_HEADER_NAME = 'X-AdminKey';


/**
 * The ADMIN_KEY_HEADER_NAME will be used in AdminGuard
 * canActivate implementation to try to extract the AdminKey
 * from the request search params
 */
export const ADMIN_KEY_QUERY_PARAM = 'adminKey';
