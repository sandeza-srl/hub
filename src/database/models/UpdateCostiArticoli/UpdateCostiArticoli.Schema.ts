import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUpdateCostiArticoliPrivate } from './UpdateCostiArticoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateCostiArticoliSchema = new mongoose.Schema<IUpdateCostiArticoliPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdUpdateCostiArticoli',

},
__Dati_Testo002: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo003: {
type: String,
alias: 'TxtUtenteModifica',

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
__Dati_Numero001: {
type: Number,
alias: 'NumRisorse',

},
__Dati_Numero002: {
type: Number,
alias: 'StatoUpdate_FlagAperto',

},
__Dati_Numero003: {
type: Number,
alias: 'StatoUpdate_FlagInCorso',

},
__Dati_Numero004: {
type: Number,
alias: 'StatoUpdate_FlagChiuso',

},
__Dati_Testo004: {
type: String,
alias: 'StatoUpdate_TxtStato',

},
__Dati_Data001: {
type: Date,
alias: 'DataEsecuzione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero005: {
type: Number,
alias: 'FlagGestioneVariazioni',

},
__Dati_Numero006: {
type: Number,
alias: 'Uno',

},
__Dati_Numero007: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaDaVoci',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'AnnoEsecuzione',

},
__Dati_Testo008: {
type: String,
alias: 'AnnoMeseEsecuzione',

},
__Dati_Testo009: {
type: String,
alias: 'IdUtenteCreazione',

},
__Dati_Testo010: {
type: String,
alias: 'IdUtenteModifica',

},
__Dati_DataOra003: {
type: Date,
alias: 'Elaborazione_DataOraInizioEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra004: {
type: Date,
alias: 'Elaborazione_DataOraFineEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero009: {
type: Number,
alias: 'Elaborazione_FlagInCorso',

},
__Dati_Testo011: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo012: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo013: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo014: {
type: String,
alias: 'Elaborazione_IdCicliDaRielaborare',

},
__Dati_Numero010: {
type: Number,
alias: 'Elaborazione_Scaglioni_FlagAggiornamentoCompletato',

},
__Dati_Numero011: {
type: Number,
alias: 'Elaborazione_OpzioniProd_FlagAggiornamentoCompletato',

},
__Dati_Numero012: {
type: Number,
alias: 'Elaborazione_OpzioniProd_NumeroRecordAggiornati',

},
__Dati_Numero013: {
type: Number,
alias: 'Elaborazione_Scaglioni_NumeroRecordAggiornati',

},
__Dati_Testo015: {
type: String,
alias: 'Elaborazione_Log_TxtLog',

},
__Dati_Numero014: {
type: Number,
alias: 'Elaborazione_Log_FlagAggiorna',

},
__Dati_Numero015: {
type: Number,
alias: 'Elaborazione_Scaglioni_NumeroRecordTotale',

},
__Dati_Testo016: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoliSchema;