import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IValoriValutePrivate } from './ValoriValute.Types.Private';


/* --------
* Schema Definition
* -------- */
const ValoriValuteSchema = new mongoose.Schema<IValoriValutePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'ConversioneValutaSuPrincipale',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'IdValuta',

},
__Dati_Numero003: {
type: Number,
alias: 'ConversioneValutaAPrincipale',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Data001: {
type: Date,
alias: 'DataValore',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
alias: 'IdValoreValuta',

},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'SimboloValuta',

},
__Dati_Testo005: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo006: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ValoriValuteSchema;