import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFirmePrivate } from './Firme.Types.Private';


/* --------
* Schema Definition
* -------- */
const FirmeSchema = new mongoose.Schema<IFirmePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdFirma',

},
__Dati_Testo002: {
type: String,
alias: 'TxtFirma',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgFirma',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo005: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FirmeSchema;