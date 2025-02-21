import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiListinoPrivate } from './TipiListino.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiListinoSchema = new mongoose.Schema<ITipiListinoPrivate>({

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
alias: 'IdTipoListino',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoListino',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagVendita',

},
__Dati_Numero003: {
type: Number,
alias: 'Priorita',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagListinoPrincipale',

},
__Dati_Numero005: {
type: Number,
alias: 'VariazionePercentuale',

},
__Dati_Numero006: {
type: Number,
alias: 'VariazioneUnitaria',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoListinoDiRiferimento',

},
__Dati_Testo004: {
type: String,
alias: 'TxtTipoListinoDiRiferimento',

},
__Dati_Testo005: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo006: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Data001: {
type: Date,
alias: 'DataInizioValidita',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFineValidita',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero007: {
type: Number,
alias: 'FlagValidoSempre',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagValiditaData',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagValiditaFamiglia',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagValiditaSottoFamiglia',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagValoreRicarico',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagValoreFisso',

},
__Dati_Numero013: {
type: Number,
alias: 'PercentualeRicarico',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipoListinoOrigine',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagDaEsportare',

},
__Dati_Testo009: {
type: String,
alias: 'IdFamigliaItemOrigine',

},
__Dati_Testo010: {
type: String,
alias: 'IdSottoFamigliaItemOrigine',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagListinoIvato',

},
__Dati_Numero016: {
type: Number,
alias: 'QuantitaMinima',

},
__Dati_Numero017: {
type: Number,
alias: 'Zero',

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
__Dati_Testo011: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo012: {
type: String,
alias: 'IdTipologiaAnagrafica',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagCondizioniGlobali',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceTipoListino',

},
__Dati_Numero021: {
type: Number,
alias: 'VariazionePercentuale_Sconto1',

},
__Dati_Numero022: {
type: Number,
alias: 'VariazionePercentuale_Sconto2',

},
__Dati_Numero023: {
type: Number,
alias: 'VariazionePercentuale_Sconto3',

},
__Dati_Testo014: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Testo015: {
type: String,
alias: 'IdTipoDocContabile',

},
__Dati_Testo016: {
type: String,
alias: 'IdTipoOfferta',

},
__Dati_Numero024: {
type: Number,
alias: 'ValoreMinimo',

},
__Dati_Numero025: {
type: Number,
alias: 'FlagAnnullaVariazioni',

},
__Dati_Numero026: {
type: Number,
alias: 'VariazionePercentuale_PrezzoIniziale',

},
__Dati_Numero027: {
type: Number,
alias: 'VariazioneUnitaria_PrezzoIniziale',

},
__Dati_Testo017: {
type: String,
alias: 'IdAccountProduttore',

},
__Dati_Numero028: {
type: Number,
alias: 'VariazionePercentuale_PrezzoIniziale_Sconto1',

},
__Dati_Numero029: {
type: Number,
alias: 'VariazionePercentuale_PrezzoIniziale_Sconto2',

},
__Dati_Numero030: {
type: Number,
alias: 'VariazionePercentuale_PrezzoIniziale_Sconto3',

},
__Dati_Numero031: {
type: Number,
alias: 'VariazioneUnitaria_PrezzoIniziale_Sconto1',

},
__Dati_Numero032: {
type: Number,
alias: 'VariazioneUnitaria_PrezzoIniziale_Sconto2',

},
__Dati_Numero033: {
type: Number,
alias: 'VariazioneUnitaria_PrezzoIniziale_Sconto3',

},
__Dati_Numero034: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems',

},
__Dati_Testo018: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Testo019: {
type: String,
alias: 'IdItem',

},
__Dati_Numero035: {
type: Number,
alias: 'FlagWeb',

},
__Dati_Numero036: {
type: Number,
alias: 'FlagMobile',

},
__Dati_Numero037: {
type: Number,
alias: 'FlagPrezzoFissoComeValoreDiPartenza',

},
__Dati_Numero038: {
type: Number,
alias: 'FlagValoreDaFornituraItemCorrelato',

},
__Dati_Numero039: {
type: Number,
alias: 'FlagCalcoloValido',

},
__Dati_Testo020: {
type: String,
alias: 'Formula_Calcolo',

},
__Dati_Testo021: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiListinoSchema;