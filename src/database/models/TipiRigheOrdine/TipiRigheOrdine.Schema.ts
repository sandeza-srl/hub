import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiRigheOrdinePrivate } from './TipiRigheOrdine.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiRigheOrdineSchema = new mongoose.Schema<ITipiRigheOrdinePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceTipoRigaOrdine',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagCodiceEsternoObbligatorio',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'GeneraCodiceRiga_AnnoTest',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'GeneraCodiceRiga_CifreProgressivo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'GeneraCodiceRiga_FlagAnnoPrima',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'GeneraCodiceRiga_FlagAnnuale',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'GeneraCodiceRiga_Progressivo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'GeneraCodiceRiga_ProssimoCodice',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'GeneraCodiceRiga_Testo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdTipoRigaOrdine',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtTipoRigaOrdine',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'LT1OrdineConferma',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'LT2ConfermaCreazione',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'LT3CreazioneBenestare',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'LT4BenestareInizio',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoDocOperativoOrigine',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'GeneraCodiceLotto_Txt',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'GeneraCodiceLotto_Separatore',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'GeneraCodiceLotto_IdAltroCodice',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'GeneraCodiceLotto_Codice',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'CartellinoProduzione_NomeFormato',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataBenestareAutomatico',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtUtenteBenestare',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagAggiorna_FlagSaldoFlagElimina',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'FlagSaldoAutomatico_ListaTipiDoc',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'FlagEliminaAutomatico_ListaTipiDoc',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdTipoDocOperativoOrdineFornitoreMateriale',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'CodiceTxtTipoRigaOrdineAutomatico',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdTipoDocOperativoFabbisognoMateriali',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdTipoDocOperativoFabbisognoLavorazioni',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdTipoDocOperativoScaricoMateriali',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdTipoDocOperativoCaricoFiniti',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdTipoDocOperativoOrdineFornitoreLavorazioni',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdTipoDocOperativoUscitaLavorazioni',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdTipoDocOperativoRientroLavorazioni',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagEliminaAutomatico_OrdineFornitoreMateriale',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagSaldoAutomatico_OrdineFornitoreMateriale',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdTipoDocumentoRegistrazione',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdSottoTipoDocumentoRegistrazione',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdTipoDocOperativoScarto',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagEsplodiDistinta_RigaOrdineSingola',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdTipoDocOperativoFabbisognoTrasporto',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdTipoDocOperativoOrdineFornitoreTrasporto',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'ReportProduzione_Formato',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'CartellinoProduzione_IdTipoDocumento',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CartellinoProduzione_IdSottoTipoDocumento',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'GeneraCodiceLotto_Anno',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'GeneraCodiceLotto_Progressivo',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'GeneraCodiceLotto_OrdineAnno',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'GeneraCodiceLotto_OrdineTxt',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'GeneraCodiceLotto_OrdineProgressivo',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'GeneraCodiceLotto_CifreAnno',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'GeneraCodiceLotto_FlagUsaAltroCodice',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'GeneraCodiceLotto_FlagUsaAnno',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'GeneraCodiceLotto_CifreProgressivo',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagBenestareAutomatico',

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
  __Dati_Testo033: {
    type: String,
    alias: 'IdTipoDocOperativoFabbisognoUtensili',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdTipoDocOperativoPreparazioneMateriali',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagPreparazioneMaterialiAutomatica',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdTipoDocOperativoSpedizioneMaterialeContoTrasformazione',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdTipoDocOperativoOrdineFornitoreContoTrasformazione',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdTipoDocOperativoRientroContoTrasformazione',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdTipoDocOperativoPreparazioneMaterialiContoTrasformazione',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdTipoDocOperativoChiusuraPrenotazioneContoTrasformazione',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdTipoDocOperativoFabbisognoContoTrasformazione',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagDocOperitivoOrigineObbligatorio',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'FlagFabbisogniModificabili',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagPreparazioneMaterialiRichiesta',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FlagBloccaSaldoSeIncongruente',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FlagSerialeModificabile',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'GeneraSeriale_CodiceEsempio',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'GeneraSeriale_Espressione',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'GeneraCodiceLotto_Espressione',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'GeneraCodiceRiga_Espressione',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'GeneraSeriale_FlagCodiceValidato',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagBloccoModificaRegistrazioneSeSaldato',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'GeneraCodiceRiga_CodiceEsempio',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'GeneraCodiceRiga_FlagCodiceValidato',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'GeneraCodiceLotto_CodiceEsempio',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'GeneraCodiceLotto_FlagCodiceValidato',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'GeneraSeriale_FlagProgressivoAnnuale',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'GeneraSeriale_FlagProgressivoContinuo',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'GeneraSeriale_FlagProgressivoMensile',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'FlagSaldoAutomatico_ChiusuraPrenotazioneContoTrasformazione',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagSaldoAutomatico_FabbisognoContoTrasformazione',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagSaldoAutomatico_FabbisognoLavorazioni',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'FlagSaldoAutomatico_FabbisognoMateriali',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'FlagSaldoAutomatico_FabbisognoTrasporto',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'FlagSaldoAutomatico_FabbisognoUtensili',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'FlagSaldoAutomatico_OrdineFornitoreContoTrasformazione',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'FlagSaldoAutomatico_OrdineFornitoreLavorazioni',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'FlagSaldoAutomatico_OrdineFornitoreTrasporto',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'FlagSaldoAutomatico_PreparazioneMateriali',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagSaldoAutomatico_PreparazioneMaterialiContoTrasformazione',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'FlagSaldoAutomatico_RientroContoTrasformazione',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'FlagSaldoAutomatico_RientroLavorazioni',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'FlagSaldoAutomatico_ScaricoMateriali',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'FlagSaldoAutomatico_Scarto',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'FlagSaldoAutomatico_SpedizioneMaterialeContoTrasformazione',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'FlagSaldoAutomatico_CaricoFiniti',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'FlagEliminaAutomatico_CaricoFiniti',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'FlagEliminaAutomatico_ChiusuraPrenotazioneContoTrasformazione',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'FlagEliminaAutomatico_FabbisognoContoTrasformazione',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'FlagEliminaAutomatico_FabbisognoLavorazioni',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'FlagEliminaAutomatico_FabbisognoMateriali',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'FlagEliminaAutomatico_FabbisognoTrasporto',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'FlagEliminaAutomatico_FabbisognoUtensili',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'FlagEliminaAutomatico_OrdineFornitoreContoTrasformazione',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'FlagEliminaAutomatico_OrdineFornitoreLavorazioni',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'FlagEliminaAutomatico_OrdineFornitoreTrasporto',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'FlagEliminaAutomatico_PreparazioneMateriali',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'FlagEliminaAutomatico_PreparazioneMaterialiContoTrasformazione',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'FlagEliminaAutomatico_RientroContoTrasformazione',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'FlagEliminaAutomatico_RientroLavorazioni',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'FlagEliminaAutomatico_ScaricoMateriali',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'FlagEliminaAutomatico_Scarto',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'FlagEliminaAutomatico_SpedizioneMaterialeContoTrasformazione',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'FlagSaldoAutomatico_UscitaLavorazioni',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'FlagEliminaAutomatico_UscitaLavorazioni',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'FlagSaldoAutomatico_DaUltimaFase',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'FlagEsplodiDistinta_RigheOrdiniSeparate',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'FlagEsplodiDistinta_Attivata',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'CopiaDocumentiArticolo_FlagAttivata',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'CopiaDocumentiArticolo_FlagCopiaDisegno',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'CopiaDocumentiArticolo_FlagCopiaDocumentiNote',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'CopiaDocumentiArticolo_FlagCopiaProgrammiMacchina',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'CopiaDocumentiArticolo_FlagCopiaDocumentiQualita',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'FlagEsplodiDistinta_UsaCostbreakDown',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'SceltaCiclo_UsaFornituraItem',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'LancioProduzione_FlagUsaFornitura',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'ValorizzazioneMagazzino_FlagEscludiDaWip',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'CartellinoProduzione_NomeScriptStampa',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'ReportProduzione_IdSottoTipoDocumento',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'ReportProduzione_IdTipoDocumento',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'ReportProduzione_NomeScriptStampa',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'ReportQualita_Formato',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'ReportQualita_IdSottoTipoDocumento',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'ReportQualita_IdTipoDocumento',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'ReportQualita_NomeScriptStampa',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'ReportCosti_Formato',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'ReportCosti_IdSottoTipoDocumento',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'ReportCosti_IdTipoDocumento',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'ReportCosti_NomeScriptStampa',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'CartellinoProduzione_FlagSalvaDocumento',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'ReportCosti_FlagSalvaDocumento',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'ReportProduzione_FlagSalvaDocumento',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'ReportQualita_FlagSalvaDocumento',

  },
  __Dati_Numero092: {
    type: Number,
    alias: 'Temporaneo202307_FlagDefaultNuovaScheda',

  },
  __Dati_Numero093: {
    type: Number,
    alias: 'AbilitazioniModificheLotto_QuantitaLotto',

  },
  __Dati_Numero094: {
    type: Number,
    alias: 'AbilitazioniModificheLotto_CreazioneFaseProduzione',

  },
  __Dati_Numero095: {
    type: Number,
    alias: 'AbilitazioniModificheLotto_EliminazioneFaseProduzione',

  },
  __Dati_Numero096: {
    type: Number,
    alias: 'AbilitazioniModificheLotto_QuantitaLotto_AncheFasiInCorso',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiRigheOrdineSchema;