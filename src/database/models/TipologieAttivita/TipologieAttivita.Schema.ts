import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipologieAttivitaPrivate } from './TipologieAttivita.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipologieAttivitaSchema = new mongoose.Schema<ITipologieAttivitaPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipologiaAttivita',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipologiaAttivita',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipologieAttivitaSchema;