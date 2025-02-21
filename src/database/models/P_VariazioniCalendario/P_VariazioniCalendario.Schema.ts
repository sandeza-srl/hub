import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_VariazioniCalendarioPrivate } from './P_VariazioniCalendario.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_VariazioniCalendarioSchema = new mongoose.Schema<IP_VariazioniCalendarioPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdReparto',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

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
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraFine',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra003: {
type: Date,
alias: 'DataOreChiusure',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo005: {
type: String,
alias: 'IdLuogo',

},
__Dati_Testo006: {
type: String,
alias: 'IdOperatoreProduzione',

},
__Dati_Testo007: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo008: {
type: String,
alias: 'IdVariazioneCalendario',

},
__Dati_Testo009: {
type: String,
alias: 'TxtVariazioniCalendario',

},
__Dati_Testo010: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiungi',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagRimuovi',

},
__Dati_Data001: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'OraInizio',

},
__Dati_Ora002: {
type: String,
alias: 'OraFine',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagPeriodoContinuo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagApplicaTutto',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagApplicaReparto',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagApplicaRisorsa',

},
__Dati_Testo011: {
type: String,
alias: 'Nota',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAttiva',

},
__Dati_Data003: {
type: Date,
alias: 'DataCorrente',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Testo013: {
type: String,
alias: 'TxtReparto',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagAggiorna',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_VariazioniCalendarioSchema;