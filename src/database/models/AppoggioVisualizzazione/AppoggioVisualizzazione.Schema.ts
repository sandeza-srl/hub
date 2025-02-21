import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAppoggioVisualizzazionePrivate } from './AppoggioVisualizzazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const AppoggioVisualizzazioneSchema = new mongoose.Schema<IAppoggioVisualizzazionePrivate>({

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
alias: 'IdAccountOperatore',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraInizio',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraFine',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo002: {
type: String,
alias: 'IdLuogo',

},
__Dati_Numero002: {
type: Number,
alias: 'IdUtente',

},
__Dati_Ora001: {
type: String,
alias: 'IntervalloTempo',

},
__Dati_Testo003: {
type: String,
alias: 'Visualizzazione',

},
__Dati_Data001: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'Settimana',

},
__Dati_Testo004: {
type: String,
alias: 'IdLuogo01',

},
__Dati_Testo005: {
type: String,
alias: 'IdLuogo02',

},
__Dati_Testo006: {
type: String,
alias: 'IdLuogo03',

},
__Dati_Testo007: {
type: String,
alias: 'IdLuogo04',

},
__Dati_Testo008: {
type: String,
alias: 'IdLuogo05',

},
__Dati_Testo009: {
type: String,
alias: 'IdLuogo06',

},
__Dati_Testo010: {
type: String,
alias: 'IdLuogo07',

},
__Dati_Testo011: {
type: String,
alias: 'IdLuogo08',

},
__Dati_Testo012: {
type: String,
alias: 'IdLuogo09',

},
__Dati_Testo013: {
type: String,
alias: 'TxtLuogo',

},
__Dati_Testo014: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo015: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Testo016: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo017: {
type: String,
alias: 'IdAppoggioVisualizzazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AppoggioVisualizzazioneSchema;