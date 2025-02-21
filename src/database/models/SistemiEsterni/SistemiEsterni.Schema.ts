import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISistemiEsterniPrivate } from './SistemiEsterni.Types.Private';


/* --------
* Schema Definition
* -------- */
const SistemiEsterniSchema = new mongoose.Schema<ISistemiEsterniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdSistemaEsterno',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo002: {
type: String,
alias: 'AccountCreazione',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'AccountUltimaModifica',

},
__Dati_Testo004: {
type: String,
alias: 'TxtSistemaEsterno',

},
__Dati_Testo005: {
type: String,
alias: 'ServerNomeOIndirizzo',

},
__Dati_Testo006: {
type: String,
alias: 'ListaFileZAbilitati',

},
__Dati_Testo007: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo008: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo009: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo010: {
type: String,
alias: 'Login_URL',

},
__Dati_Testo011: {
type: String,
alias: 'Login_cURL',

},
__Dati_Testo012: {
type: String,
alias: 'Notifica_URL',

},
__Dati_Testo013: {
type: String,
alias: 'Notifica_cURL',

},
__Dati_Testo014: {
type: String,
alias: 'Logout_URL',

},
__Dati_Testo015: {
type: String,
alias: 'Logout_cURL',

},
__Dati_Testo016: {
type: String,
alias: 'Login_UltimoRisultato',

},
__Dati_Testo017: {
type: String,
alias: 'Logout_UltimoRisultato',

},
__Dati_Testo018: {
type: String,
alias: 'Notifica_UltimoRisultato',

},
__Dati_Testo019: {
type: String,
alias: 'Token',

},
__Dati_Testo020: {
type: String,
alias: 'ChiaveCodiceErroreInJsonRisposta',

},
__Dati_Testo021: {
type: String,
alias: 'ChiaveTokenInJsonRisposta',

},
__Dati_Numero001: {
type: Number,
alias: 'FlagStandard',

},
__Dati_Numero002: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo022: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo023: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero003: {
type: Number,
alias: 'Token_Validita',

},
__Dati_DataOra003: {
type: Date,
alias: 'Token_DataOraScadenza',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'FlagChiamateSenzaAttesa',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagNonElaborareTabelleCorrelate',

},
__Dati_Testo024: {
type: String,
alias: 'ListaFileZAbilitatiNotifiche',

},
__Dati_Numero006: {
type: Number,
alias: 'Tipo_FlagMagazzinoAutomatico',

},
__Dati_Numero007: {
type: Number,
alias: 'Tipo_FlagSistemaContabile',

},
__Dati_Numero008: {
type: Number,
alias: 'Tipo_FlagSistemaGestionale',

},
__Dati_Numero009: {
type: Number,
alias: 'Tipo_FlagSistemaWeb',

},
__Dati_Numero010: {
type: Number,
alias: 'Uno',

},
__Dati_Numero011: {
type: Number,
alias: 'Zero',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SistemiEsterniSchema;