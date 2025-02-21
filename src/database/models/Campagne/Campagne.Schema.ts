import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICampagnePrivate } from './Campagne.Types.Private';


/* --------
* Schema Definition
* -------- */
const CampagneSchema = new mongoose.Schema<ICampagnePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdCampagna',

},
__Dati_Testo002: {
type: String,
alias: 'TxtCampagna',

},
__Dati_Testo003: {
type: String,
alias: 'Note',

},
__Dati_Numero001: {
type: Number,
alias: 'Progressivo',

},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data003: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo004: {
type: String,
alias: 'TxtTipoCampagna',

},
__Dati_Testo005: {
type: String,
alias: 'LettereTxtCampagna',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceCampagna',

},
__Dati_Testo007: {
type: String,
alias: 'CodiceTipoCampagna',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipoCampagna',

},
__Dati_Numero002: {
type: Number,
alias: 'AnnoCreazione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagBloccato',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo010: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo011: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Numero004: {
type: Number,
alias: 'Uno',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CampagneSchema;