import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImpostazioniEtichettePrivate } from './ImpostazioniEtichette.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImpostazioniEtichetteSchema = new mongoose.Schema<IImpostazioniEtichettePrivate>({

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
alias: 'NomeFormato',

},
__Dati_Testo002: {
type: String,
alias: 'TxtImpostazioneEtichetta',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagStandard',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountDocOperativo',

},
__Dati_Testo004: {
type: String,
alias: 'TxtAccountDocOperativo',

},
__Dati_Testo005: {
type: String,
alias: 'IdImpostazioneEtichetta',

},
__Dati_Testo006: {
type: String,
alias: 'IdSedeDestinazione',

},
__Dati_Testo007: {
type: String,
alias: 'TxtSedeDestinazione',

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
__Dati_Testo008: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo009: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo010: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo011: {
type: String,
alias: 'IdAccountDestinatario',

},
__Dati_Testo012: {
type: String,
alias: 'TxtAccountDestinatario',

},
__Dati_Testo013: {
type: String,
alias: 'IdItem',

},
__Dati_Testo014: {
type: String,
alias: 'CodiceTxtItem',

},
__Dati_Testo015: {
type: String,
alias: 'NomeScriptSetup',

},
__Dati_Testo016: {
type: String,
alias: 'NomeScriptStampa',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagDocOperativi',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagWip',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagNoStampa',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagItemNoTracciabilita',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagItemTracciabilitaSeriale',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagItemTracciabilitaNoSeriale',

},
__Dati_Testo017: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo018: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Testo019: {
type: String,
alias: 'IdImpostazioneEtichettaRiassuntiva',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagTipiDocOperativiSelezionati',

},
__Dati_Testo020: {
type: String,
alias: 'TxtTipiDocOperativi',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagImballoParziale',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagImballoFinale',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagItem',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagCollo',

},
__Dati_Testo021: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo022: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo023: {
type: String,
alias: 'IdTipoRigaOrdine',

},
__Dati_Testo024: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Testo025: {
type: String,
alias: 'Lingua',

},
__Dati_Testo026: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagPacchi',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagChiediQuantita',

},
__Dati_Testo027: {
type: String,
alias: 'IdTipoFase',

},
__Dati_Testo028: {
type: String,
alias: 'TxtTipoFase',

},
__Dati_Numero017: {
type: Number,
alias: 'EtichettaRiassuntiva_FlagChiediConferma',

},
__Dati_Testo029: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ImpostazioniEtichetteSchema;