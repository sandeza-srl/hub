import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRubricaProspectPrivate } from './RubricaProspect.Types.Private';


/* --------
* Schema Definition
* -------- */
const RubricaProspectSchema = new mongoose.Schema<IRubricaProspectPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdProspect',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'IdRubrica',

},
__Dati_Testo002: {
type: String,
alias: 'NomeRubrica',

},
__Dati_Testo003: {
type: String,
alias: 'Posizione',

},
__Dati_Testo004: {
type: String,
alias: 'Web',

},
__Dati_Testo005: {
type: String,
alias: 'Note',

},
__Dati_Testo006: {
type: String,
alias: 'Mail',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagSelezionato',

},
__Dati_Testo007: {
type: String,
alias: 'FlagSelezionatoVedi',

},
__Dati_Testo008: {
type: String,
alias: 'Telefono',

},
__Dati_Testo009: {
type: String,
alias: 'Cellulare',

},
__Dati_Testo010: {
type: String,
alias: 'LingueParlate',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RubricaProspectSchema;