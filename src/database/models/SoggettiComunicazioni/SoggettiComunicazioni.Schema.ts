import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISoggettiComunicazioniPrivate } from './SoggettiComunicazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const SoggettiComunicazioniSchema = new mongoose.Schema<ISoggettiComunicazioniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'FlagA',

},
__Dati_Testo001: {
type: String,
alias: 'IdComunicazioneAnagrafica',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagDa',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagCC',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagCCN',

},
__Dati_Testo002: {
type: String,
alias: 'IdRubrica',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo004: {
type: String,
alias: 'Mail',

},
__Dati_Testo005: {
type: String,
alias: 'TipoDestinatarioMail',

},
__Dati_Testo006: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo007: {
type: String,
alias: 'Telefono',

},
__Dati_Testo008: {
type: String,
alias: 'Fax',

},
__Dati_Testo009: {
type: String,
alias: 'Citta',

},
__Dati_Testo010: {
type: String,
alias: 'TxtVisualizzaIndirizzo',

},
__Dati_Testo011: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero006: {
type: Number,
alias: 'Zero',

},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo013: {
type: String,
alias: 'IdSoggettoComunicazione',

},
__Dati_Testo014: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SoggettiComunicazioniSchema;