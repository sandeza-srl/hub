import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICapitoliAppoggioPrivate } from './CapitoliAppoggio.Types.Private';


/* --------
* Schema Definition
* -------- */
const CapitoliAppoggioSchema = new mongoose.Schema<ICapitoliAppoggioPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdCapitolo',

},
__Dati_Testo002: {
type: String,
alias: 'TitoloCapitolo',

},
__Dati_Testo003: {
type: String,
alias: 'SottoTitoloCapitolo',

},
__Dati_Numero001: {
type: Number,
alias: 'Ordine',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagInTotale',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoListino',

},
__Dati_Testo005: {
type: String,
alias: 'IdNuovoCapitolo',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'IdCapitoloAppoggio',

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
export default CapitoliAppoggioSchema;