import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISottoprodottiPerItemPrivate } from './SottoprodottiPerItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const SottoprodottiPerItemSchema = new mongoose.Schema<ISottoprodottiPerItemPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdSottoprodottiPerItem',

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
alias: 'DataOraModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo004: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo005: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo006: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo007: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo008: {
type: String,
alias: 'IdItem',

},
__Dati_Testo009: {
type: String,
alias: 'IdItemSottoprodotto',

},
__Dati_Testo010: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo011: {
type: String,
alias: 'TxtItemSottoprodotto',

},
__Dati_Testo012: {
type: String,
alias: 'TxtSottoFamigliaItemSottoprodotto',

},
__Dati_Testo013: {
type: String,
alias: 'TxtFamigliaItemSottoprodotto',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems',

},
__Dati_Testo014: {
type: String,
alias: 'CodiceItem',

},
__Dati_Testo015: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Testo016: {
type: String,
alias: 'CodiceItemSottoprodotto',

},
__Dati_Testo017: {
type: String,
alias: 'CodiceTxtItemSottoprodottoAutomatico',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagCalcoloValido',

},
__Dati_Testo018: {
type: String,
alias: 'Formula_Calcolo',

},
__Dati_Testo019: {
type: String,
alias: 'IdFamigliaItemSottoprodotto',

},
__Dati_Testo020: {
type: String,
alias: 'IdSottoFamigliaItemSottoprodotto',

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
export default SottoprodottiPerItemSchema;