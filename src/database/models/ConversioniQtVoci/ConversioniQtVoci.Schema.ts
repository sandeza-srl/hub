import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IConversioniQtVociPrivate } from './ConversioniQtVoci.Types.Private';


/* --------
* Schema Definition
* -------- */
const ConversioniQtVociSchema = new mongoose.Schema<IConversioniQtVociPrivate>({

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
alias: 'IdAccountCompagnia',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo002: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Testo003: {
type: String,
alias: 'UnitaMisuraVoce',

},
__Dati_Testo004: {
type: String,
alias: 'UnitaMisuraAlternativa',

},
__Dati_Testo005: {
type: String,
alias: 'IdItem',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaCalcoli',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAggiornaRiferimentiVoci',

},
__Dati_Numero005: {
type: Number,
alias: 'QuantitaVoce',

},
__Dati_Numero006: {
type: Number,
alias: 'ConversioneUmItemUmAlternativa',

},
__Dati_Numero007: {
type: Number,
alias: 'ConversioneUmAlternativaUmItem',

},
__Dati_Numero008: {
type: Number,
alias: 'QuantitaAlternativa',

},
__Dati_Numero009: {
type: Number,
alias: 'NumeroDecimaliQuantita',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'IdConversioniQtVoci',

},
__Dati_Testo008: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ConversioniQtVociSchema;