import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOperatoriPresenzePrivate } from './OperatoriPresenze.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriPresenzeSchema = new mongoose.Schema<IOperatoriPresenzePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

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
__Dati_Ora001: {
type: String,
alias: 'OraFine',

},
__Dati_Ora002: {
type: String,
alias: 'OraInizio',

},
__Dati_Ora003: {
type: String,
alias: 'Durata',

},
__Dati_Testo002: {
type: String,
alias: 'DataOraTutti',

},
__Dati_Testo003: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo004: {
type: String,
alias: 'IdOperatoriPresenze',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriPresenzeSchema;