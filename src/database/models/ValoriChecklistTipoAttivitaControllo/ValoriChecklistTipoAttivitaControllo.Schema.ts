import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IValoriChecklistTipoAttivitaControlloPrivate } from './ValoriChecklistTipoAttivitaControllo.Types.Private';


/* --------
* Schema Definition
* -------- */
const ValoriChecklistTipoAttivitaControlloSchema = new mongoose.Schema<IValoriChecklistTipoAttivitaControlloPrivate>({

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
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdCheckTipoAttivita',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoAttivita',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo004: {
type: String,
alias: 'IdValoreCheckTipoAttivita',

},
__Dati_Numero003: {
type: Number,
alias: 'ValoreNumerico',

},
__Dati_Testo005: {
type: String,
alias: 'ValoreTesto',

},
__Dati_Data001: {
type: Date,
alias: 'ValoreData',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_DataOra003: {
type: Date,
alias: 'ValoreDataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo006: {
type: String,
alias: 'Etichetta',

},
__Dati_Testo007: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ValoriChecklistTipoAttivitaControlloSchema;