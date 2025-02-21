import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICollegamentiTipiStepProcessiPrivate } from './CollegamentiTipiStepProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const CollegamentiTipiStepProcessiSchema = new mongoose.Schema<ICollegamentiTipiStepProcessiPrivate>({

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
__Dati_Testo002: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoProcesso',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoStepProcessi',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdCollegamentoTipoStepProcessi',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagTipiArticoli',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagTipiOfferte',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagTipoAttivitaControllo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagTipoProcesso',

},
__Dati_Testo006: {
type: String,
alias: 'IdOggettoCollegato',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagTipoDocumentoOperativo',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagCreazionePossibile',

},
__Dati_Testo007: {
type: String,
alias: 'IdTipiRuoloCreazione',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipiRuoloCollegamento',

},
__Dati_Testo009: {
type: String,
alias: 'IstruzioniCollegamento',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagMantieniCollegamentiProcesso',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagFamiglieItem',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagTipiRigheOrdine',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagTracciabilita',

},
__Dati_Testo010: {
type: String,
alias: 'TxtTipoOggettoCollegato',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagSottofamiglieItem',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagTipiRuoliCreazione',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagTipiRuoliCollegamento',

},
__Dati_Testo011: {
type: String,
alias: 'TxtTipiRuoliCreazione',

},
__Dati_Testo012: {
type: String,
alias: 'TxtTipiRuoliCollegamento',

},
__Dati_Testo013: {
type: String,
alias: 'TxtOggettoCollegato',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagTipoComunicazioneProduzione',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagTipoScarto',

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
export default CollegamentiTipiStepProcessiSchema;