import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFileZProductionPrivate } from './FileZProduction.Types.Private';


/* --------
* Schema Definition
* -------- */
const FileZProductionSchema = new mongoose.Schema<IFileZProductionPrivate>({

_id: {
type: String,
default: uuid.v4
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
__Dati_Testo001: {
type: String,
alias: 'NomeFile',

},
__Dati_Testo002: {
type: String,
alias: 'StrutturaTabelle',

},
__Dati_Testo003: {
type: String,
alias: 'NomiChiavi',

},
__Dati_Testo004: {
type: String,
alias: 'AccountCreazione',

},
__Dati_Testo005: {
type: String,
alias: 'AccountUltimaModifica',

},
__Dati_Numero001: {
type: Number,
alias: 'FlagJSONStrutturaTabelleValido',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagJSONNomiChiaviValido',

},
__Dati_Testo006: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo007: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo008: {
type: String,
alias: 'TxtUtente',

},
__Dati_Numero003: {
type: Number,
alias: 'ScaricamentoDati_Validita',

},
__Dati_Numero004: {
type: Number,
alias: 'Uno',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FileZProductionSchema;