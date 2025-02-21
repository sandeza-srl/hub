import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IApiGateway_EndpointPrivate } from './ApiGateway_Endpoint.Types.Private';


/* --------
* Schema Definition
* -------- */
const ApiGateway_EndpointSchema = new mongoose.Schema<IApiGateway_EndpointPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo001: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo002: {
type: String,
alias: 'IdEndpoint',

},
__Dati_Testo003: {
type: String,
alias: 'Endpoint',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagStandard',

},
__Dati_Numero004: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo004: {
type: String,
alias: 'QueryParams',

},
__Dati_Testo005: {
type: String,
alias: 'Header',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagEliminazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ApiGateway_EndpointSchema;