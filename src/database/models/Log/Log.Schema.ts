import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILogPrivate } from './Log.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogSchema = new mongoose.Schema<ILogPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdLog',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'IP',

},
__Dati_Testo004: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo005: {
type: String,
alias: 'TxtUtente',

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
__Dati_Testo006: {
type: String,
alias: 'Operazione',

},
__Dati_Testo007: {
type: String,
alias: 'CodiceDocContabile',

},
__Dati_Testo008: {
type: String,
alias: 'NuovoValore',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

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
export default LogSchema;