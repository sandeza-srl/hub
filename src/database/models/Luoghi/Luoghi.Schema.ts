import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILuoghiPrivate } from './Luoghi.Types.Private';


/* --------
* Schema Definition
* -------- */
const LuoghiSchema = new mongoose.Schema<ILuoghiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdLuogo',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'TxtLuogo',

},
__Dati_Numero002: {
type: Number,
alias: 'MinOperatori',

},
__Dati_Numero003: {
type: Number,
alias: 'MaxOperatori',

},
__Dati_Testo003: {
type: String,
alias: 'DescrizioneUbicazione',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagMinOperatori',

},
__Dati_Testo004: {
type: String,
alias: 'FlagMinOperatoriVedi',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagMaxOperatori',

},
__Dati_Testo005: {
type: String,
alias: 'FlagMaxOperatoriVedi',

},
__Dati_Numero006: {
type: Number,
alias: 'Ordine',

},
__Dati_Ora001: {
type: String,
alias: 'TempoPreparazione',

},
__Dati_Ora002: {
type: String,
alias: 'TempoRipristino',

},
__Dati_Testo006: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo007: {
type: String,
alias: 'TxtReparto',

},
__Dati_Numero007: {
type: Number,
alias: 'GiornoLunedi',

},
__Dati_Numero008: {
type: Number,
alias: 'GiornoMartedi',

},
__Dati_Numero009: {
type: Number,
alias: 'GiornoMercoledi',

},
__Dati_Numero010: {
type: Number,
alias: 'GiornoGiovedi',

},
__Dati_Numero011: {
type: Number,
alias: 'GiornoVenerdi',

},
__Dati_Numero012: {
type: Number,
alias: 'GiornoSabato',

},
__Dati_Numero013: {
type: Number,
alias: 'GiornoDomenica',

},
__Dati_Testo008: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero014: {
type: Number,
alias: 'Zero',

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
__Dati_Testo009: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LuoghiSchema;