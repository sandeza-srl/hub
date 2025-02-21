import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_SettimaneStandardPrivate } from './P_SettimaneStandard.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_SettimaneStandardSchema = new mongoose.Schema<IP_SettimaneStandardPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdReparto',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdSettimanaStandard',

},
__Dati_Testo004: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo006: {
type: String,
alias: 'IdOperatoreProduzione',

},
__Dati_Testo007: {
type: String,
alias: 'IdLuogo',

},
__Dati_Testo008: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo009: {
type: String,
alias: 'TxtSettimanaStandard',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagCalendariRisorse',

},
__Dati_Ora001: {
type: String,
alias: 'OreTotaliDisponibilita',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAggiorna',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_SettimaneStandardSchema;