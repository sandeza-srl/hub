import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISessioniAppuntamentiPrivate } from './SessioniAppuntamenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const SessioniAppuntamentiSchema = new mongoose.Schema<ISessioniAppuntamentiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'IdRubrica',

},
__Dati_Numero002: {
type: Number,
alias: 'IdSessioneAppuntamento',

},
__Dati_Testo001: {
type: String,
alias: 'NomeRubrica',

},
__Dati_Numero003: {
type: Number,
alias: 'Uno',

},
__Dati_Numero004: {
type: Number,
alias: 'IdUtente',

},
__Dati_Testo002: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero005: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SessioniAppuntamentiSchema;