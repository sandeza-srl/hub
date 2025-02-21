import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IProdottiPrivate } from './Prodotti.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProdottiSchema = new mongoose.Schema<IProdottiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'IdProdotto',

},
__Dati_Testo002: {
type: String,
alias: 'TxtProdotto',

},
__Dati_Contenitore001: {
type: String,
alias: 'LogoProdotto',

},
__Dati_Contenitore002: {
type: String,
alias: 'LogoProdottoStampa',

},
__Dati_Numero002: {
type: Number,
alias: 'UltimaVersione',

},
__Dati_Contenitore003: {
type: String,
alias: 'LogoProduttore',

},
__Dati_Contenitore004: {
type: String,
alias: 'LogoProdottoZChiusa',

},
__Dati_Contenitore005: {
type: String,
alias: 'VideoProdotto',

},
__Dati_Contenitore006: {
type: String,
alias: 'LogoScuro',

},
__Dati_Contenitore007: {
type: String,
alias: 'LogoProduttoreScuro',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo003: {
type: String,
alias: 'IdInstallazione',

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
}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProdottiSchema;