import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociSistemiEsterniPrivate } from './VociSistemiEsterni.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociSistemiEsterniSchema = new mongoose.Schema<IVociSistemiEsterniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo001: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo002: {
type: String,
alias: 'IdVoceSistemaEsterno',

},
__Dati_Testo003: {
type: String,
alias: 'Endpoint',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagStandard',

},
__Dati_Numero004: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo004: {
type: String,
alias: 'QueryParams',

},
__Dati_Testo005: {
type: String,
alias: 'Header',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagEliminazione',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo007: {
type: String,
alias: 'IdSistemaEsterno',

},
__Dati_Testo008: {
type: String,
alias: 'Body',

},
__Dati_Testo009: {
type: String,
alias: 'ScriptFM_NomeScript',

},
__Dati_Testo010: {
type: String,
alias: 'ScriptFM_Parametri',

},
__Dati_Testo011: {
type: String,
alias: 'ScriptFM_NomeFile',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagAPI',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagFM',

},
__Dati_Testo012: {
type: String,
alias: 'cURL',

},
__Dati_Testo013: {
type: String,
alias: 'UltimaRisposta',

},
__Dati_Numero008: {
type: Number,
alias: 'OrdineSistemaEVoce',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAuthNecessaria',

},
__Dati_Testo014: {
type: String,
alias: 'RispostaChiaveJson',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociSistemiEsterniSchema;