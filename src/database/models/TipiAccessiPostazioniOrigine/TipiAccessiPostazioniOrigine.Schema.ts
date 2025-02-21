import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiAccessiPostazioniOriginePrivate } from './TipiAccessiPostazioniOrigine.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiAccessiPostazioniOrigineSchema = new mongoose.Schema<ITipiAccessiPostazioniOriginePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'StazioneRaccoltaDati_IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'StazioneRaccoltaDati_Produzione_IdReparto',

},
__Dati_Testo003: {
type: String,
alias: 'StazioneRaccoltaDati_Produzione_TxtReparto',

},
__Dati_Testo004: {
type: String,
alias: 'TxtStazioneRaccoltaDati',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdTipiAccessiPostazioni',

},
__Dati_Testo006: {
type: String,
alias: 'StazioneRaccoltaDati_Produzione_IdOperatoreProduzione',

},
__Dati_Testo007: {
type: String,
alias: 'StazioneRaccoltaDati_Produzione_TxtOperatoreProduzione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaDaPostazioni',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimoAccesso',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'StazioneRaccoltaDati_TempoAnnullamentoRegistrazione',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'IdPostazione',

},
__Dati_Testo010: {
type: String,
alias: 'StazioneRaccoltaDati_IdStazioneRaccoltaDati',

},
__Dati_Numero005: {
type: Number,
alias: 'Accesso_Tipo_FlagUfficio',

},
__Dati_Numero006: {
type: Number,
alias: 'Accesso_Tipo_FlagStazioneRaccoltaDati',

},
__Dati_Numero007: {
type: Number,
alias: 'Accesso_Tipo_FlagStazioneMobile',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagReset',

},
__Dati_Numero009: {
type: Number,
alias: 'Accesso_Dati_Offline',

},
__Dati_Numero010: {
type: Number,
alias: 'Postazione_Tipo_FlagIPad',

},
__Dati_Numero011: {
type: Number,
alias: 'Postazione_Tipo_FlagIPhone',

},
__Dati_Numero012: {
type: Number,
alias: 'Postazione_Tipo_FlagComputer_Mac',

},
__Dati_Numero013: {
type: Number,
alias: 'Postazione_Tipo_FlagComputer_Win',

},
__Dati_Numero014: {
type: Number,
alias: 'Accesso_FlagAccessoCorrente',

},
__Dati_Numero015: {
type: Number,
alias: 'Postazione_Tipo_FlagComputer',

},
__Dati_Testo011: {
type: String,
alias: 'Postazione_SO_StoricoUserNameRaccoltaDati',

},
__Dati_DataOra004: {
type: Date,
alias: 'Postazione_SO_StoricoUserNameRaccoltaDatiUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'Postazione_SO_UserName',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagBloccatoPerUtentiMultipliConStessoUUID',

},
__Dati_Testo013: {
type: String,
alias: 'IdUtente',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiAccessiPostazioniOrigineSchema;