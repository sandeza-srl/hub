import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { INoteReleasePrivate } from './NoteRelease.Types.Private';


/* --------
* Schema Definition
* -------- */
const NoteReleaseSchema = new mongoose.Schema<INoteReleasePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdNotaRelease',

},
__Dati_Testo002: {
type: String,
alias: 'TxtNotaRelease',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Data001: {
type: Date,
alias: 'DataNotaRelease',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'FlagCriticitaPresenti',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagNuova',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default NoteReleaseSchema;