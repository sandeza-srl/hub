import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICausaliTimbraturePrivate } from './CausaliTimbrature.Types.Private';


/* --------
* Schema Definition
* -------- */
const CausaliTimbratureSchema = new mongoose.Schema<ICausaliTimbraturePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdCausale',

},
__Dati_Testo003: {
type: String,
alias: 'TxtCausale',

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
alias: 'FlagLavoro',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagMutua',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagFestivo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagStraordinario',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagPermesso',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagFerie',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagPausa',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagPredefinito',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceCausale',

},
__Dati_Testo005: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagArrotondaOraInizio_30min',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagArrotondaOraFine_30min',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagMaternita',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagCongedo',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagInfortunio',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagCassaIntegrazione',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagArrotondaOraInizio_15min',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagArrotondaOraInizio_5min',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagArrotondaOraFine_15min',

},
__Dati_Numero020: {
type: Number,
alias: 'FlagArrotondaOraFine_5min',

},
__Dati_Numero021: {
type: Number,
alias: 'TolleranzaOraInizio',

},
__Dati_Numero022: {
type: Number,
alias: 'TolleranzaOraFine',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CausaliTimbratureSchema;