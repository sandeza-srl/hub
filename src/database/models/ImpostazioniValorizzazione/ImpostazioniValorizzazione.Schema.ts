import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImpostazioniValorizzazionePrivate } from './ImpostazioniValorizzazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImpostazioniValorizzazioneSchema = new mongoose.Schema<IImpostazioniValorizzazionePrivate>({

_id: {
type: String,
default: uuid.v4
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
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagValorizzaCostoMedioPonderato',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagValorizzaFifo',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagValorizzaLifo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagValorizzaUltimoCosto',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagValorizzaWipPreventivo',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagValorizzaWipConsuntivo',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagWipTotale',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagWipQuantita',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAbilita01Lunedi',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagAbilita02Martedi',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagAbilita03Mercoledi',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagAbilita04Giovedi',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagAbilita05Venerdi',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagAbilita06Sabato',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagAbilita07Domenica',

},
__Dati_Testo002: {
type: String,
alias: 'IdValorizzazioneMagazzino_UltimaConsolidata',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagEscludiNonAttivi',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagEscludiNonAMagazzino',

},
__Dati_Testo003: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo004: {
type: String,
alias: 'IdImpostazioniValorizzazioni',

},
__Dati_Testo005: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Numero020: {
type: Number,
alias: 'DataHub_FlagInviaDati',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ImpostazioniValorizzazioneSchema;