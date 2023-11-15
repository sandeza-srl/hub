import * as mongoose from 'mongoose';

import ApiGateway_EndpointSchema from './ApiGateway_Endpoint.Schema';
import type { IApiGateway_Endpoint } from './ApiGateway_Endpoint.Types';


/* --------
* Model Definition
* -------- */
const ApiGateway_Endpoint = mongoose.model<IApiGateway_Endpoint>(
  'ApiGateway_Endpoint',
  ApiGateway_EndpointSchema as any
) as mongoose.Model<IApiGateway_Endpoint>;

/* --------
* Module Exports
* -------- */
export default ApiGateway_Endpoint;

export { ApiGateway_EndpointSchema };

export type TApiGateway_EndpointModel = Omit<typeof ApiGateway_Endpoint, 'traslateAliases'> & {
  translateAliases(raw: Partial<IApiGateway_Endpoint>): any
};

export type TApiGateway_EndpointDocument = 
& mongoose.Document<any, {}, IApiGateway_Endpoint>
& IApiGateway_Endpoint;

export { IApiGateway_Endpoint };