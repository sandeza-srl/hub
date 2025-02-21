import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IItemsPerVerificaFabbisogniPrivate } from './ItemsPerVerificaFabbisogni.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemsPerVerificaFabbisogniSchema = new mongoose.Schema<IItemsPerVerificaFabbisogniPrivate>({

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
alias: 'IdItemsPerVerificaFabbisogni',

},
__Dati_Testo002: {
type: String,
alias: 'IdItem',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Numero001: {
type: Number,
alias: 'QuantitaDisponibile',

},
__Dati_Numero002: {
type: Number,
alias: 'QuantitaAssegnata',

},
__Dati_Numero003: {
type: Number,
alias: 'QuantitaResidua',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Numero005: {
type: Number,
alias: 'QuantitaInArrivo',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountCompagnia',

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
alias: 'IdInstallazione',

},
__Dati_Testo006: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ItemsPerVerificaFabbisogniSchema;