import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStatiOfferteRevisioniPrivate } from './StatiOfferteRevisioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const StatiOfferteRevisioniSchema = new mongoose.Schema<IStatiOfferteRevisioniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdStato',

},
__Dati_Testo002: {
type: String,
alias: 'TxtStato',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'IdOfferta',

},
__Dati_Data001: {
type: Date,
alias: 'Data',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo004: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo005: {
type: String,
alias: 'Note',

},
__Dati_Testo006: {
type: String,
alias: 'IdStatoOfferta',

},
__Dati_Numero002: {
type: Number,
alias: 'Ordine',

},
__Dati_Numero003: {
type: Number,
alias: 'PercProbabilitaSuccesso',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo007: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo008: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo009: {
type: String,
alias: 'IdRevisione',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo011: {
type: String,
alias: 'IdStatoOfferteRevisioni',

},
__Dati_Testo012: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StatiOfferteRevisioniSchema;