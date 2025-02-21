import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUtenteIdentitaMailPrivate } from './UtenteIdentitaMail.Types.Private';


/* --------
* Schema Definition
* -------- */
const UtenteIdentitaMailSchema = new mongoose.Schema<IUtenteIdentitaMailPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo002: {
type: String,
alias: 'ImapMail',

},
__Dati_Testo003: {
type: String,
alias: 'Mail',

},
__Dati_Testo004: {
type: String,
alias: 'NomeAccountMail',

},
__Dati_Testo005: {
type: String,
alias: 'PasswordAccountMail',

},
__Dati_Testo006: {
type: String,
alias: 'PasswordAccountMailVisualizza',

},
__Dati_Testo007: {
type: String,
alias: 'POP3Mail',

},
__Dati_Testo008: {
type: String,
alias: 'SmtpMail',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo009: {
type: String,
alias: 'TxtIdentita',

},
__Dati_Testo010: {
type: String,
alias: 'IdIdentita',

},
__Dati_Testo011: {
type: String,
alias: 'FirmaMail',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UtenteIdentitaMailSchema;