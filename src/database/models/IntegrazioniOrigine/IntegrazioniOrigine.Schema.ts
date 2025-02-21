import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IIntegrazioniOriginePrivate } from './IntegrazioniOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const IntegrazioniOrigineSchema = new mongoose.Schema<IIntegrazioniOriginePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdIntegrazione',

},
__Dati_Testo002: {
type: String,
alias: 'IdInstallazione',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'TxtIntegrazione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'PrintNode_EndPointRicavaListaStampanti',

},
__Dati_Testo005: {
type: String,
alias: 'PrintNode_EndPointEseguiRichiesta',

},
__Dati_Testo006: {
type: String,
alias: 'PrintNode_APIEndPoint3',

},
__Dati_Testo007: {
type: String,
alias: 'Slider_Html',

},
__Dati_Testo008: {
type: String,
alias: 'Timeline_Html',

},
__Dati_Testo009: {
type: String,
alias: 'Calendar_Html',

},
__Dati_Testo010: {
type: String,
alias: 'ApiGateway_Token',

},
__Dati_Testo011: {
type: String,
alias: 'ApiGateway_EndpointTrasmissioneRecord',

},
__Dati_Testo012: {
type: String,
alias: 'GoogleApiKey',

},
__Dati_Testo013: {
type: String,
alias: 'DropZone_Html',

},
__Dati_Contenitore001: {
type: String,
alias: 'QRCode',

},
__Dati_Testo014: {
type: String,
alias: 'Launcher_DownloadLink',

},
__Dati_Testo015: {
type: String,
alias: 'Launcher_UltimaVersione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default IntegrazioniOrigineSchema;