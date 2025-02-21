import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRisorseTipiFasiPrivate } from './RisorseTipiFasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const RisorseTipiFasiSchema = new mongoose.Schema<IRisorseTipiFasiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'Note',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoFase',

},
__Dati_Testo005: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo006: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
__Dati_Testo007: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo008: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Ora001: {
type: String,
alias: 'TA_T',

},
__Dati_Ora002: {
type: String,
alias: 'TD_T',

},
__Dati_Ora003: {
type: String,
alias: 'TAttraversamentoLinea_T',

},
__Dati_Numero003: {
type: Number,
alias: 'NUmOpzColpo_T',

},
__Dati_Numero004: {
type: Number,
alias: 'ProdUmOpzHP_T',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAggiorna',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceTxtRisorsa',

},
__Dati_Testo010: {
type: String,
alias: 'IdRisorseTipiFasi',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagAggiornaContenutiDaRisorsa',

},
__Dati_Testo011: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo012: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo013: {
type: String,
alias: 'IdRicorrenzaRecord',

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
export default RisorseTipiFasiSchema;