import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IContatoreCalendarioInterventiPrivate } from './ContatoreCalendarioInterventi.Types.Private';


/* --------
* Schema Definition
* -------- */
const ContatoreCalendarioInterventiSchema = new mongoose.Schema<IContatoreCalendarioInterventiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdCalendarioInterventi',

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
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo003: {
type: String,
alias: 'IdIntervento',

},
__Dati_Ora001: {
type: String,
alias: 'TempoTotale',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAperto',

},
__Dati_Testo004: {
type: String,
alias: 'IdVoceIntervento',

},
__Dati_Testo005: {
type: String,
alias: 'CodiceIntervento',

},
__Dati_Testo006: {
type: String,
alias: 'TxtAccountDestinatario',

},
__Dati_Testo007: {
type: String,
alias: 'TxtTipoIntervento',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ContatoreCalendarioInterventiSchema;