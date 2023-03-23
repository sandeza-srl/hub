import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDocumentiPrivate } from './Documenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const DocumentiSchema = new mongoose.Schema<IDocumentiPrivate>({

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
    alias: 'IdDocumento',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraCreazione',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtenteModifica',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraModifica',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtDocumento',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'PercorsoWebViewer',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdRubrica',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdProgetto',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdChiamata',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdVoceProgetto',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdSessioneMagazzino',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'PercorsoReale',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtSezioneDiCreazione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagCreatoAccount',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagCreatoItems',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagCreatoComunicazioni',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagCreatoRubrica',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagCreatoChiamata',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagCreatoArticoli',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagCreatoVociProgetto',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagCreatoSessioneMagazzino',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagCreatoProgetti',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'File_Nome',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdUtentiNoVisualizzazione',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdDocContabile',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagCreatoDocContabile',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Ordine',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagCreatoOfferta',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagCreatoComunicazioneProduzione',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagCreatoProtocolli',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdProtocollo',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagCreatoStepProcesso',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'LettereTxtDocumento',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'TxtTipoDocumento',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'TxtSottoTipoDocumento',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'AnnoCreazione',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgDocumento',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdOggettoCreazione',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdStepProcesso',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdComunicazione',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagDocumentoConAssociazioneMultipla',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdCampagna',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdComunicazioneProduzione',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdSottoProgetto',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagCreatoRisorse',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagCreatoUtensili',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagCreatoStrumenti',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagCreatoRigaOrdineProduzione',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagCreatoUtente',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagCreatoChat',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdChat',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdUtensile',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdStrumento',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdRigaOrdineProduzione',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdSede',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagCreatoSedi',

  },
  __Dati_Contenitore002: {
    type: String,
    alias: 'ImgDocumentoProtetta',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagDocumentoProtetto',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagCreatoSessioneLavoro',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdSessioneLavoro',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagCreatoDocOperativo',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'IdIntervento',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'FlagCreatoInterventi',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagScaduto',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdSottoTipoDocumento',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'FlagPubblicabile',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'IdTipoAttivitaControllo',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdAttivitaControllo',

  },
  __Dati_Testo051: {
    type: String,
    alias: 'IdTipoImpianto',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdTipoStrumento',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdTipoUtensile',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'IdImpianto',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FlagCreatoTipoAttivitaControllo',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'FlagCreatoTipoStrumento',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagCreatoTipoUtensile',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FlagCreatoTipoImpianto',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'FlagCreatoImpianto',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'FlagCreatoAttivitaControllo',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'IdSchedaAttivitaControllo',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'FlagCreatoSchedaAttivitaControllo',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'FlagCreatoCampagna',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagCreatoCiclo',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagCreatoFaseProduzione',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'FlagCreatoLottoProduzione',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'FlagCreatoSottoProgetto',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'FlagCreatoRegistrazioneFaseProduzione',

  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdTipoNormativa',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'FlagCreatoTipoNormativa',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'FlagFirma',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'IdTipoStepProcesso',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'FlagCreatoTipoStepProcesso',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'FlagCreatoTracciabilita',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'IdTracciabilita',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'File_Estensione',

  },
  __Dati_Testo061: {
    type: String,
    alias: 'IdViaggio',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagFileDaPercorso',

  },
  __Dati_Testo062: {
    type: String,
    alias: 'IdScartoProduzione',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'FlagCreatoScartoProduzione',

  },
  __Dati_Testo063: {
    type: String,
    alias: 'IdTipoContenitore',

  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdContenitore',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'FlagCreatoContenitore',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'FlagCreatoTipoContenitore',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'FlagCreatoViaggi',

  },
  __Dati_Testo065: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo066: {
    type: String,
    alias: 'File_AttributiContenitore',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'File_DimensioneEsterna',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'File_DimensioneSuDB',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'FlagAggiornaAttributiFile',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'FlagAggiornaCollegamenti',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'AnnoMeseCreazione',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'AnnoSettimanaCreazione',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo067: {
    type: String,
    alias: 'File_VerificaFile',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'FlagAggiornaDaSottotipo',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'AnnoScadenza',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'AnnoMeseScadenza',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'AnnoSettimanaScadenza',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'FlagSessioneCreazione',

  },
  __Dati_Testo068: {
    type: String,
    alias: 'IdTipiRuoliPerEliminazioneDocumento',

  },
  __Dati_Testo069: {
    type: String,
    alias: 'IdTipiRuoliPerModificaDocumento',

  },
  __Dati_Testo070: {
    type: String,
    alias: 'IdTipiRuoliPerVisibilitaDocumento',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'FlagEstensioneFileCondizionata',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'FlagEliminazioneDocumentoLimitata',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'FlagModificaDocumentoLimitata',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'FlagVisibilitaDocumentoLimitata',

  },
  __Dati_Testo071: {
    type: String,
    alias: 'LinkWeb',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'FlagFileDaLinkWeb',

  },
  __Dati_Testo072: {
    type: String,
    alias: 'IdAnalisiCostoArticolo',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'FlagCreatoAnalisiCostoArticolo',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraUltimaRevisione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero072: {
    type: Number,
    alias: 'FlagAggiornaDaRevisioni',

  },
  __Dati_Testo073: {
    type: String,
    alias: 'TxtUtenteUltimaRevisione',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'Controllo_FlagCreatoNonUnivoco',

  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraCreazioneVersione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo074: {
    type: String,
    alias: 'IdDocumentoOriginale',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'FlagDocumentoDuplicato',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'FlagCreatoControlliFaseProduzione',

  },
  __Dati_Testo075: {
    type: String,
    alias: 'IdControlloFaseProduzione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DocumentiSchema;