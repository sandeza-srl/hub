import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IDocContabiliPrivate } from './DocContabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const DocContabiliSchema = new mongoose.Schema<IDocContabiliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceTipoDocContabile'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoDocContabile'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtTipoDocContabile'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdDocContabile'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceDocContabile'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataDocContabile'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountEmittente'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountPagatore'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdAccountTutti'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdCassaBancaEmittente'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdCassaBancaPagatore'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdCassaBancaTutti'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdDocumentoCollegato'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRubricaDocContabile'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdSedeInvioDocContabile'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'MeseDocContabile'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'AnnoMeseDocContabile'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'Note'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'SettimanaDocContabile'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'TxtAccountEmittente'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtAccountDocContabile'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtAccountPagatore'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtFattore'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagIn'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagOut'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Progressivo'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'AnnoDocContabile'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagBloccato'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'CodiceEsterno'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagCodiceEsterno'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'SimboloValuta'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'LinguaDocumento'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VDaPagare_02'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VDaPagareSegno_02'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VDaPagareValuta_02'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VEntrataImponibile_01'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VEntrataTotale_01'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VEntrataTotaleDaPagare_02'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VImponibile_01'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VImponibileSegno_01'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'VImponibileValuta_01'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'VImportoPreVariazioni_01'
  },
  __Dati_Numero021: {
    type: Number,
    alias: 'VImportoPreVariazioniSegno_01'
  },
  __Dati_Numero022: {
    type: Number,
    alias: 'VImportoPreVariazioniValuta_01'
  },
  __Dati_Numero023: {
    type: Number,
    alias: 'VIva_01'
  },
  __Dati_Numero024: {
    type: Number,
    alias: 'VIvaSegno_01'
  },
  __Dati_Numero025: {
    type: Number,
    alias: 'VIvaValuta_01'
  },
  __Dati_Numero026: {
    type: Number,
    alias: 'VPagato_01'
  },
  __Dati_Numero027: {
    type: Number,
    alias: 'VPagatoSegno_01'
  },
  __Dati_Numero028: {
    type: Number,
    alias: 'VPagatoValuta_01'
  },
  __Dati_Numero029: {
    type: Number,
    alias: 'VSconto_02'
  },
  __Dati_Numero030: {
    type: Number,
    alias: 'VScontoSegno_02'
  },
  __Dati_Numero031: {
    type: Number,
    alias: 'VScontoValuta_02'
  },
  __Dati_Numero032: {
    type: Number,
    alias: 'VTotale_01'
  },
  __Dati_Numero033: {
    type: Number,
    alias: 'VTotaleSegno_01'
  },
  __Dati_Numero034: {
    type: Number,
    alias: 'VTotaleValuta_01'
  },
  __Dati_Numero035: {
    type: Number,
    alias: 'VUscitaImponibile_01'
  },
  __Dati_Numero036: {
    type: Number,
    alias: 'VUscitaTotale_01'
  },
  __Dati_Numero037: {
    type: Number,
    alias: 'VUscitaResiduoDaPagare_02'
  },
  __Dati_Numero038: {
    type: Number,
    alias: 'VUscitaTotaleSegno_01'
  },
  __Dati_Numero039: {
    type: Number,
    alias: 'FlagPagatoParziale'
  },
  __Dati_Numero040: {
    type: Number,
    alias: 'FlagPagatoTutto'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'TxtDocContabile'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataSaldoPagamento'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'NoteTerminiPagamento'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdTipoDocContabilePerCodice'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'CodiceVisualizza'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRegistrazioneDocContabile'
  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagControlloNonCompleto_01'
  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagProvvisorioPossibile'
  },
  __Dati_Numero043: {
    type: Number,
    alias: 'FlagProvvisorio'
  },
  __Dati_Numero044: {
    type: Number,
    alias: 'AnnoRegistrazioneDocContabile'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'AnnoMeseRegistrazioneDocContabile'
  },
  __Dati_Numero045: {
    type: Number,
    alias: 'MeseRegistrazioneDocContabile'
  },
  __Dati_Numero046: {
    type: Number,
    alias: 'SettimanaRegistrazioneDocContabile'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'TxtAutomaticoDocContabile'
  },
  __Dati_Numero047: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale'
  },
  __Dati_Numero048: {
    type: Number,
    alias: 'FlagAggiornaValori_01'
  },
  __Dati_Numero049: {
    type: Number,
    alias: 'FlagAggiornaValori_02'
  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagAggiornaValori_03'
  },
  __Dati_Numero051: {
    type: Number,
    alias: 'FlagControlloValori_02'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdValuta'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdPeriodoContabile'
  },
  __Dati_Testo034: {
    type: String,
    alias: 'TxtPeriodoContabile'
  },
  __Dati_Testo035: {
    type: String,
    alias: 'SimboloValutaRidotto'
  },
  __Dati_Testo036: {
    type: String,
    alias: 'TxtValuta'
  },
  __Dati_Numero052: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo037: {
    type: String,
    alias: 'TxtAccountOperatore'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraGenerazioneCodice'
  },
  __Dati_Testo038: {
    type: String,
    alias: 'LinguaPrincipale'
  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdAccountDocContabile'
  },
  __Dati_Numero053: {
    type: Number,
    alias: 'SettimanaAnnoDocContabile'
  },
  __Dati_Numero054: {
    type: Number,
    alias: 'SettimanaAnnoRegistrazioneDocContabile'
  },
  __Dati_Numero055: {
    type: Number,
    alias: 'FlagTipoFatturaVendita'
  },
  __Dati_Numero056: {
    type: Number,
    alias: 'FlagTipoFatturaAcquisto'
  },
  __Dati_Numero057: {
    type: Number,
    alias: 'FlagTipoGenericoAcquisto'
  },
  __Dati_Numero058: {
    type: Number,
    alias: 'FlagTipoGenericoVendita'
  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdTipologiaAccountDocContabile'
  },
  __Dati_Testo041: {
    type: String,
    alias: 'CodiceRegistrazioneContabile'
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataValoreValuta'
  },
  __Dati_Numero059: {
    type: Number,
    alias: 'FlagNoPagamentoIva'
  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdAliquotaAnagrafica'
  },
  __Dati_Numero060: {
    type: Number,
    alias: 'VTotaleDefinitivo_01'
  },
  __Dati_Numero061: {
    type: Number,
    alias: 'VTotaleDefinitivoValuta_01'
  },
  __Dati_Numero062: {
    type: Number,
    alias: 'FlagInviato'
  },
  __Dati_Testo043: {
    type: String,
    alias: 'CodiceCodificaProtocollo'
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraInvio'
  },
  __Dati_Testo044: {
    type: String,
    alias: 'FlagResoconto'
  },
  __Dati_Numero063: {
    type: Number,
    alias: 'VTotaleDefinitivoSegno_01'
  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdOriginiDati'
  },
  __Dati_Testo046: {
    type: String,
    alias: 'IdUtenteInvioFattura'
  },
  __Dati_Testo047: {
    type: String,
    alias: 'TxtUtenteInvioFattura'
  },
  __Dati_Numero064: {
    type: Number,
    alias: 'FlagGeneraRicaviSpese'
  },
  __Dati_Numero065: {
    type: Number,
    alias: 'FlagGeneraStatoPatrimoniale'
  },
  __Dati_Numero066: {
    type: Number,
    alias: 'FlagRispettaProgressivo'
  },
  __Dati_Numero067: {
    type: Number,
    alias: 'VImponibileValutaSegno_01'
  },
  __Dati_Numero068: {
    type: Number,
    alias: 'VImportoPreVariazioniValutaSegno_01'
  },
  __Dati_Numero069: {
    type: Number,
    alias: 'VIvaValutaSegno_01'
  },
  __Dati_Numero070: {
    type: Number,
    alias: 'VPagatoValutaSegno_01'
  },
  __Dati_Numero071: {
    type: Number,
    alias: 'VScontoValutaSegno_02'
  },
  __Dati_Numero072: {
    type: Number,
    alias: 'VTotaleDefinitivoValutaSegno_01'
  },
  __Dati_Numero073: {
    type: Number,
    alias: 'VTotaleValutaSegno_01'
  },
  __Dati_Numero074: {
    type: Number,
    alias: 'VDaPagareValutaSegno_02'
  },
  __Dati_Numero075: {
    type: Number,
    alias: 'FlagContabilizzabile'
  },
  __Dati_Numero076: {
    type: Number,
    alias: 'FlagDaContabilizzare'
  },
  __Dati_Numero077: {
    type: Number,
    alias: 'FlagContabilizzato'
  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdUtenteContabilizzazione'
  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraDaContabilizzare'
  },
  __Dati_DataOra006: {
    type: Date,
    alias: 'DataOraContabilizzato'
  },
  __Dati_Testo049: {
    type: String,
    alias: 'IdIntermediario'
  },
  __Dati_Testo050: {
    type: String,
    alias: 'IdAccountDestinatario'
  },
  __Dati_Numero078: {
    type: Number,
    alias: 'FlagFatturaElettronica'
  },
  __Dati_Testo051: {
    type: String,
    alias: 'CodiceCIG'
  },
  __Dati_Testo052: {
    type: String,
    alias: 'CodiceCUP'
  },
  __Dati_Testo053: {
    type: String,
    alias: 'TipoTrasmissioneFattura'
  },
  __Dati_Numero079: {
    type: Number,
    alias: 'FlagGeneraFE'
  },
  __Dati_Numero080: {
    type: Number,
    alias: 'FlagGenerataFE'
  },
  __Dati_Numero081: {
    type: Number,
    alias: 'FlagInviataFE'
  },
  __Dati_Numero082: {
    type: Number,
    alias: 'IdDocFatEl'
  },
  __Dati_Numero083: {
    type: Number,
    alias: 'FlagPrevisionale'
  },
  __Dati_DataOra007: {
    type: Date,
    alias: 'DataOraPreparazioneFE'
  },
  __Dati_Numero084: {
    type: Number,
    alias: 'FlagMarcaDaBollo'
  },
  __Dati_Numero085: {
    type: Number,
    alias: 'VMarcaDaBollo'
  },
  __Dati_Numero086: {
    type: Number,
    alias: 'FlagAllegaPDF'
  },
  __Dati_Numero087: {
    type: Number,
    alias: 'PesoLordo'
  },
  __Dati_Numero088: {
    type: Number,
    alias: 'PesoNetto'
  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataCompetenzaIva'
  },
  __Dati_Testo054: {
    type: String,
    alias: 'CodiceCommessa'
  },
  __Dati_Testo055: {
    type: String,
    alias: 'Causale'
  },
  __Dati_Testo056: {
    type: String,
    alias: 'CodiceContratto'
  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataContratto'
  },
  __Dati_Testo057: {
    type: String,
    alias: 'RiferimentoAmministrazione'
  },
  __Dati_Numero089: {
    type: Number,
    alias: 'VBonusFiscaleValuta'
  },
  __Dati_Numero090: {
    type: Number,
    alias: 'VBonusFiscale'
  },
  __Dati_Testo058: {
    type: String,
    alias: 'CodiceCodifica'
  },
  __Dati_Numero091: {
    type: Number,
    alias: 'ProtocolloIntegrazione'
  },
  __Dati_Numero092: {
    type: Number,
    alias: 'FlagModificaAcquistoChiuso'
  },
  __Dati_Testo059: {
    type: String,
    alias: 'IdAccountIntermediario'
  },
  __Dati_Testo060: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo061: {
    type: String,
    alias: 'CodiceUnivocoSDI'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DocContabiliSchema;