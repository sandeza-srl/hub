import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStoricoStatiItemsPrivate } from './StoricoStatiItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const StoricoStatiItemsSchema = new mongoose.Schema<IStoricoStatiItemsPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdStoricoStatoItems',

},
__Dati_Testo002: {
type: String,
alias: 'TxtUtenteCreazione',

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
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo004: {
type: String,
alias: 'TxtAccountCompagnia',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'TxtNote',

},
__Dati_Testo006: {
type: String,
alias: 'IdItem',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagDefault',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagItemEntrata',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagItemFabbisogno',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagItemOrdinato',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagItemRichiestoOrdineApprovvigionamento',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagItemUscita',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagNonAttivo',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagNovita',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagRevisione',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagStatoSuccessivoAutomatico',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagStatoSuccessivoVincolato',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagWeb',

},
__Dati_Testo007: {
type: String,
alias: 'IdStatoItems',

},
__Dati_Testo008: {
type: String,
alias: 'IdStatoSuccessivo',

},
__Dati_Numero016: {
type: Number,
alias: 'StatoSuccessivoAutomatico_GGPerCambio',

},
__Dati_Testo009: {
type: String,
alias: 'TxtStatoItems',

},
__Dati_Testo010: {
type: String,
alias: 'TxtStatoItemsSuccessivo',

},
__Dati_Testo011: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StoricoStatiItemsSchema;