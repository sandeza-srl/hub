import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICasseBanchePrivate } from './CasseBanche.Types.Private';


/* --------
* Schema Definition
* -------- */
const CasseBancheSchema = new mongoose.Schema<ICasseBanchePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo002: {
type: String,
alias: 'IdCassaBanca',

},
__Dati_Testo003: {
type: String,
alias: 'TxtAccount',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo004: {
type: String,
alias: 'TxtCassaBanca',

},
__Dati_Testo005: {
type: String,
alias: 'Filiale',

},
__Dati_Testo006: {
type: String,
alias: 'Iban',

},
__Dati_Testo007: {
type: String,
alias: 'DescrizioneStampabile',

},
__Dati_Testo008: {
type: String,
alias: 'SwiftCode',

},
__Dati_Numero002: {
type: Number,
alias: 'ProgCassaBanca',

},
__Dati_Testo009: {
type: String,
alias: 'Tipologia',

},
__Dati_Numero003: {
type: Number,
alias: 'ValoreIniziale',

},
__Dati_Numero004: {
type: Number,
alias: 'ValoreIn',

},
__Dati_Numero005: {
type: Number,
alias: 'ValoreOut',

},
__Dati_Numero006: {
type: Number,
alias: 'ValoreAttuale',

},
__Dati_Numero007: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo010: {
type: String,
alias: 'IdTipoCassaBanca',

},
__Dati_Testo011: {
type: String,
alias: 'TxtTipoCassaBanca',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero008: {
type: Number,
alias: 'FlagAttiva',

},
__Dati_Testo012: {
type: String,
alias: 'IdCassaBancaCollegata',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagCassaBancaCollegata',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceContabile',

},
__Dati_Testo014: {
type: String,
alias: 'ABI',

},
__Dati_Testo015: {
type: String,
alias: 'CAB',

},
__Dati_Testo016: {
type: String,
alias: 'CodiceCodifica',

},
__Dati_Numero010: {
type: Number,
alias: 'Zero',

},
__Dati_Testo017: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo018: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo019: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CasseBancheSchema;