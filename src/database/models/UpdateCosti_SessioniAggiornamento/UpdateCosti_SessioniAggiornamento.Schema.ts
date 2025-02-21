import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUpdateCosti_SessioniAggiornamentoPrivate } from './UpdateCosti_SessioniAggiornamento.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateCosti_SessioniAggiornamentoSchema = new mongoose.Schema<IUpdateCosti_SessioniAggiornamentoPrivate>({

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
alias: 'IdSessioneUpdateCosti',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraInizioEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra004: {
type: Date,
alias: 'DataOraFineEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Data001: {
type: Date,
alias: 'DataInizioPeriodoAggiornamento',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFinePeriodoAggiornamento',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaCostiRisorsa',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagIgnoraConsolidamentoMagazzino',

},
__Dati_Numero005: {
type: Number,
alias: 'NumLottiPeriodo',

},
__Dati_Numero006: {
type: Number,
alias: 'CTT_Ricarico_PreEsecuzione',

},
__Dati_Numero007: {
type: Number,
alias: 'CTT_Ricarico_PostEsecuzione',

},
__Dati_Numero008: {
type: Number,
alias: 'DiffCTT_PrePostEsecuzione',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAggiornaDaVariazioniLotti',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagEscludiCicliRilavorazione',

},
__Dati_Testo005: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateCosti_SessioniAggiornamentoSchema;