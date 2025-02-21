import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOperatoriAbilitatiPrivate } from './OperatoriAbilitati.Types.Private';


/* --------
* Schema Definition
* -------- */
const OperatoriAbilitatiSchema = new mongoose.Schema<IOperatoriAbilitatiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'IdOperatoreAbilitato',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo002: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo003: {
type: String,
alias: 'IdItem',

},
__Dati_Testo004: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo005: {
type: String,
alias: 'AbilitaOperatoreTesto',

},
__Dati_Numero003: {
type: Number,
alias: 'AbilitaOperatoreNumero',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceItem',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

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
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems',

},
__Dati_Numero006: {
type: Number,
alias: 'IdOperatoriAbilitati',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OperatoriAbilitatiSchema;