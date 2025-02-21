import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { INotificheStepProcessoPrivate } from './NotificheStepProcesso.Types.Private';


/* --------
* Schema Definition
* -------- */
const NotificheStepProcessoSchema = new mongoose.Schema<INotificheStepProcessoPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_DataOra001: {
type: Date,
alias: 'DataOra',
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
alias: 'IdAccountOperatoreNotifica',

},
__Dati_Testo003: {
type: String,
alias: 'IdNotifica',

},
__Dati_Testo004: {
type: String,
alias: 'IdStepProcesso',

},
__Dati_Testo005: {
type: String,
alias: 'TestoAggiuntivo',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo006: {
type: String,
alias: 'IdProcesso',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountOperatoreNotificaLetta',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo008: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo009: {
type: String,
alias: 'FlagTipoAzione',

},
__Dati_Testo010: {
type: String,
alias: 'TxtTipoAzione',

},
__Dati_Testo011: {
type: String,
alias: 'TxtStepProcesso',

},
__Dati_Testo012: {
type: String,
alias: 'TxtAttivita',

},
__Dati_Testo013: {
type: String,
alias: 'TxtAutomatico',

},
__Dati_Testo014: {
type: String,
alias: 'OggettoAzione',

},
__Dati_Testo015: {
type: String,
alias: 'IdInstallazione',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
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
export default NotificheStepProcessoSchema;