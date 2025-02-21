import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IClassiMerceologichePrivate } from './ClassiMerceologiche.Types.Private';


/* --------
* Schema Definition
* -------- */
const ClassiMerceologicheSchema = new mongoose.Schema<IClassiMerceologichePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdClasseMerceologica',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'TxtClasseMerceologica',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo005: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ClassiMerceologicheSchema;