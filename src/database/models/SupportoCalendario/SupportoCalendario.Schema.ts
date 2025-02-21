import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISupportoCalendarioPrivate } from './SupportoCalendario.Types.Private';


/* --------
* Schema Definition
* -------- */
const SupportoCalendarioSchema = new mongoose.Schema<ISupportoCalendarioPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdUtente',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Data001: {
type: Date,
alias: 'Giorno01_',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'Giorno02',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data003: {
type: Date,
alias: 'Giorno03',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data004: {
type: Date,
alias: 'Giorno04',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data005: {
type: Date,
alias: 'Giorno05',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data006: {
type: Date,
alias: 'Giorno06',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data007: {
type: Date,
alias: 'Giorno07',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'Ciccione',

},
__Dati_Testo002: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo003: {
type: String,
alias: 'IdSupportoCalendario',

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
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SupportoCalendarioSchema;