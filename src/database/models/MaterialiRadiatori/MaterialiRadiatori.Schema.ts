import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMaterialiRadiatoriPrivate } from './MaterialiRadiatori.Types.Private';


/* --------
* Schema Definition
* -------- */
const MaterialiRadiatoriSchema = new mongoose.Schema<IMaterialiRadiatoriPrivate>({

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
alias: 'IdMaterialiRadiatori',

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
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo003: {
type: String,
alias: 'TxtMaterialeRadiatore',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Numero004: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo004: {
type: String,
alias: 'TxtOrdineMaterialeRadiatore',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MaterialiRadiatoriSchema;