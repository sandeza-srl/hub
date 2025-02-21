import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ILogGiacenzePrivate } from './LogGiacenze.Types.Private';


/* --------
* Schema Definition
* -------- */
const LogGiacenzeSchema = new mongoose.Schema<ILogGiacenzePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Data001: {
type: Date,
alias: 'DataValorizzazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'QtGiacenza',

},
__Dati_Testo001: {
type: String,
alias: 'IdItem',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'AnnoMese',

},
__Dati_Numero004: {
type: Number,
alias: 'VGiacenzaUnitario',

},
__Dati_Numero005: {
type: Number,
alias: 'VUnitarioFornituraStandard',

},
__Dati_Testo003: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Numero006: {
type: Number,
alias: 'Zero',

},
__Dati_Numero007: {
type: Number,
alias: 'AnnoSettimana',

},
__Dati_Numero008: {
type: Number,
alias: 'VGiacenzaTotale',

},
__Dati_Testo004: {
type: String,
alias: 'IdValorizzazioneMagazzino',

},
__Dati_Testo005: {
type: String,
alias: 'IdLottoProduzione',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagValorizzazioneConsolidata',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagMagaCespite',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagMagaMateriaPrima',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagMagaProdottoFinito',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagMagaSemilavorato',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagMagaValorizzaCosto',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagMagaValorizzaPrezzo',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagItem',

},
__Dati_Numero017: {
type: Number,
alias: 'Anno',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagWip',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Testo007: {
type: String,
alias: 'IdValorizzazioneMagazzino_UltimaConsolidata',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagCalcoloEseguito',

},
__Dati_Data002: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo008: {
type: String,
alias: 'TxtCalcolo',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceLottoProduzione',

},
__Dati_Testo010: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo011: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Numero020: {
type: Number,
alias: 'QtDaOttenere_DOp',

},
__Dati_Numero021: {
type: Number,
alias: 'QtFabbisognoAttivo_DOp',

},
__Dati_Numero022: {
type: Number,
alias: 'QtInArrivo_DOp',

},
__Dati_Testo012: {
type: String,
alias: 'UnitaMisura',

},
__Dati_Testo013: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo014: {
type: String,
alias: 'TxtSottofamigliaItem',

},
__Dati_Testo015: {
type: String,
alias: 'TxtTipoValorizzazioneAutomatico',

},
__Dati_Testo016: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo017: {
type: String,
alias: 'IdLogGiacenza',

},
__Dati_Numero023: {
type: Number,
alias: 'Wip_CTAD_R',

},
__Dati_Numero024: {
type: Number,
alias: 'Wip_CTB_R',

},
__Dati_Numero025: {
type: Number,
alias: 'Wip_CTF_R',

},
__Dati_Numero026: {
type: Number,
alias: 'Wip_CTL_R',

},
__Dati_Numero027: {
type: Number,
alias: 'Wip_CTLE_R',

},
__Dati_Numero028: {
type: Number,
alias: 'Wip_CTM_R',

},
__Dati_Numero029: {
type: Number,
alias: 'Wip_CTP_R',

},
__Dati_Numero030: {
type: Number,
alias: 'Wip_CTQ_R',

},
__Dati_Numero031: {
type: Number,
alias: 'Wip_CTS_R',

},
__Dati_Numero032: {
type: Number,
alias: 'Wip_CTT_R',

},
__Dati_Numero033: {
type: Number,
alias: 'Wip_CTT_R_Ricarico',

},
__Dati_Numero034: {
type: Number,
alias: 'Wip_CTTRA_R',

},
__Dati_Numero035: {
type: Number,
alias: 'Wip_CTUt_R',

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
__Dati_Testo018: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default LogGiacenzeSchema;