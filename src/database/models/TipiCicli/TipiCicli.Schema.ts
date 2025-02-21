import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiCicliPrivate } from './TipiCicli.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiCicliSchema = new mongoose.Schema<ITipiCicliPrivate>({

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
alias: 'IdTipoCiclo',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoCiclo',

},
__Dati_Numero002: {
type: Number,
alias: 'PercQtIniziale',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceTipoCiclo',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'TipoCiclo_FlagRilavorazione',

},
__Dati_Numero004: {
type: Number,
alias: 'PercScartoPrevista',

},
__Dati_Numero005: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'CodiceTxtTipoCicloAutomatico',

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
__Dati_Testo006: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo007: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo010: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo011: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Numero006: {
type: Number,
alias: 'TipoCiclo_FlagSmontaggio',

},
__Dati_Numero007: {
type: Number,
alias: 'Abilitazioni_FlagCreaFaseAbilitato',

},
__Dati_Numero008: {
type: Number,
alias: 'Abilitazioni_FlagEliminaFaseAbilitato',

},
__Dati_Testo012: {
type: String,
alias: 'Note',

},
__Dati_Testo013: {
type: String,
alias: 'IdTipiFaseAbilitati',

},
__Dati_Numero009: {
type: Number,
alias: 'Abilitazioni_FlagModificaSequenzaFasiAbilitato',

},
__Dati_Testo014: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiCicliSchema;