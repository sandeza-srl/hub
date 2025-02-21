import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMailTipiDocOperativiPrivate } from './MailTipiDocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const MailTipiDocOperativiSchema = new mongoose.Schema<IMailTipiDocOperativiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'Lingua',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

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
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'InvioCC',

},
__Dati_Testo005: {
type: String,
alias: 'InvioCCN',

},
__Dati_Testo006: {
type: String,
alias: 'OggettoComunicazione',

},
__Dati_Testo007: {
type: String,
alias: 'TestoComunicazione',

},
__Dati_Testo008: {
type: String,
alias: 'IdMailTipoDocOperativo',

},
__Dati_Testo009: {
type: String,
alias: 'QrCode',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo011: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MailTipiDocOperativiSchema;