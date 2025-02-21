import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStoricoFirmeSchedeAttivitaControlloPrivate } from './StoricoFirmeSchedeAttivitaControllo.Types.Private';


/* --------
* Schema Definition
* -------- */
const StoricoFirmeSchedeAttivitaControlloSchema = new mongoose.Schema<IStoricoFirmeSchedeAttivitaControlloPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Data001: {
type: Date,
alias: 'Data',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_DataOra001: {
type: Date,
alias: 'DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo001: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo002: {
type: String,
alias: 'IdSchedaAttivitaControllo',

},
__Dati_Testo003: {
type: String,
alias: 'IdStoricoSchedaAttivitaControllo',

},
__Dati_Testo004: {
type: String,
alias: 'Note',

},
__Dati_Testo005: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo007: {
type: String,
alias: 'Stato',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StoricoFirmeSchedeAttivitaControlloSchema;