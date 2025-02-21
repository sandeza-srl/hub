import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInfoAggiuntiveUtensilePrivate } from './InfoAggiuntiveUtensile.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoAggiuntiveUtensileSchema = new mongoose.Schema<IInfoAggiuntiveUtensilePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipoUtensile',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'Etichetta',

},
__Dati_Testo003: {
type: String,
alias: 'Contenuto',

},
__Dati_Testo004: {
type: String,
alias: 'IdInfoAggiuntivaUtensile',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo006: {
type: String,
alias: 'IdUtensile',

},
__Dati_Testo007: {
type: String,
alias: 'IdInstallazione',

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
export default InfoAggiuntiveUtensileSchema;