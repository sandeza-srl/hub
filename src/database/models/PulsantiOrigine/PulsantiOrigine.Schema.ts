import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPulsantiOriginePrivate } from './PulsantiOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const PulsantiOrigineSchema = new mongoose.Schema<IPulsantiOriginePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'IdSottomenu',

},
__Dati_Testo001: {
type: String,
alias: 'TxtSottomenu',

},
__Dati_Numero003: {
type: Number,
alias: 'IdPulsante',

},
__Dati_Testo002: {
type: String,
alias: 'TxtPulsante',

},
__Dati_Numero004: {
type: Number,
alias: 'OrdinePulsante',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagDisponibile',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagStrutturale',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgIcona',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagMobile',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagUtente',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagMobileIpad',

},
__Dati_Numero010: {
type: Number,
alias: 'Zero',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagPersonalizzato',

},
__Dati_Testo003: {
type: String,
alias: 'IdItemModulo',

},
__Dati_Testo004: {
type: String,
alias: 'NomeIcona',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagSandeza',

},
__Dati_Data001: {
type: Date,
alias: 'DataUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo005: {
type: String,
alias: 'IdTipoRuolo',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PulsantiOrigineSchema;