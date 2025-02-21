import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_CalendarioSlotPrivate } from './P_CalendarioSlot.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_CalendarioSlotSchema = new mongoose.Schema<IP_CalendarioSlotPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Data001: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Ora001: {
type: String,
alias: 'OraFine',

},
__Dati_Ora002: {
type: String,
alias: 'OraInizio',

},
__Dati_Testo002: {
type: String,
alias: 'AnnoMese',

},
__Dati_Testo003: {
type: String,
alias: 'AnnoSettimana',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

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
__Dati_Data002: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'GiornoSettimanaNumero',

},
__Dati_Numero004: {
type: Number,
alias: 'NumeroSlot',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAggiorna',

},
__Dati_Testo005: {
type: String,
alias: 'IdSettimanaStandard',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'IdP_CalendarioSlot',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_CalendarioSlotSchema;