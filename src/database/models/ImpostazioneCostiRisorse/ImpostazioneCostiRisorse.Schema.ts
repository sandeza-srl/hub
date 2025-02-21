import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImpostazioneCostiRisorsePrivate } from './ImpostazioneCostiRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImpostazioneCostiRisorseSchema = new mongoose.Schema<IImpostazioneCostiRisorsePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdImpostazioneCosti',

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
__Dati_Testo002: {
type: String,
alias: 'TxtImpostazioneCosti',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceImpostazioneCosti',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceTxtImpostazioneCosti',

},
__Dati_Numero001: {
type: Number,
alias: 'FlagAttrezzaggio',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagFermo',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagProduzione',

},
__Dati_Testo005: {
type: String,
alias: 'CalcoloVisibile',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo007: {
type: String,
alias: 'IdReparti',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagValidazioneCalcolo',

},
__Dati_Testo008: {
type: String,
alias: 'Calcolo',

},
__Dati_Testo009: {
type: String,
alias: 'TxtReparti',

},
__Dati_Numero005: {
type: Number,
alias: 'Uno',

},
__Dati_Numero006: {
type: Number,
alias: 'Zero',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo011: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ImpostazioneCostiRisorseSchema;