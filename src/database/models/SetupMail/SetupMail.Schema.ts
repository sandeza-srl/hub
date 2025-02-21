import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISetupMailPrivate } from './SetupMail.Types.Private';


/* --------
* Schema Definition
* -------- */
const SetupMailSchema = new mongoose.Schema<ISetupMailPrivate>({

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
alias: 'MailMittente',

},
__Dati_Testo002: {
type: String,
alias: 'IndirizzoServerSMTP',

},
__Dati_Numero001: {
type: Number,
alias: 'PortaSMPT',

},
__Dati_Testo003: {
type: String,
alias: 'TestInvio_Oggetto',

},
__Dati_Testo004: {
type: String,
alias: 'TestInvio_Testo',

},
__Dati_Testo005: {
type: String,
alias: 'TestInvio_MailDestinatario',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo007: {
type: String,
alias: 'IdSetupMail',

},
__Dati_Testo008: {
type: String,
alias: 'PasswordMittente_Inserimento',

},
__Dati_Testo009: {
type: String,
alias: 'NomeMittente',

},
__Dati_Testo010: {
type: String,
alias: 'ChiavePerPassword',

},
__Dati_Testo011: {
type: String,
alias: 'PasswordMittente_Visualizza',

},
__Dati_Contenitore001: {
type: String,
alias: 'PasswordMittente_Contenitore',

},
__Dati_Testo012: {
type: String,
alias: 'UserServerSMTP',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SetupMailSchema;