import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPostazioniOriginePrivate } from './PostazioniOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const PostazioniOrigineSchema = new mongoose.Schema<IPostazioniOriginePrivate>({

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
alias: 'FM_NomeUtente',

},
__Dati_Testo002: {
type: String,
alias: 'Postazione_Nome',

},
__Dati_Testo003: {
type: String,
alias: 'IdPostazione',

},
__Dati_Testo004: {
type: String,
alias: 'Postazione_SO',

},
__Dati_Testo005: {
type: String,
alias: 'PathSave',

},
__Dati_Testo006: {
type: String,
alias: 'FM_Versione',

},
__Dati_Testo007: {
type: String,
alias: 'FM_Lingua',

},
__Dati_Numero002: {
type: Number,
alias: 'StandardFinestra_Altezza',

},
__Dati_Numero003: {
type: Number,
alias: 'StandardFinestra_Larghezza',

},
__Dati_Numero004: {
type: Number,
alias: 'StandardFinestra_DistanzaSinistra',

},
__Dati_Numero005: {
type: Number,
alias: 'StandardFinestra_DistanzaSopra',

},
__Dati_Testo008: {
type: String,
alias: 'Postazione_IndirizzoIP',

},
__Dati_Numero012: {
type: Number,
alias: 'StandardFinestra_Zoom',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagAggiorna',

},
__Dati_Testo010: {
type: String,
alias: 'Postazione_SO_Versione',

},
__Dati_Numero007: {
type: Number,
alias: 'Zero',

},
__Dati_Testo011: {
type: String,
alias: 'FM_PluginInstallati',

},
__Dati_Testo012: {
type: String,
alias: 'Postazione_SO_Lingua',

},
__Dati_Testo013: {
type: String,
alias: 'Postazione_SO_Descrittivo',

},
__Dati_Testo014: {
type: String,
alias: 'IdInstallazione',

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
__Dati_Numero008: {
type: Number,
alias: 'Postazione_Tipo_FlagIPad',

},
__Dati_Numero009: {
type: Number,
alias: 'Postazione_Tipo_FlagIPhone',

},
__Dati_Numero010: {
type: Number,
alias: 'Postazione_Tipo_FlagComputer_Mac',

},
__Dati_Numero011: {
type: Number,
alias: 'Postazione_Tipo_FlagComputer_Win',

},
__Dati_Numero013: {
type: Number,
alias: 'Postazione_Tipo_FlagComputer',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagAggiornaDaTipiAccessiPostazioni',

},
__Dati_Numero015: {
type: Number,
alias: 'Accesso_Tipo_FlagStazioneMobile',

},
__Dati_Numero016: {
type: Number,
alias: 'Accesso_Tipo_FlagStazioneRaccoltaDati',

},
__Dati_Numero017: {
type: Number,
alias: 'Accesso_Tipo_FlagUfficio',

},
__Dati_Testo015: {
type: String,
alias: 'Postazione_IdPersistente',

},
__Dati_Testo016: {
type: String,
alias: 'Postazione_UUID',

},
__Dati_Numero018: {
type: Number,
alias: 'Postazione_FlagLanInterna',

},
__Dati_Testo017: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo018: {
type: String,
alias: 'Postazione_SO_UserName',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagReset',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PostazioniOrigineSchema;