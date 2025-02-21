import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITimbraturePrivate } from './Timbrature.Types.Private';


/* --------
* Schema Definition
* -------- */
const TimbratureSchema = new mongoose.Schema<ITimbraturePrivate>({

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
alias: 'IdLuogo',

},
__Dati_Testo003: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo004: {
type: String,
alias: 'TxtLuogo',

},
__Dati_Testo005: {
type: String,
alias: 'TxtReparto',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Ora004: {
type: String,
alias: 'OreTotale',

},
__Dati_Testo006: {
type: String,
alias: 'Note',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraInizio',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraFine',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'TempoTotale',

},
__Dati_Testo007: {
type: String,
alias: 'IdTimbratura',

},
__Dati_Data001: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora002: {
type: String,
alias: 'OraInizio',

},
__Dati_Ora003: {
type: String,
alias: 'OraFine',

},
__Dati_Testo008: {
type: String,
alias: 'IdDipendente',

},
__Dati_Testo009: {
type: String,
alias: 'TxtOperatore',

},
__Dati_Testo010: {
type: String,
alias: 'IdCausale',

},
__Dati_Testo011: {
type: String,
alias: 'TxtCausale',

},
__Dati_Testo012: {
type: String,
alias: 'IdPresenza',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagFerie',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagFestivo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagLavoro',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagMutua',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagPausa',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagPermesso',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagStraordinario',

},
__Dati_Numero011: {
type: Number,
alias: 'CostoOreTotale',

},
__Dati_Testo013: {
type: String,
alias: 'IdInstallazione',

},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra004: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero012: {
type: Number,
alias: 'FlagMaternita',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagCongedo',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagInfortunio',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagCassaIntegrazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TimbratureSchema;