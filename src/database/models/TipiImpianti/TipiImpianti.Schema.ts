import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiImpiantiPrivate } from './TipiImpianti.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiImpiantiSchema = new mongoose.Schema<ITipiImpiantiPrivate>({

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
alias: 'IdTipoImpianto',

},
__Dati_Testo002: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo003: {
type: String,
alias: 'IdSottoFamigliaItem',

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
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'TxtTipoImpianto',

},
__Dati_Testo006: {
type: String,
alias: 'IdItem',

},
__Dati_Testo007: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo008: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceTipoImpianto',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Numero004: {
type: Number,
alias: 'NumeroImpiantiAttivi',

},
__Dati_Numero005: {
type: Number,
alias: 'NumeroImpiantiRiparazione',

},
__Dati_Numero006: {
type: Number,
alias: 'NumeroImpiantiRottamati',

},
__Dati_Numero007: {
type: Number,
alias: 'NumeroImpiantiTotali',

},
__Dati_Testo010: {
type: String,
alias: 'IdAccountResponsabile',

},
__Dati_Testo011: {
type: String,
alias: 'IdImgIdentificativa',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgIdentificativa',

},
__Dati_Testo012: {
type: String,
alias: 'TxtAccountResponsabile',

},
__Dati_Numero008: {
type: Number,
alias: 'NumeroImpiantiDisponibili',

},
__Dati_Testo013: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiImpiantiSchema;