import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUtentePulsantiPrivate } from './UtentePulsanti.Types.Private';


/* --------
* Schema Definition
* -------- */
const UtentePulsantiSchema = new mongoose.Schema<IUtentePulsantiPrivate>({

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
alias: 'TxtUtente',

},
__Dati_Numero002: {
type: Number,
alias: 'IdSottomenu',

},
__Dati_Testo002: {
type: String,
alias: 'TxtSottomenu',

},
__Dati_Numero003: {
type: Number,
alias: 'IdPulsante',

},
__Dati_Testo003: {
type: String,
alias: 'TxtPulsante',

},
__Dati_Testo004: {
type: String,
alias: 'IdUtente',

},
__Dati_Numero004: {
type: Number,
alias: 'OrdinePulsante',

},
__Dati_Testo005: {
type: String,
alias: 'IdLingua',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgIcona',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagStrutturale',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagMobileIpad',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagMobile',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagSandeza',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagPersonalizzato',

},
__Dati_Testo006: {
type: String,
alias: 'IdItemModulo',

},
__Dati_Testo007: {
type: String,
alias: 'IdTipoRuolo',

},
__Dati_Numero010: {
type: Number,
alias: 'NumeroStessoPulsantePerUtente',

},
__Dati_Numero011: {
type: Number,
alias: 'Zero',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

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
__Dati_Numero012: {
type: Number,
alias: 'FlagRecordImportato',

},
__Dati_Testo009: {
type: String,
alias: 'IdUtentePulsante',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UtentePulsantiSchema;