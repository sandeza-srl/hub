import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociCalcoloFornitureSottofamiglieItemsPrivate } from './VociCalcoloFornitureSottofamiglieItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociCalcoloFornitureSottofamiglieItemsSchema = new mongoose.Schema<IVociCalcoloFornitureSottofamiglieItemsPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdVoceCalcoloFornituraSottofamigliaItem',

},
__Dati_Testo002: {
type: String,
alias: 'TxtVoceCalcoloFornitura',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceVoceCalcoloFornitura',

},
__Dati_Testo004: {
type: String,
alias: 'IdSottofamigliaItem',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagMaster',

},
__Dati_Testo005: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociCalcoloFornitureSottofamiglieItemsSchema;