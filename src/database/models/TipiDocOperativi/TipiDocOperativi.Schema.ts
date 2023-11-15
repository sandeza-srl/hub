import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiDocOperativiPrivate } from './TipiDocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiDocOperativiSchema = new mongoose.Schema<ITipiDocOperativiPrivate>({

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
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoDocOperativo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoGenericoAcquisto',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'PercResiduaPiu',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagTipoDdt',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'PercResiduaMeno',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagTipoCassa',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagTipoGenericoVendita',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceTipoDocOperativo',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagGeneraCodice',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'GeneraCodice_Testo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtFattore',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'GeneraCodice_Progressivo',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'GeneraCodice_CifreProgressivo',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'GeneraCodice_ProssimoCodice',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagTipoRapportoLavoro',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagCondizioni_CodiceEsternoObbligatorio',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagRipetizionePossibile',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagCondizioni_InseribileDocContabili',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagTipoOrdineAcquisto',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagTipoOrdineClienteInterno',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagTipoRichiestaPreventivoApprovigionamento',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagItemFabbisogno',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagItemRichiestoOrdineApprovigionamento',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagItemOrdinato',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagItemEntrata',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagItemPrenotato',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'NomeFormatoStampa',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipoDocOperativo_OrigineDati',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagItemUscita',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagCondizioni_MovimentaMultiMagazzino',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagTipoRichiestaApprovigionamento',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagTipoDocumentoMagazzino',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'FlagRegoleStati_ProvvisorioPossibile',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'Multimagazzino_FlagGiacenzaGeneraleIN',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'Multimagazzino_FlagGiacenzaGeneraleOUT',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'Multimagazzino_IdMagazzinoGestitoOrigine',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'Multimagazzino_IdMagazzinoGestitoDestinazione',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'FlagDocumentoDiCorrezioneMagazzino',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdSottotipoDocumento',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'GeneraCodice_AltroIdTipoDocPerCodice',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'GeneraCodice_FlagUsaCodiceAltro',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'GeneraCodice_IdTipoDocOperativoPerCodice',

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
  __Dati_Numero034: {
    type: Number,
    alias: 'FlagErroriValori',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FlagErroriValoriTxt',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'GeneraCodice_FlagTxtPeriodoContabileVisibile',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'GeneraCodice_IdPeriodoContabileTest',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'GeneraCodice_OrdineProgressivo',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'GeneraCodice_OrdineTesto',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'GeneraCodice_OrdineTxtPeriodoContabile',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'GeneraCodice_Separatore',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'GeneraCodice_TxtPeriodoContabileTest',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagRispettaProgressivo',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagInvioMail_ReferenteDocOperativo',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'FlagInvioMail_ReferenteDestinatario',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'FlagInvioMail_ReferenteCompagnia',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'FlagInvioMail_ReferenteVettore',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'FlagInvioMail_ReferenteIntermediario',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'FlagTipoOrdineProduzione',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'FlagTipo_TipoLista',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'FlagRegoleStati_ChiusuraAutomatica',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'FlagStatiFatturabiliTxt',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'FlagStatiSequenzaTxt',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'FlagDisponibilita_CreabileMobile',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'FlagStatiDaValidareTxt',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagStatiDaValidarePresenti',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'FlagValorizzaPreventivo',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'FlagValorizzaConsuntivo',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'FlagCreaProgetto',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'FlagAggiorna_GeneraCodice',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'FlagDisponibilita_CreabileRaccoltaDati',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'FlagCondizioni_RichiestoInvio',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'FlagCondizioni_LancioProduzioneRichiesto',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'FlagRegoleStati_AnnullamentoPossibile',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'FlagCondizioni_ScaricatoDaDocOperativo',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'FlagAggiorna',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'FlagDisponibilita_VisibileInventario',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'FlagDisponibilita_VisibileWeb',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'FlagDisponibilita_CreabileCruscottoApprovigionamento',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'NuoviStati_IdTipoAttivita',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'NuoviStati_HelpIdMailTipoDocOperativo',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'FlagStampaVerticale',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'FlagStampaOrizzontale',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'Multimagazzino_FlagVincolaMovimentazioneSedeIN',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'Multimagazzino_FlagVincolaMovimentazioneSedeOUT',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'FlagUtilizzaNuovaScheda012022',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'FlagDisponibilita_CreabileWeb',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'FlagDisponibilita_VisibileRaccoltaDati',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'FlagDisponibilita_VisibileMobile',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'FlagDisponibilita_CreabileInventario',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'NomeScriptStampa',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'DataFatturazione_FlagUsaDataDocumento',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'DataFatturazione_FlagUsaDataRegistrazione',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'DataFatturazione_FlagUltimoGiornoMese',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'DataFatturazione_FlagNGiorniDopoData',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'DataFatturazione_NGiorniDopoData',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'FlagDocumentoInterno',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'NomeScriptSetup',

  },
  __Dati_Numero079: {
    type: Number,
    alias: 'FlagRegoleStati_ChiusuraForzataPossibile',

  },
  __Dati_Numero080: {
    type: Number,
    alias: 'DataEffettivaVoce_FlagUsaDataCorrente',

  },
  __Dati_Numero081: {
    type: Number,
    alias: 'DataEffettivaVoce_FlagUsaDataDocumento',

  },
  __Dati_Numero082: {
    type: Number,
    alias: 'DataEffettivaVoce_FlagUsaDataRegistrazione',

  },
  __Dati_Numero083: {
    type: Number,
    alias: 'ValoreVoci_ValoreUnitario_DaValorizzazioneMagazzino',

  },
  __Dati_Numero084: {
    type: Number,
    alias: 'FlagCondizioni_UtilizzaFatturazioneElettronica',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'NoteInterne',

  },
  __Dati_Numero085: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Invio_FlagLimitato',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Invio_IdTipiRuoliAbilitati',

  },
  __Dati_Numero086: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Invio_FlagFirmaRichiesta',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Invio_IdTipiRuoliAbilitatiPerFirma',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Invio_EspressionePerCondizioniFirma',

  },
  __Dati_Numero087: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Invio_FlagCondizioniFirmaValidate',

  },
  __Dati_Numero088: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Invio_FlagFirmaRimuovibile',

  },
  __Dati_Numero089: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Fatturazione_FlagLimitato',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Fatturazione_IdTipiRuoliAbilitati',

  },
  __Dati_Numero090: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Fatturazione_FlagFirmaRichiesta',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Fatturazione_IdTipiRuoliAbilitatiPerFirma',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Fatturazione_EspressionePerCondizioniFirma',

  },
  __Dati_Numero091: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Fatturazione_FlagCondizioniFirmaValidate',

  },
  __Dati_Numero092: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Fatturazione_FlagFirmaRimuovibile',

  },
  __Dati_Numero093: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Chiusura_FlagLimitato',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Chiusura_IdTipiRuoliAbilitati',

  },
  __Dati_Numero094: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Chiusura_FlagFirmaRichiesta',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Chiusura_IdTipiRuoliAbilitatiPerFirma',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'VincoliStatiPerRuoli_Chiusura_EspressionePerCondizioniFirma',

  },
  __Dati_Numero095: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Chiusura_FlagCondizioniFirmaValidate',

  },
  __Dati_Numero096: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Chiusura_FlagFirmaRimuovibile',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_EspressionePerCondizioniFirma',

  },
  __Dati_Numero097: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagCondizioniFirmaValidate',

  },
  __Dati_Numero098: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaRichiesta',

  },
  __Dati_Numero099: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaRimuovibile',

  },
  __Dati_Numero100: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagLimitato',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_IdTipiRuoliAbilitati',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_IdTipiRuoliAbilitatiPerFirma',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_EspressionePerCondizioniFirma',

  },
  __Dati_Numero101: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagCondizioniFirmaValidate',

  },
  __Dati_Numero102: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaRichiesta',

  },
  __Dati_Numero103: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaRimuovibile',

  },
  __Dati_Numero104: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagLimitato',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_IdTipiRuoliAbilitati',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_IdTipiRuoliAbilitatiPerFirma',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdTipoDocOperativo_OrigineDati_ConScarico',

  },
  __Dati_Numero105: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Chiusura_FlagRichiediPsw',

  },
  __Dati_Numero106: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Invio_FlagRichiediPsw',

  },
  __Dati_Numero107: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Fatturazione_FlagRichiediPsw',

  },
  __Dati_Numero108: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagRichiediPsw',

  },
  __Dati_Numero109: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagRichiediPsw',

  },
  __Dati_Numero110: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Chiusura_FlagBloccaDocumento',

  },
  __Dati_Numero111: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagBloccaDocumento',

  },
  __Dati_Numero112: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagBloccaDocumento',

  },
  __Dati_Numero113: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Fatturazione_FlagBloccaDocumento',

  },
  __Dati_Numero114: {
    type: Number,
    alias: 'VincoliStatiPerRuoli_Invio_FlagBloccaDocumento',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'GruppoLavoro_IdTipoGruppoLavoro',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'GruppoLavoro_IdTipiRuoliTipoGruppoLavoro',

  },
  __Dati_Numero115: {
    type: Number,
    alias: 'GruppoLavoro_FlagGruppoLavoroRichiesto',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'TipiRuoli_IdTipiRuoli_Tutti',

  },
  __Dati_Numero116: {
    type: Number,
    alias: 'FlagRegoleStati_AperturaForzataPossibile',

  },
  __Dati_Numero117: {
    type: Number,
    alias: 'LucchettoDocumento_FlagBloccoParziale',

  },
  __Dati_Numero118: {
    type: Number,
    alias: 'LucchettoDocumento_EsclusiBlocco_CodiceEsterno',

  },
  __Dati_Numero119: {
    type: Number,
    alias: 'LucchettoDocumento_EsclusiBlocco_Descrizione',

  },
  __Dati_Numero120: {
    type: Number,
    alias: 'FlagItemMovimentaContenitori',

  },
  __Dati_Numero121: {
    type: Number,
    alias: 'InterconnessioneMagazzino_FlagAttivo',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiDocOperativiSchema;