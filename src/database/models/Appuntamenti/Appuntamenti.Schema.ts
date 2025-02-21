import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAppuntamentiPrivate } from './Appuntamenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const AppuntamentiSchema = new mongoose.Schema<IAppuntamentiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdLuogo',

},
__Dati_Numero001: {
type: Number,
alias: 'IdRubrica',

},
__Dati_Testo002: {
type: String,
alias: 'IdItem',

},
__Dati_Numero002: {
type: Number,
alias: 'NumeroPartecipanti',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraFineImpegnoLuogo',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraInizioImpegnoLuogo',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraFineAppuntamento',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra004: {
type: Date,
alias: 'DataOraInizioAppuntamento',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'TempoPreparazione',

},
__Dati_Ora002: {
type: String,
alias: 'TempoRipristino',

},
__Dati_Ora003: {
type: String,
alias: 'TempoOperazione',

},
__Dati_Numero003: {
type: Number,
alias: 'NumeroMaxPartecipanti',

},
__Dati_Numero004: {
type: Number,
alias: 'NumeroMinPartecipanti',

},
__Dati_Numero005: {
type: Number,
alias: 'IdAppuntamento',

},
__Dati_Numero006: {
type: Number,
alias: 'Uno',

},
__Dati_Testo004: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo005: {
type: String,
alias: 'TxtOperatori',

},
__Dati_Testo006: {
type: String,
alias: 'NomeRubrica',

},
__Dati_Numero007: {
type: Number,
alias: 'IdSessioneAppuntamento',

},
__Dati_Numero008: {
type: Number,
alias: 'OperatoriNecessari',

},
__Dati_Numero009: {
type: Number,
alias: 'NumeroOperatori',

},
__Dati_Numero010: {
type: Number,
alias: 'MinutiPossibiliAppuntamenti',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountOperatoriAbilitati',

},
__Dati_Testo008: {
type: String,
alias: 'DataOraTutti',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountOperatoriImpegnati',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagCompleto',

},
__Dati_Numero012: {
type: Number,
alias: 'Zero',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AppuntamentiSchema;