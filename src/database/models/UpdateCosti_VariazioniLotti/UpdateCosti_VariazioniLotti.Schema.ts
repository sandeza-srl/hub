import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUpdateCosti_VariazioniLottiPrivate } from './UpdateCosti_VariazioniLotti.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateCosti_VariazioniLottiSchema = new mongoose.Schema<IUpdateCosti_VariazioniLottiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'CodiceArticolo',

},
__Dati_Testo002: {
type: String,
alias: 'CodiceLottoProduzione',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceRigaOrdine',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceTxtArticoloAutomatico',

},
__Dati_Numero001: {
type: Number,
alias: 'CTAD_PostEsecuzione',

},
__Dati_Numero002: {
type: Number,
alias: 'CTB_PostEsecuzione',

},
__Dati_Numero003: {
type: Number,
alias: 'CTF_PostEsecuzione',

},
__Dati_Numero004: {
type: Number,
alias: 'CTL_PostEsecuzione',

},
__Dati_Numero005: {
type: Number,
alias: 'CTLE_PostEsecuzione',

},
__Dati_Numero006: {
type: Number,
alias: 'CTM_PostEsecuzione',

},
__Dati_Numero007: {
type: Number,
alias: 'CTP_PostEsecuzione',

},
__Dati_Numero008: {
type: Number,
alias: 'CTQ_PostEsecuzione',

},
__Dati_Numero009: {
type: Number,
alias: 'CTS_PostEsecuzione',

},
__Dati_Numero010: {
type: Number,
alias: 'CTT_PostEsecuzione',

},
__Dati_Numero011: {
type: Number,
alias: 'CTT_Ricarico_PostEsecuzione',

},
__Dati_Numero012: {
type: Number,
alias: 'CTTRA_PreEsecuzione',

},
__Dati_Numero013: {
type: Number,
alias: 'CTUt_PostEsecuzione',

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
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo006: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo007: {
type: String,
alias: 'IdLottoProduzione',

},
__Dati_Testo008: {
type: String,
alias: 'IdRigaOrdine',

},
__Dati_Testo009: {
type: String,
alias: 'IdTipoRigaOrdine',

},
__Dati_Testo010: {
type: String,
alias: 'TxtArticolo',

},
__Dati_Numero014: {
type: Number,
alias: 'Uno',

},
__Dati_Numero015: {
type: Number,
alias: 'Zero',

},
__Dati_Testo011: {
type: String,
alias: 'IdSessioneUpdateCosti',

},
__Dati_Testo012: {
type: String,
alias: 'IdVariazioneLottoUpdateCosti',

},
__Dati_Testo013: {
type: String,
alias: 'IdDocOperativoOrigine',

},
__Dati_Testo014: {
type: String,
alias: 'IdDocOperativoCaricoFiniti',

},
__Dati_Numero016: {
type: Number,
alias: 'LivelloMassimoDistinta',

},
__Dati_Testo015: {
type: String,
alias: 'IdItemArticolo',

},
__Dati_Numero017: {
type: Number,
alias: 'CTAD_PreEsecuzione',

},
__Dati_Numero018: {
type: Number,
alias: 'CTB_PreEsecuzione',

},
__Dati_Numero019: {
type: Number,
alias: 'CTF_PreEsecuzione',

},
__Dati_Numero020: {
type: Number,
alias: 'CTL_PreEsecuzione',

},
__Dati_Numero021: {
type: Number,
alias: 'CTLE_PreEsecuzione',

},
__Dati_Numero022: {
type: Number,
alias: 'CTM_PreEsecuzione',

},
__Dati_Numero023: {
type: Number,
alias: 'CTP_PreEsecuzione',

},
__Dati_Numero024: {
type: Number,
alias: 'CTQ_PreEsecuzione',

},
__Dati_Numero025: {
type: Number,
alias: 'CTS_PreEsecuzione',

},
__Dati_Numero026: {
type: Number,
alias: 'CTT_PreEsecuzione',

},
__Dati_Numero027: {
type: Number,
alias: 'CTT_Ricarico_PreEsecuzione',

},
__Dati_Numero028: {
type: Number,
alias: 'CTUt_PreEsecuzione',

},
__Dati_Numero029: {
type: Number,
alias: 'DiffCTAD',

},
__Dati_Numero030: {
type: Number,
alias: 'DiffCTB',

},
__Dati_Numero031: {
type: Number,
alias: 'DiffCTF',

},
__Dati_Numero032: {
type: Number,
alias: 'DiffCTL',

},
__Dati_Numero033: {
type: Number,
alias: 'DiffCTLE',

},
__Dati_Numero034: {
type: Number,
alias: 'DiffCTM',

},
__Dati_Numero035: {
type: Number,
alias: 'DiffCTP',

},
__Dati_Numero036: {
type: Number,
alias: 'DiffCTQ',

},
__Dati_Numero037: {
type: Number,
alias: 'DiffCTS',

},
__Dati_Numero038: {
type: Number,
alias: 'DiffCTT',

},
__Dati_Numero039: {
type: Number,
alias: 'DiffCTT_Ricarico',

},
__Dati_Numero040: {
type: Number,
alias: 'DiffCTTRA',

},
__Dati_Numero041: {
type: Number,
alias: 'CTTRA_PostEsecuzione',

},
__Dati_Numero042: {
type: Number,
alias: 'DiffCTUt',

},
__Dati_Numero043: {
type: Number,
alias: 'PercDiffCTAD',

},
__Dati_Numero044: {
type: Number,
alias: 'PercDiffCTB',

},
__Dati_Numero045: {
type: Number,
alias: 'PercDiffCTF',

},
__Dati_Numero046: {
type: Number,
alias: 'PercDiffCTL',

},
__Dati_Numero047: {
type: Number,
alias: 'PercDiffCTLE',

},
__Dati_Numero048: {
type: Number,
alias: 'PercDiffCTM',

},
__Dati_Numero049: {
type: Number,
alias: 'PercDiffCTP',

},
__Dati_Numero050: {
type: Number,
alias: 'PercDiffCTQ',

},
__Dati_Numero051: {
type: Number,
alias: 'PercDiffCTS',

},
__Dati_Numero052: {
type: Number,
alias: 'PercDiffCTT',

},
__Dati_Numero053: {
type: Number,
alias: 'PercDiffCTT_Ricarico',

},
__Dati_Numero054: {
type: Number,
alias: 'PercDiffCTTRA',

},
__Dati_Numero055: {
type: Number,
alias: 'PercDiffCTUt',

},
__Dati_Testo016: {
type: String,
alias: 'IdVoceDocOperativoOrigine',

},
__Dati_Numero056: {
type: Number,
alias: 'FlagStato04Saldato',

},
__Dati_Testo017: {
type: String,
alias: 'Avanzamento_TxtStatoLottoProduzione',

},
__Dati_Numero057: {
type: Number,
alias: 'Avanzamento_Percentuale',

},
__Dati_Testo018: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Numero058: {
type: Number,
alias: 'Avanzamento_NumeroFasiSaldate',

},
__Dati_Numero059: {
type: Number,
alias: 'Avanzamento_NumeroFasiTotale',

},
__Dati_Testo019: {
type: String,
alias: 'Avanzamento_ProssimaFaseDaSaldare',

},
__Dati_Testo020: {
type: String,
alias: 'Avanzamento_TxtAutomatico',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateCosti_VariazioniLottiSchema;