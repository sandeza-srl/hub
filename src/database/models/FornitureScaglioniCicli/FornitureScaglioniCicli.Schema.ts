import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFornitureScaglioniCicliPrivate } from './FornitureScaglioniCicli.Types.Private';


/* --------
* Schema Definition
* -------- */
const FornitureScaglioniCicliSchema = new mongoose.Schema<IFornitureScaglioniCicliPrivate>({

_id: {
type: String,
default: uuid.v4
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
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
__Dati_Testo001: {
type: String,
alias: 'IdScaglione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo002: {
type: String,
alias: 'IdFornituraScaglione',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo004: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo005: {
type: String,
alias: 'IdCiclo',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'IdFornituraItem',

},
__Dati_Testo008: {
type: String,
alias: 'TxtFornituraItem',

},
__Dati_Numero003: {
type: Number,
alias: 'VUnitarioFornitura',

},
__Dati_Numero004: {
type: Number,
alias: 'QtFase',

},
__Dati_Numero005: {
type: Number,
alias: 'VTotale',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagFornituraMateriale',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagFornituraLavorazione',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagFornituraUtensile',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagFornituraTrasporto',

},
__Dati_Numero010: {
type: Number,
alias: 'GiorniApprovigionamento',

},
__Dati_Testo009: {
type: String,
alias: 'IdFase',

},
__Dati_Testo010: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Numero011: {
type: Number,
alias: 'ConvUmOpzUmFin',

},
__Dati_Numero012: {
type: Number,
alias: 'ConvUmLavorazioneUmOpz',

},
__Dati_Numero013: {
type: Number,
alias: 'Quantita',

},
__Dati_Numero014: {
type: Number,
alias: 'VUnitario',

},
__Dati_Testo011: {
type: String,
alias: 'IdItem',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagAggiornaDaFornitura',

},
__Dati_Testo012: {
type: String,
alias: 'IdItemOpzioneProd',

},
__Dati_Numero016: {
type: Number,
alias: 'QtPerUmOpz',

},
__Dati_Testo013: {
type: String,
alias: 'IdTipoUtensilePerOpzioneProd',

},
__Dati_Numero017: {
type: Number,
alias: 'QtUtensilePerUmOpz',

},
__Dati_Testo014: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo015: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo016: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo017: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FornitureScaglioniCicliSchema;