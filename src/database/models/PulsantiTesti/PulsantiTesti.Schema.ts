import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPulsantiTestiPrivate } from './PulsantiTesti.Types.Private';


/* --------
* Schema Definition
* -------- */
const PulsantiTestiSchema = new mongoose.Schema<IPulsantiTestiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdLingua',

},
__Dati_Numero001: {
type: Number,
alias: 'IdPulsante',

},
__Dati_Testo002: {
type: String,
alias: 'TxtPulsante',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagLinguaPredefinita',

},
__Dati_Data001: {
type: Date,
alias: 'DataUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Testo003: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PulsantiTestiSchema;