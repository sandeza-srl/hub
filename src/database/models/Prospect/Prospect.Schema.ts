import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IProspectPrivate } from './Prospect.Types.Private';


/* --------
* Schema Definition
* -------- */
const ProspectSchema = new mongoose.Schema<IProspectPrivate>({

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
alias: 'IdProspect',

},
__Dati_Testo002: {
type: String,
alias: 'TxtProspect',

},
__Dati_Testo003: {
type: String,
alias: 'RagioneSociale',

},
__Dati_Testo004: {
type: String,
alias: 'Via',

},
__Dati_Testo005: {
type: String,
alias: 'Cap',

},
__Dati_Testo006: {
type: String,
alias: 'Citta',

},
__Dati_Testo007: {
type: String,
alias: 'IdNazione',

},
__Dati_Testo008: {
type: String,
alias: 'Fax',

},
__Dati_Testo009: {
type: String,
alias: 'Web',

},
__Dati_Testo010: {
type: String,
alias: 'TxtLiberoIndirizzo',

},
__Dati_Testo011: {
type: String,
alias: 'NomeNazione',

},
__Dati_Testo012: {
type: String,
alias: 'NomeNazioneIng',

},
__Dati_Testo013: {
type: String,
alias: 'MailAziendale',

},
__Dati_Testo014: {
type: String,
alias: 'Note',

},
__Dati_Testo015: {
type: String,
alias: 'PartitaIva',

},
__Dati_Testo016: {
type: String,
alias: 'Zona',

},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo017: {
type: String,
alias: 'IdCampagna',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagMail',

},
__Dati_Testo018: {
type: String,
alias: 'FlagMailVedi',

},
__Dati_Numero003: {
type: Number,
alias: 'ValutazioneNumero',

},
__Dati_Testo019: {
type: String,
alias: 'ValutazioneTesto',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagChiuso',

},
__Dati_Testo020: {
type: String,
alias: 'FlagChiusoVedi',

},
__Dati_Testo021: {
type: String,
alias: 'ClasseMerceologica',

},
__Dati_Testo022: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo023: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo024: {
type: String,
alias: 'IdAccountCollegato',

},
__Dati_Testo025: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo026: {
type: String,
alias: 'Telefono',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ProspectSchema;