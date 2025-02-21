import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUtentiPrivate } from './Utenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const UtentiSchema = new mongoose.Schema<IUtentiPrivate>({

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
alias: 'TxtUtente',

},
__Dati_Testo002: {
type: String,
alias: 'PasswordUtente',

},
__Dati_Testo003: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo004: {
type: String,
alias: 'TxtTipoUtente',

},
__Dati_Testo005: {
type: String,
alias: 'IdLingua',

},
__Dati_Testo006: {
type: String,
alias: 'TxtLingua',

},
__Dati_Testo007: {
type: String,
alias: 'Nome',

},
__Dati_Testo008: {
type: String,
alias: 'Cognome',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgUtente',

},
__Dati_Testo009: {
type: String,
alias: 'IdTipoUtente',

},
__Dati_Testo010: {
type: String,
alias: 'PasswordUtenteVisualizza',

},
__Dati_Testo011: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo012: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo013: {
type: String,
alias: 'IdProdotto',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagUtenteWeb',

},
__Dati_Testo014: {
type: String,
alias: 'ChatInArrivoUtenti',

},
__Dati_Numero003: {
type: Number,
alias: 'ProgUtente',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagUtenteGo',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagVisibile',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagUtenteCompleto',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagUtenteLimitato',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagUtenteProduzione',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagUtenteUfficio',

},
__Dati_Testo015: {
type: String,
alias: 'IndirizzoCalendario',

},
__Dati_Testo016: {
type: String,
alias: 'iFrameCalendario',

},
__Dati_Testo017: {
type: String,
alias: 'IdPostazione',

},
__Dati_Testo018: {
type: String,
alias: 'FlagDatiDaScaricareGo',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagIntermediario',

},
__Dati_Testo019: {
type: String,
alias: 'FlagDatiDaScaricareGo_NoACapo',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagResponsabileProgetto',

},
__Dati_Testo020: {
type: String,
alias: 'LogModifiche',

},
__Dati_Numero012: {
type: Number,
alias: 'Zero',

},
__Dati_Testo021: {
type: String,
alias: 'MessaggioSandeza',

},
__Dati_Testo022: {
type: String,
alias: 'IdTipoRuolo',

},
__Dati_Testo023: {
type: String,
alias: 'ListaSottomenu',

},
__Dati_Testo024: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagNoteDiReleaseDaLeggere',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero014: {
type: Number,
alias: 'FlagNoteDiReleaseCritica',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagMultisocieta',

},
__Dati_Numero016: {
type: Number,
alias: 'TotaleUtenteSocieta',

},
__Dati_Numero017: {
type: Number,
alias: 'Performance_PrivilegiaEsecuzioneServer',

},
__Dati_Testo025: {
type: String,
alias: 'ChiamataTelefonicaViaUrl_Mac',

},
__Dati_Testo026: {
type: String,
alias: 'ChiamataTelefonicaViaUrl_Win',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UtentiSchema;