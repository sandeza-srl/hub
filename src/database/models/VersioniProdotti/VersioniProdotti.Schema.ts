import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVersioniProdottiPrivate } from './VersioniProdotti.Types.Private';


/* --------
* Schema Definition
* -------- */
const VersioniProdottiSchema = new mongoose.Schema<IVersioniProdottiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdProdotto',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'FilesModificati',

},
__Dati_Testo003: {
type: String,
alias: 'NoteInterne',

},
__Dati_Testo004: {
type: String,
alias: 'Versione',

},
__Dati_Data001: {
type: Date,
alias: 'Data',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo005: {
type: String,
alias: 'Autore',

},
__Dati_Testo006: {
type: String,
alias: 'NoteCommerciali',

},
__Dati_Contenitore001: {
type: String,
alias: 'Documento01',

},
__Dati_Contenitore002: {
type: String,
alias: 'Documento02',

},
__Dati_Contenitore003: {
type: String,
alias: 'Documento03',

},
__Dati_Contenitore004: {
type: String,
alias: 'Documento04',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagDaPubblicare',

},
__Dati_Numero003: {
type: Number,
alias: 'Progressivo',

},
__Dati_Numero004: {
type: Number,
alias: 'VersioneFm',

},
__Dati_Numero005: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
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
__Dati_Testo008: {
type: String,
alias: 'IdVersioneProdotto',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VersioniProdottiSchema;