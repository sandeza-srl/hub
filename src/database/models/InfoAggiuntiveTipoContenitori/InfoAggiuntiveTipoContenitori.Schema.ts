import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInfoAggiuntiveTipoContenitoriPrivate } from './InfoAggiuntiveTipoContenitori.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoAggiuntiveTipoContenitoriSchema = new mongoose.Schema<IInfoAggiuntiveTipoContenitoriPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipoContenitore',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'Etichetta',

},
__Dati_Testo003: {
type: String,
alias: 'Contenuto',

},
__Dati_Testo004: {
type: String,
alias: 'IdInfoAggiuntivaTipoContenitore',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

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
export default InfoAggiuntiveTipoContenitoriSchema;