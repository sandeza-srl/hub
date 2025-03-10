import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAccessiWebPrivate } from './AccessiWeb.Types.Private';


/* --------
* Schema Definition
* -------- */
const AccessiWebSchema = new mongoose.Schema<IAccessiWebPrivate>({

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
alias: 'IdAccessoWeb',

},
__Dati_Testo002: {
type: String,
alias: 'NomeUtente',

},
__Dati_Testo003: {
type: String,
alias: 'Password',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Data001: {
type: Date,
alias: 'DataScadenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo004: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo005: {
type: String,
alias: 'IdRubrica',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo008: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AccessiWebSchema;