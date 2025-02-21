import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILogAccessiPrivate } from './LogAccessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogAccessiSchema = new mongoose.Schema<ILogAccessiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo002: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo003: {
type: String,
alias: 'IdLog',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagAccesso',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagUscita',

},
__Dati_Data001: {
type: Date,
alias: 'Data',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'Ora',

},
__Dati_Testo004: {
type: String,
alias: 'TxtAccesso',

},
__Dati_Testo005: {
type: String,
alias: 'IdPostazione',

},
__Dati_Testo006: {
type: String,
alias: 'Fm_NomeUtente',

},
__Dati_Testo007: {
type: String,
alias: 'Postazione_Nome',

},
__Dati_Testo008: {
type: String,
alias: 'Postazione_IndirizzoIP',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LogAccessiSchema;