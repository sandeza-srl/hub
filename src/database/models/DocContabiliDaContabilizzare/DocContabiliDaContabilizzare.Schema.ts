import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDocContabiliDaContabilizzarePrivate } from './DocContabiliDaContabilizzare.Types.Private';


/* --------
* Schema Definition
* -------- */
const DocContabiliDaContabilizzareSchema = new mongoose.Schema<IDocContabiliDaContabilizzarePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdDocContabiliDaContabilizzare',

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
__Dati_Testo002: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DocContabiliDaContabilizzareSchema;