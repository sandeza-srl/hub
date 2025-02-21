import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiSchedeValutazionePrivate } from './TipiSchedeValutazione.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiSchedeValutazioneSchema = new mongoose.Schema<ITipiSchedeValutazionePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdTipoSchedaValutazione',

},
__Dati_Testo003: {
type: String,
alias: 'TxtTipoSchedaValutazione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagClienteFinale',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagClientePrimario',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagCompagnia',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagDistributore',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagFornitore',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagOperatore',

},
__Dati_Testo004: {
type: String,
alias: 'NoteValutazione',

},
__Dati_Numero008: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo006: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiSchedeValutazioneSchema;