import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMailTipiProcessiPrivate } from './MailTipiProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const MailTipiProcessiSchema = new mongoose.Schema<IMailTipiProcessiPrivate>({

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
alias: 'IdTipoProcesso',

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
alias: 'Mail_CC',

},
__Dati_Testo005: {
type: String,
alias: 'Mail_CCN',

},
__Dati_Testo006: {
type: String,
alias: 'Mail_Oggetto',

},
__Dati_Testo007: {
type: String,
alias: 'Mail_Corpo',

},
__Dati_Testo008: {
type: String,
alias: 'IdMailTipoProcesso',

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
alias: 'IdTipiStepProcessi',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagMailInterna',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagMailEsterna',

},
__Dati_Testo012: {
type: String,
alias: 'Mail_A',

},
__Dati_Testo013: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MailTipiProcessiSchema;