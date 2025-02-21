import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociCalcoloFornitureItemsPrivate } from './VociCalcoloFornitureItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociCalcoloFornitureItemsSchema = new mongoose.Schema<IVociCalcoloFornitureItemsPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdVoceCalcoloFornitura',

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
alias: 'IdFornituraItem',

},
__Dati_Testo005: {
type: String,
alias: 'IdFornituraItemFattore',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'IdVoceCalcoloFornituraSottofamigliaItem',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagMaster',

},
__Dati_Testo007: {
type: String,
alias: 'IdItemFornituraFattore',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceTxtItemFornituraFattore',

},
__Dati_Testo009: {
type: String,
alias: 'TxtFornituraItemFattore',

},
__Dati_Data001: {
type: Date,
alias: 'DataFornituraItemFattore',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'ValoreFornituraFattore',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAggiornaDaFornituraFattore',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociCalcoloFornitureItemsSchema;