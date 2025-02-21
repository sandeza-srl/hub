import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISottoMenuOriginePrivate } from './SottoMenuOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const SottoMenuOrigineSchema = new mongoose.Schema<ISottoMenuOriginePrivate>({

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
alias: 'OrdineSottomenu',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagDisponibile',

},
__Dati_Testo002: {
type: String,
alias: 'NomeIcona',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgSottomenu',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagMobile',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagPersonalizzato',

},
__Dati_Numero007: {
type: Number,
alias: 'Zero',

},
__Dati_Data001: {
type: Date,
alias: 'DataUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero008: {
type: Number,
alias: 'FlagMobileiPad',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoRuolo',

},
__Dati_Testo004: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SottoMenuOrigineSchema;