import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipologieDestinatariMailPrivate } from './TipologieDestinatariMail.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipologieDestinatariMailSchema = new mongoose.Schema<ITipologieDestinatariMailPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'TipoDestinatarioMail',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagA',

},
__Dati_Testo002: {
type: String,
alias: 'FlagAVedi',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagCC',

},
__Dati_Testo003: {
type: String,
alias: 'FlagCCVedi',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagCCN',

},
__Dati_Testo004: {
type: String,
alias: 'FlagCCNVedi',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero005: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipologieDestinatariMailSchema;