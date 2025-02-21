import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiStatiUtensiliPrivate } from './TipiStatiUtensili.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStatiUtensiliSchema = new mongoose.Schema<ITipiStatiUtensiliPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdTipoStatoUtensile',

},
__Dati_Testo003: {
type: String,
alias: 'TxtTipoStatoUtensile',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagDisponibile',

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
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagRiparazione',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagRottamato',

},
__Dati_Numero007: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo008: {
type: String,
alias: 'TxtTipoStatoUtensileAutomatico',

},
__Dati_Testo009: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiStatiUtensiliSchema;