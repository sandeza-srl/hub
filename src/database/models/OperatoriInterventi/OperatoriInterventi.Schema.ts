import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOperatoriInterventiPrivate } from './OperatoriInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriInterventiSchema = new mongoose.Schema<IOperatoriInterventiPrivate>({

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
alias: 'IdOperatoreIntervento',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo004: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo005: {
type: String,
alias: 'IdIntervento',

},
__Dati_Numero002: {
type: Number,
alias: 'OrdineGiorno',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagPrincipale',

},
__Dati_Data001: {
type: Date,
alias: 'DataEsecuzioneProgrammata',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'AnnoSettimanaEsecuzioneProgrammata',

},
__Dati_Numero005: {
type: Number,
alias: 'AnnoMeseEsecuzioneProgrammata',

},
__Dati_Testo006: {
type: String,
alias: 'SettimanaEsecuzioneProgrammata',

},
__Dati_Numero006: {
type: Number,
alias: 'AnnoEsecuzioneProgrammata',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagProgrammato',

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
alias: 'Zero',

},
__Dati_Data002: {
type: Date,
alias: 'DataEsecuzioneReale',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero009: {
type: Number,
alias: 'AnnoEsecuzioneReale',

},
__Dati_Numero010: {
type: Number,
alias: 'AnnoMeseEsecuzioneReale',

},
__Dati_Numero011: {
type: Number,
alias: 'AnnoSettimanaEsecuzioneReale',

},
__Dati_Numero012: {
type: Number,
alias: 'OrdineGiornoSuggerito',

},
__Dati_Testo007: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo008: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriInterventiSchema;