import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILogGiacenzeItemPrivate } from './LogGiacenzeItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogGiacenzeItemSchema = new mongoose.Schema<ILogGiacenzeItemPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Data001: {
type: Date,
alias: 'Data',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'QtGiacenza_DOp',

},
__Dati_Testo001: {
type: String,
alias: 'IdItem',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'QtGiacenza_Maga',

},
__Dati_Numero004: {
type: Number,
alias: 'AnnoMese',

},
__Dati_Numero005: {
type: Number,
alias: 'VUnitarioDocOperativo',

},
__Dati_Numero006: {
type: Number,
alias: 'VUnitarioDocContabile',

},
__Dati_Numero007: {
type: Number,
alias: 'VUnitario',

},
__Dati_Numero008: {
type: Number,
alias: 'VUnitarioFornitura',

},
__Dati_Testo003: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Testo004: {
type: String,
alias: 'IdLogGiacenzeItem',

},
__Dati_Numero009: {
type: Number,
alias: 'Zero',

},
__Dati_Numero010: {
type: Number,
alias: 'AnnoSettimana',

},
__Dati_Numero011: {
type: Number,
alias: 'VGiacenza',

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
export default LogGiacenzeItemSchema;