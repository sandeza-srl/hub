import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOpzioniProdPrivate } from './OpzioniProd.Types.Private';


/* --------
* Schema Definition
* -------- */
const OpzioniProdSchema = new mongoose.Schema<IOpzioniProdPrivate>({

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
alias: 'IdArticolo',

},
__Dati_Testo002: {
type: String,
alias: 'IdCiclo',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceFase',

},
__Dati_Testo004: {
type: String,
alias: 'TxtFase',

},
__Dati_Testo005: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo006: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Numero002: {
type: Number,
alias: 'SecUmFin_T',

},
__Dati_Numero003: {
type: Number,
alias: 'Resa_T',

},
__Dati_Numero004: {
type: Number,
alias: 'ProdUmFinHP_T',

},
__Dati_Testo007: {
type: String,
alias: 'UmOpzione',

},
__Dati_Numero005: {
type: Number,
alias: 'SecColpo_T',

},
__Dati_Numero006: {
type: Number,
alias: 'ProdUmFinHPF_T',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipoFase',

},
__Dati_Testo009: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Numero007: {
type: Number,
alias: 'ConvUmOpzUmFin',

},
__Dati_Testo010: {
type: String,
alias: 'NoteProduzione',

},
__Dati_Numero008: {
type: Number,
alias: 'NUmOpzColpo_T',

},
__Dati_Numero009: {
type: Number,
alias: 'NUmFinColpo_T',

},
__Dati_Numero010: {
type: Number,
alias: 'SecUmOpz_T',

},
__Dati_Numero011: {
type: Number,
alias: 'ProdUmOpzHP_T',

},
__Dati_Numero012: {
type: Number,
alias: 'ProdUmOpzHPF_T',

},
__Dati_Testo011: {
type: String,
alias: 'NoteImballo',

},
__Dati_Testo012: {
type: String,
alias: 'IdTipoImballo',

},
__Dati_Testo013: {
type: String,
alias: 'NoteUtensili',

},
__Dati_Testo014: {
type: String,
alias: 'IdFamigliaRisorsa',

},
__Dati_Numero013: {
type: Number,
alias: 'CHAddettoAggiuntivo_T',

},
__Dati_Numero014: {
type: Number,
alias: 'CHAD_T',

},
__Dati_Numero015: {
type: Number,
alias: 'CHF_T_Risorsa',

},
__Dati_Numero016: {
type: Number,
alias: 'CHP_T_Risorsa',

},
__Dati_Numero017: {
type: Number,
alias: 'CULE_T_Opz',

},
__Dati_Numero018: {
type: Number,
alias: 'IncidenzaScarto',

},
__Dati_Numero019: {
type: Number,
alias: 'GgLavorazione',

},
__Dati_Numero020: {
type: Number,
alias: 'FrequenzaControllo',

},
__Dati_Testo015: {
type: String,
alias: 'UmFinito',

},
__Dati_Numero021: {
type: Number,
alias: 'NUmOpzColpo_R',

},
__Dati_Numero022: {
type: Number,
alias: 'ProdUmOpzHP_R',

},
__Dati_Numero023: {
type: Number,
alias: 'ProdUmOpzHPF_R',

},
__Dati_Numero024: {
type: Number,
alias: 'NUmFinColpo_R',

},
__Dati_Numero025: {
type: Number,
alias: 'ProdUmFinHP_R',

},
__Dati_Numero026: {
type: Number,
alias: 'ProdUmFinHPF_R',

},
__Dati_Numero027: {
type: Number,
alias: 'Resa_R',

},
__Dati_Numero028: {
type: Number,
alias: 'SecColpo_R',

},
__Dati_Numero029: {
type: Number,
alias: 'SecUmOpz_R',

},
__Dati_Numero030: {
type: Number,
alias: 'SecUmFin_R',

},
__Dati_Ora001: {
type: String,
alias: 'TA_R',

},
__Dati_Ora002: {
type: String,
alias: 'TD_R',

},
__Dati_Testo016: {
type: String,
alias: 'NoteAttrezzaggio',

},
__Dati_Testo017: {
type: String,
alias: 'NoteMovimentazione',

},
__Dati_Testo018: {
type: String,
alias: 'TxtArticolo',

},
__Dati_Testo019: {
type: String,
alias: 'TxtCiclo',

},
__Dati_Numero031: {
type: Number,
alias: 'FlagLavInternaPianificabile',

},
__Dati_Numero032: {
type: Number,
alias: 'FlagImballoParziale',

},
__Dati_Numero033: {
type: Number,
alias: 'FlagImballoFinale',

},
__Dati_Numero034: {
type: Number,
alias: 'FlagLavEsterna',

},
__Dati_Numero035: {
type: Number,
alias: 'NumeroAddetti',

},
__Dati_Numero036: {
type: Number,
alias: 'CHPF_T',

},
__Dati_Numero037: {
type: Number,
alias: 'CHP_T',

},
__Dati_Testo020: {
type: String,
alias: 'TxtImballo',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImgImballo',

},
__Dati_Numero038: {
type: Number,
alias: 'LarghezzaImballo',

},
__Dati_Numero039: {
type: Number,
alias: 'LunghezzaImballo',

},
__Dati_Numero040: {
type: Number,
alias: 'AltezzaImballo',

},
__Dati_Numero041: {
type: Number,
alias: 'AreaImballo',

},
__Dati_Numero042: {
type: Number,
alias: 'VolumeImballo',

},
__Dati_Numero043: {
type: Number,
alias: 'UmOpzPerImballo',

},
__Dati_Numero044: {
type: Number,
alias: 'CUP_T_Opz',

},
__Dati_Numero045: {
type: Number,
alias: 'CUPn_T_Opz',

},
__Dati_Numero046: {
type: Number,
alias: 'CHF_T',

},
__Dati_Testo021: {
type: String,
alias: 'TxtTipoImballo',

},
__Dati_Testo022: {
type: String,
alias: 'FlagSelezione',

},
__Dati_Numero047: {
type: Number,
alias: 'CUT_T_Opz',

},
__Dati_Testo023: {
type: String,
alias: 'IdDocImballo',

},
__Dati_Testo024: {
type: String,
alias: 'TxtImgImballo',

},
__Dati_Testo025: {
type: String,
alias: 'IdDocImgImballo',

},
__Dati_Numero048: {
type: Number,
alias: 'CTA_T',

},
__Dati_Numero049: {
type: Number,
alias: 'CTD_T',

},
__Dati_Testo026: {
type: String,
alias: 'CodiceRisorsa',

},
__Dati_Contenitore002: {
type: String,
alias: 'ImgDocImballo',

},
__Dati_Testo027: {
type: String,
alias: 'IdDocImgNoteProduzione',

},
__Dati_Contenitore003: {
type: String,
alias: 'ImgNoteProduzione',

},
__Dati_Testo028: {
type: String,
alias: 'IdDocImgNoteAttrezzaggio',

},
__Dati_Contenitore004: {
type: String,
alias: 'ImgNoteAttrezzaggio',

},
__Dati_Testo029: {
type: String,
alias: 'IdDocImgNoteMovimentazione',

},
__Dati_Contenitore005: {
type: String,
alias: 'ImgNoteUtensili',

},
__Dati_Testo030: {
type: String,
alias: 'IdDocImgNoteUtensili',

},
__Dati_Contenitore006: {
type: String,
alias: 'ImgNoteMovimentazione',

},
__Dati_Testo031: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero050: {
type: Number,
alias: 'CUM_T_Opz',

},
__Dati_Testo032: {
type: String,
alias: 'ProdUmOpzHP_QPMedia_R',

},
__Dati_Numero051: {
type: Number,
alias: 'FlagNestedPossibile',

},
__Dati_Testo033: {
type: String,
alias: 'IdItemLavorazione',

},
__Dati_Numero052: {
type: Number,
alias: 'FlagTempoManualePossibile',

},
__Dati_Ora003: {
type: String,
alias: 'TAttraversamentoLinea_T',

},
__Dati_Numero053: {
type: Number,
alias: 'CostoOrarioMacchinaAttrezzaggio',

},
__Dati_Numero054: {
type: Number,
alias: 'CostoOrarioMacchinaFermoMacchina',

},
__Dati_Numero055: {
type: Number,
alias: 'CostoOrarioMacchinaProduzione',

},
__Dati_Numero056: {
type: Number,
alias: 'CostoOrarioAddettoAttrezzaggio',

},
__Dati_Numero057: {
type: Number,
alias: 'CostoOrarioAddettoFermoMacchina',

},
__Dati_Numero058: {
type: Number,
alias: 'CostoOrarioAddettoProduzione',

},
__Dati_Numero059: {
type: Number,
alias: 'QuotaAddettoAttrezzaggio',

},
__Dati_Numero060: {
type: Number,
alias: 'QuotaAddettoFermoMacchina',

},
__Dati_Numero061: {
type: Number,
alias: 'QuotaAddettoProduzione',

},
__Dati_Numero062: {
type: Number,
alias: 'NumeroFase',

},
__Dati_Testo034: {
type: String,
alias: 'CodiceTxtRisorsaAutomatico',

},
__Dati_Testo035: {
type: String,
alias: 'CodiceTxtFaseAutomatico',

},
__Dati_Testo036: {
type: String,
alias: 'CodiceTxtFaseRisorsaAutomatico',

},
__Dati_Testo037: {
type: String,
alias: 'TxtItemLavorazione',

},
__Dati_Numero063: {
type: Number,
alias: 'TaraImballo',

},
__Dati_Numero064: {
type: Number,
alias: 'Zero',

},
__Dati_Numero065: {
type: Number,
alias: 'FlagAggiornaValori_01',

},
__Dati_Numero066: {
type: Number,
alias: 'ConvUmOpzUmLavorazione',

},
__Dati_Numero067: {
type: Number,
alias: 'ConvUmFinUmOpz',

},
__Dati_Numero068: {
type: Number,
alias: 'ConvUmLavorazioneUmOpz',

},
__Dati_Numero069: {
type: Number,
alias: 'CUL_T_Opz',

},
__Dati_Numero070: {
type: Number,
alias: 'FlagLavInternaNonPianificabile',

},
__Dati_Numero071: {
type: Number,
alias: 'NumeroAddettiStandard',

},
__Dati_Testo038: {
type: String,
alias: 'TxtFaseRisorsaAutomatico',

},
__Dati_Numero072: {
type: Number,
alias: 'NumeroAlternativa',

},
__Dati_Numero073: {
type: Number,
alias: 'Pianificazione_FlagAttesaTotale',

},
__Dati_Numero074: {
type: Number,
alias: 'Pianificazione_HAttesaDaInizio',

},
__Dati_Numero075: {
type: Number,
alias: 'FlagAggiornaDaControlli',

},
__Dati_Numero076: {
type: Number,
alias: 'NumeroControlliOpzione',

},
__Dati_Numero077: {
type: Number,
alias: 'FlagAggiornaValori_02',

},
__Dati_Numero078: {
type: Number,
alias: 'FlagDaBenestariareQualita',

},
__Dati_Testo039: {
type: String,
alias: 'NoteQualita',

},
__Dati_Testo040: {
type: String,
alias: 'IdDocImgNoteQualita',

},
__Dati_Testo041: {
type: String,
alias: 'IdDocImgProgrammiMacchina',

},
__Dati_Numero079: {
type: Number,
alias: 'QtPerImballo',

},
__Dati_Ora004: {
type: String,
alias: 'TempoColpo_T',

},
__Dati_Testo042: {
type: String,
alias: 'CodiceTxtRisorsaNumeroAlternativaAutomatico',

},
__Dati_Numero080: {
type: Number,
alias: 'PercScartoImpostata',

},
__Dati_Numero081: {
type: Number,
alias: 'CUQ_T_Opz',

},
__Dati_Numero082: {
type: Number,
alias: 'CUP_T_Fin',

},
__Dati_Numero083: {
type: Number,
alias: 'CUPn_T_Fin',

},
__Dati_Numero084: {
type: Number,
alias: 'CUQ_T_Fin',

},
__Dati_Numero085: {
type: Number,
alias: 'CUT_T_Fin',

},
__Dati_Numero086: {
type: Number,
alias: 'CUM_T_Fin',

},
__Dati_Numero087: {
type: Number,
alias: 'CULE_T_Fin',

},
__Dati_Numero088: {
type: Number,
alias: 'CUL_T_Fin',

},
__Dati_Numero089: {
type: Number,
alias: 'CUUt_T_Fin',

},
__Dati_Numero090: {
type: Number,
alias: 'CUUt_T_Opz',

},
__Dati_Testo043: {
type: String,
alias: 'IdItemTrasporto',

},
__Dati_Numero091: {
type: Number,
alias: 'CUTra_T_Fin',

},
__Dati_Numero092: {
type: Number,
alias: 'CUTra_T_Opz',

},
__Dati_Numero093: {
type: Number,
alias: 'ConvUmTrasportoUmOpz',

},
__Dati_Numero094: {
type: Number,
alias: 'ConvUmOpzUmTrasporto',

},
__Dati_Ora005: {
type: String,
alias: 'TA_T',

},
__Dati_Ora006: {
type: String,
alias: 'TD_T',

},
__Dati_Numero095: {
type: Number,
alias: 'FlagRegistraContenitore',

},
__Dati_Testo044: {
type: String,
alias: 'TipiContenitori_IdTipiContenitori',

},
__Dati_Testo045: {
type: String,
alias: 'TxtTipoContenitore',

},
__Dati_Numero096: {
type: Number,
alias: 'Pianificazione_FlagAlternativaContemporanea',

},
__Dati_Numero097: {
type: Number,
alias: 'FlagScartoRilavorabile',

},
__Dati_Numero098: {
type: Number,
alias: 'FlagAlertNoteAttrezzaggio',

},
__Dati_Numero099: {
type: Number,
alias: 'FlagAlertNoteMovimentazione',

},
__Dati_Numero100: {
type: Number,
alias: 'FlagAlertNoteProduzione',

},
__Dati_Numero101: {
type: Number,
alias: 'FlagAlertNoteImballo',

},
__Dati_Numero102: {
type: Number,
alias: 'FlagAlertNoteUtensili',

},
__Dati_Numero103: {
type: Number,
alias: 'FlagAlertNoteQualita',

},
__Dati_Numero104: {
type: Number,
alias: 'QtPerBenestare',

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
__Dati_Testo046: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero105: {
type: Number,
alias: 'FlagTempiVerificati',

},
__Dati_Testo047: {
type: String,
alias: 'TxtUtenteVerificaTempi',

},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraVerificaTempi',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo048: {
type: String,
alias: 'CodiceTxtItemLavorazione',

},
__Dati_Numero106: {
type: Number,
alias: 'MinutiColpo_T',

},
__Dati_Numero107: {
type: Number,
alias: 'MinutiUmOpz_T',

},
__Dati_Numero108: {
type: Number,
alias: 'NumeroItemsOpzioneProd',

},
__Dati_Numero109: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems_Lavorazione',

},
__Dati_Numero110: {
type: Number,
alias: 'FlagAggiornaContenutiDaRisorsa',

},
__Dati_Numero111: {
type: Number,
alias: 'ControlliQualita_FlagAvvisoFisso',

},
__Dati_Testo049: {
type: String,
alias: 'ControlliQualita_TxtAvvisoFisso',

},
__Dati_Testo050: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo051: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo052: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Numero112: {
type: Number,
alias: 'Pianificazione_HAttesaDaFine',

},
__Dati_Testo053: {
type: String,
alias: 'IdItemArticolo',

},
__Dati_Testo054: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Numero113: {
type: Number,
alias: 'TracciabilitaRegistrazione_FlagFaseDiPartenza',

},
__Dati_Numero114: {
type: Number,
alias: 'FlagAggiornaDaTipiContenitori',

},
__Dati_Numero115: {
type: Number,
alias: 'TipiContenitori_Numero',

},
__Dati_Numero116: {
type: Number,
alias: 'Contenitori_FlagRegistrazioneAbilitata',

},
__Dati_Numero117: {
type: Number,
alias: 'Contenitori_FlagRegistrazioneObbligatoria',

},
__Dati_Numero118: {
type: Number,
alias: 'FlagAggiornaDaTipiFase_Contenitori',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OpzioniProdSchema;