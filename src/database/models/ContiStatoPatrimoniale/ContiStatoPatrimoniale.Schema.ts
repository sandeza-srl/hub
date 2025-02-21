import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IContiStatoPatrimonialePrivate } from './ContiStatoPatrimoniale.Types.Private';


/* --------
* Schema Definition
* -------- */
const ContiStatoPatrimonialeSchema = new mongoose.Schema<IContiStatoPatrimonialePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'CodiceVisualizza',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Testo004: {
type: String,
alias: 'IdContoStatoPatrimoniale',

},
__Dati_Testo005: {
type: String,
alias: 'TxtTipoContoStatoPatrimoniale',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'VPassivo',

},
__Dati_Numero003: {
type: Number,
alias: 'VAttivo',

},
__Dati_Testo006: {
type: String,
alias: 'IdTipoContoStatoPatrimoniale',

},
__Dati_Numero004: {
type: Number,
alias: 'VSaldo',

},
__Dati_Testo007: {
type: String,
alias: 'IdPeriodoContabile',

},
__Dati_Testo008: {
type: String,
alias: 'TxtPeriodoContabile',

},
__Dati_Data001: {
type: Date,
alias: 'DataDocContabile',
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
__Dati_Data002: {
type: Date,
alias: 'DataRegistrazioneDocContabile',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero005: {
type: Number,
alias: 'Zero',

},
__Dati_Testo009: {
type: String,
alias: 'FlagSaldo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagFisco',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagIva',

},
__Dati_Testo010: {
type: String,
alias: 'ClasseTipoContoStatoPatrimoniale',

},
__Dati_Testo011: {
type: String,
alias: 'SottoClasseTipoContoStatoPatrimoniale',

},
__Dati_Testo012: {
type: String,
alias: 'CodiceContabile',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaSaldo',

},
__Dati_Testo013: {
type: String,
alias: 'IdPagamento',

},
__Dati_Testo014: {
type: String,
alias: 'FlagPagamento',

},
__Dati_Testo015: {
type: String,
alias: 'IdCassaBanca',

},
__Dati_Testo016: {
type: String,
alias: 'IdContiDaSaldare',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagPassivo',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAutomatica',

},
__Dati_Testo017: {
type: String,
alias: 'TxtOperazione',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagContiClienti',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagContiFornitori',

},
__Dati_Testo018: {
type: String,
alias: 'CodiceClienteContabile',

},
__Dati_Testo019: {
type: String,
alias: 'CodiceFornitoreContabile',

},
__Dati_Testo020: {
type: String,
alias: 'TxtAccountFornitore',

},
__Dati_Testo021: {
type: String,
alias: 'TxtAccountCliente',

},
__Dati_Testo022: {
type: String,
alias: 'IdAccountCliente',

},
__Dati_Testo023: {
type: String,
alias: 'IdAccountFornitore',

},
__Dati_Testo024: {
type: String,
alias: 'CodiceTipoContoStatoPatrimoniale',

},
__Dati_Testo025: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo026: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ContiStatoPatrimonialeSchema;