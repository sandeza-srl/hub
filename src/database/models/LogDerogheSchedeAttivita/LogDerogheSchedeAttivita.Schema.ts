import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILogDerogheSchedeAttivitaPrivate } from './LogDerogheSchedeAttivita.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogDerogheSchedeAttivitaSchema = new mongoose.Schema<ILogDerogheSchedeAttivitaPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdSchedaAttivita',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdLog',

},
__Dati_Data001: {
type: Date,
alias: 'DataInizioPreDeroga',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'GiorniDeroga',

},
__Dati_Testo003: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo004: {
type: String,
alias: 'TxtUtente',

},
__Dati_Data002: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'OraCreazione',

},
__Dati_Testo005: {
type: String,
alias: 'Note',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Data003: {
type: Date,
alias: 'DataInizioPostDeroga',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LogDerogheSchedeAttivitaSchema;