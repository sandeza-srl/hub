import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiFermiPrivate } from './TipiFermi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiFermiSchema = new mongoose.Schema<ITipiFermiPrivate>({

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
alias: 'IdTipoFermo',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoFermo',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceTipoFermo',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo005: {
type: String,
alias: 'FamigliaTipoFermo',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagNotaPossibile',

},
__Dati_Testo006: {
type: String,
alias: 'IdRisorseAbilitate',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
type: String,
alias: 'CodiceFermoMacchina',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceTxtTipoFermoAutomatico',

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
__Dati_Testo009: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagCollegatoBenestare',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiFermiSchema;