import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISchedeValutazionePrivate } from './SchedeValutazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const SchedeValutazioneSchema = new mongoose.Schema<ISchedeValutazionePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipoSchedaValutazione',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoSchedaValutazione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'IdSchedaValutazione',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo005: {
type: String,
alias: 'TxtAccount',

},
__Dati_Data001: {
type: Date,
alias: 'DataRegistrazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo006: {
type: String,
alias: 'TxtUtente',

},
__Dati_Data002: {
type: Date,
alias: 'DataCompilazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data003: {
type: Date,
alias: 'DataScadenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'FlagScaduta',

},
__Dati_Testo007: {
type: String,
alias: 'Note',

},
__Dati_Testo008: {
type: String,
alias: 'IdDocumentoCollegato',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountOperatoreEsecutore',

},
__Dati_Testo010: {
type: String,
alias: 'ValutazioneComplessiva',

},
__Dati_Testo011: {
type: String,
alias: 'IdTipoParametroValutazione',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo013: {
type: String,
alias: 'NoteValutazione',

},
__Dati_Testo014: {
type: String,
alias: 'IdInstallazione',

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
export default SchedeValutazioneSchema;