import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUpdateCostiArticoli_VociPrivate } from './UpdateCostiArticoli_Voci.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateCostiArticoli_VociSchema = new mongoose.Schema<IUpdateCostiArticoli_VociPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdUpdateCostiArticoliVoci',

},
__Dati_Testo002: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo003: {
type: String,
alias: 'UtenteModifica',

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
__Dati_Testo004: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo005: {
type: String,
alias: 'IdUpdateCostiArticoli',

},
__Dati_Numero001: {
type: Number,
alias: 'CostoOrarioAddettoAggiuntivo_Attuale',

},
__Dati_Numero002: {
type: Number,
alias: 'CostoOrarioAddettoAttrezzaggio_Attuale',

},
__Dati_Numero003: {
type: Number,
alias: 'CostoOrarioAddettoFermoMacchina_Attuale',

},
__Dati_Numero004: {
type: Number,
alias: 'CostoOrarioAddettoProduzione_Attuale',

},
__Dati_Numero005: {
type: Number,
alias: 'CostoOrarioMacchinaAttrezzaggio_Attuale',

},
__Dati_Numero006: {
type: Number,
alias: 'CostoOrarioMacchinaFermoMacchina_Attuale',

},
__Dati_Numero007: {
type: Number,
alias: 'CostoOrarioMacchinaProduzione_Attuale',

},
__Dati_Numero008: {
type: Number,
alias: 'QuotaAddettoAttrezzaggio_Attuale',

},
__Dati_Numero009: {
type: Number,
alias: 'QuotaAddettoFermoMacchina_Attuale',

},
__Dati_Numero010: {
type: Number,
alias: 'QuotaAddettoProduzione_Attuale',

},
__Dati_Numero011: {
type: Number,
alias: 'ResaT_Attuale',

},
__Dati_Numero012: {
type: Number,
alias: 'CostoOrarioAddettoAggiuntivo_Nuovo',

},
__Dati_Numero013: {
type: Number,
alias: 'CostoOrarioAddettoAttrezzaggio_Nuovo',

},
__Dati_Numero014: {
type: Number,
alias: 'CostoOrarioAddettoFermoMacchina_Nuovo',

},
__Dati_Numero015: {
type: Number,
alias: 'CostoOrarioAddettoProduzione_Nuovo',

},
__Dati_Numero016: {
type: Number,
alias: 'CostoOrarioMacchinaAttrezzaggio_Nuovo',

},
__Dati_Numero017: {
type: Number,
alias: 'CostoOrarioMacchinaFermoMacchina_Nuovo',

},
__Dati_Numero018: {
type: Number,
alias: 'CostoOrarioMacchinaProduzione_Nuovo',

},
__Dati_Numero019: {
type: Number,
alias: 'QuotaAddettoAttrezzaggio_Nuovo',

},
__Dati_Numero020: {
type: Number,
alias: 'QuotaAddettoFermoMacchina_Nuovo',

},
__Dati_Numero021: {
type: Number,
alias: 'QuotaAddettoProduzione_Nuovo',

},
__Dati_Numero022: {
type: Number,
alias: 'ResaT_Nuovo',

},
__Dati_Numero023: {
type: Number,
alias: 'NumeroAddetti_Attuale',

},
__Dati_Numero024: {
type: Number,
alias: 'NumeroAddetti_Nuovo',

},
__Dati_Numero025: {
type: Number,
alias: 'Uno',

},
__Dati_Numero026: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceTxtRisorsa',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero027: {
type: Number,
alias: 'FlagExport',

},
__Dati_Numero028: {
type: Number,
alias: 'FlagDaProcessare',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo010: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo011: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo012: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoli_VociSchema;