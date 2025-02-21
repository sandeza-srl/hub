import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAttivitaStandardPrivate } from './AttivitaStandard.Types.Private';


/* --------
* Schema Definition
* -------- */
const AttivitaStandardSchema = new mongoose.Schema<IAttivitaStandardPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipologiaAttivita',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'ClassificazioneAttivita',

},
__Dati_Testo003: {
type: String,
alias: 'Note',

},
__Dati_Numero002: {
type: Number,
alias: 'Ordine',

},
__Dati_Numero003: {
type: Number,
alias: 'PrioritaNumero',

},
__Dati_Testo004: {
type: String,
alias: 'PrioritaTesto',

},
__Dati_Testo005: {
type: String,
alias: 'TxtAttivita',

},
__Dati_Numero004: {
type: Number,
alias: 'IdAttivitaStandard',

},
__Dati_Testo006: {
type: String,
alias: 'IdMail',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AttivitaStandardSchema;