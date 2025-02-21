import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IProvvigioniPrivate } from './Provvigioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProvvigioniSchema = new mongoose.Schema<IProvvigioniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo002: {
type: String,
alias: 'FlagCosaIncludeVedi',

},
__Dati_Numero001: {
type: Number,
alias: 'FlagPercentuale',

},
__Dati_Testo003: {
type: String,
alias: 'FlagPercentualeVedi',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagSoloItem',

},
__Dati_Testo004: {
type: String,
alias: 'FlagSoloItemVedi',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagTuttaFamiglia',

},
__Dati_Testo005: {
type: String,
alias: 'FlagTuttaFamigliaVedi',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagTuttaSottoFamiglia',

},
__Dati_Testo006: {
type: String,
alias: 'FlagTuttaSottoFamigliaVedi',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagTutto',

},
__Dati_Testo007: {
type: String,
alias: 'FlagTuttoVedi',

},
__Dati_Testo008: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo009: {
type: String,
alias: 'IdItem',

},
__Dati_Testo010: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo011: {
type: String,
alias: 'IdProvvigioni',

},
__Dati_Numero006: {
type: Number,
alias: 'PrezzoFisso',

},
__Dati_Numero007: {
type: Number,
alias: 'Uno',

},
__Dati_Numero008: {
type: Number,
alias: 'VariazionePrezzoDiretta',

},
__Dati_Numero009: {
type: Number,
alias: 'VariazionePrezzoPercentuale',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagVendita',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAcquisto',

},
__Dati_Testo012: {
type: String,
alias: 'TxtVenditaAcquisto',

},
__Dati_Testo013: {
type: String,
alias: 'IdAccountClientePrimario',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagProduttore',

},
__Dati_Testo014: {
type: String,
alias: 'FlagProduttoreVedi',

},
__Dati_Testo015: {
type: String,
alias: 'TxtAccountProduttore',

},
__Dati_Testo016: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo017: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Testo018: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo019: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero013: {
type: Number,
alias: 'Zero',

},
__Dati_Testo020: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo021: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProvvigioniSchema;