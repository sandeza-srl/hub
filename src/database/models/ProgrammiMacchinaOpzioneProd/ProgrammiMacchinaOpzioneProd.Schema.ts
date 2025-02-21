import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IProgrammiMacchinaOpzioneProdPrivate } from './ProgrammiMacchinaOpzioneProd.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProgrammiMacchinaOpzioneProdSchema = new mongoose.Schema<IProgrammiMacchinaOpzioneProdPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdProgrammaMacchina',

},
__Dati_Testo002: {
type: String,
alias: 'TxtProgrammaMacchina',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'IdUtenteCreazione',

},
__Dati_Testo004: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Testo005: {
type: String,
alias: 'IdDocImgProgrammaMacchina',

},
__Dati_Numero001: {
type: Number,
alias: 'NumeroRevisione',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagRevisioneAttiva',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagBenestare',

},
__Dati_Data001: {
type: Date,
alias: 'DataBenestare',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo006: {
type: String,
alias: 'IdUtenteBenestare',

},
__Dati_Testo007: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo008: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo009: {
type: String,
alias: 'TxtUtenteBenestare',

},
__Dati_Testo010: {
type: String,
alias: 'Note',

},
__Dati_Numero004: {
type: Number,
alias: 'Uno',

},
__Dati_Numero005: {
type: Number,
alias: 'Zero',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo011: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Contenitore001: {
type: String,
alias: 'FileZipDocumenti',

},
__Dati_Contenitore002: {
type: String,
alias: 'Contenitore_TEMP',

},
__Dati_Testo012: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo013: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo014: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo015: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProgrammiMacchinaOpzioneProdSchema;