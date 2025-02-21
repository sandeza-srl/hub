import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDocOperativiPrivate } from './DocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const DocOperativiSchema = new mongoose.Schema<IDocOperativiPrivate>({

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
alias: 'CodiceTipoDocOperativo',

},
__Dati_Testo002: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Testo003: {
type: String,
alias: 'TxtTipoDocOperativo',

},
__Dati_Testo004: {
type: String,
alias: 'IdDocOperativo',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo007: {
type: String,
alias: 'CodiceDocOperativo',

},
__Dati_Data001: {
type: Date,
alias: 'DataDocOperativo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo008: {
type: String,
alias: 'IdAccountEmittente',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountPagatore',

},
__Dati_Testo010: {
type: String,
alias: 'IdAccountTutti',

},
__Dati_Testo011: {
type: String,
alias: 'IdDocumentoCollegato',

},
__Dati_Testo012: {
type: String,
alias: 'IdOfferta_ListaVoci',

},
__Dati_Testo013: {
type: String,
alias: 'IdProgetto_ListaVoci',

},
__Dati_Testo014: {
type: String,
alias: 'IdItem_ListaVoci',

},
__Dati_Numero002: {
type: Number,
alias: 'AnnoMeseDocOperativo',

},
__Dati_Numero003: {
type: Number,
alias: 'AnnoSettimanaDocOperativo',

},
__Dati_Testo015: {
type: String,
alias: 'TxtAccountCompagnia',

},
__Dati_Testo016: {
type: String,
alias: 'TxtAccountDocOperativo',

},
__Dati_Testo017: {
type: String,
alias: 'TxtFattore',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagIn',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagOut',

},
__Dati_Numero006: {
type: Number,
alias: 'Progressivo',

},
__Dati_Numero007: {
type: Number,
alias: 'AnnoDocOperativo',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagBloccato',

},
__Dati_Testo018: {
type: String,
alias: 'CodiceEsterno',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagCondizioni_CodiceEsternoObbligatorio',

},
__Dati_Testo019: {
type: String,
alias: 'SimboloValuta',

},
__Dati_Numero010: {
type: Number,
alias: 'ConversioneValutaSuPrincipale',

},
__Dati_Numero011: {
type: Number,
alias: 'VDaPagare_06',

},
__Dati_Numero012: {
type: Number,
alias: 'VDaPagareSegno_07',

},
__Dati_Numero013: {
type: Number,
alias: 'VDaPagareValuta_06',

},
__Dati_Numero014: {
type: Number,
alias: 'VEntrataImponibile_04',

},
__Dati_Numero015: {
type: Number,
alias: 'VEntrataTotale_06',

},
__Dati_Numero016: {
type: Number,
alias: 'VEntrataTotaleDaPagare_07',

},
__Dati_Numero017: {
type: Number,
alias: 'VImponibile_03',

},
__Dati_Numero018: {
type: Number,
alias: 'VImponibileSegno_04',

},
__Dati_Numero019: {
type: Number,
alias: 'VImponibileValuta_03',

},
__Dati_Numero020: {
type: Number,
alias: 'VImponibileSenzaVariazioni_03',

},
__Dati_Numero021: {
type: Number,
alias: 'VImponibileSenzaVariazioniSegno_04',

},
__Dati_Numero022: {
type: Number,
alias: 'VImponibileSenzaVariazioniValuta_03',

},
__Dati_Numero023: {
type: Number,
alias: 'VIva_03',

},
__Dati_Numero024: {
type: Number,
alias: 'VIvaSegno_04',

},
__Dati_Numero025: {
type: Number,
alias: 'VIvaValuta_03',

},
__Dati_Numero026: {
type: Number,
alias: 'VPagato_03',

},
__Dati_Numero027: {
type: Number,
alias: 'VPagatoSegno_04',

},
__Dati_Numero028: {
type: Number,
alias: 'VPagatoValuta_03',

},
__Dati_Numero029: {
type: Number,
alias: 'VSconto_04',

},
__Dati_Numero030: {
type: Number,
alias: 'VScontoSegno_06',

},
__Dati_Numero031: {
type: Number,
alias: 'VScontoValuta_04',

},
__Dati_Numero032: {
type: Number,
alias: 'VTotale_04',

},
__Dati_Numero033: {
type: Number,
alias: 'VTotaleSegno_06',

},
__Dati_Numero034: {
type: Number,
alias: 'VTotaleValuta_04',

},
__Dati_Numero035: {
type: Number,
alias: 'VUscitaImponibile_04',

},
__Dati_Numero036: {
type: Number,
alias: 'VUscitaTotale_06',

},
__Dati_Numero037: {
type: Number,
alias: 'VUscitaTotaleDaPagare_07',

},
__Dati_Numero038: {
type: Number,
alias: 'VUscitaTotaleSegno_07',

},
__Dati_Numero039: {
type: Number,
alias: 'FlagPagamentoPresente',

},
__Dati_Numero040: {
type: Number,
alias: 'FlagPagatoTutto',

},
__Dati_Testo020: {
type: String,
alias: 'IdDocContabile_ListaVoci',

},
__Dati_Testo021: {
type: String,
alias: 'TxtDocOperativo',

},
__Dati_Data002: {
type: Date,
alias: 'DataInserimentoDocContabiliPrevista',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero041: {
type: Number,
alias: 'FlagTipoRapportoLavoro',

},
__Dati_Numero042: {
type: Number,
alias: 'FlagTipoGenericoAcquisto',

},
__Dati_Numero043: {
type: Number,
alias: 'FlagTipoGenericoVendita',

},
__Dati_Numero044: {
type: Number,
alias: 'FlagTipoDdt',

},
__Dati_Testo022: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo023: {
type: String,
alias: 'CodiceDocOperativoEsternoAutomatico',

},
__Dati_Numero045: {
type: Number,
alias: 'FlagCondizioni_InseribileDocContabili',

},
__Dati_Numero046: {
type: Number,
alias: 'FlagRipetitizionePossibile',

},
__Dati_Numero047: {
type: Number,
alias: 'FlagTipoOrdineClienteInterno',

},
__Dati_Numero048: {
type: Number,
alias: 'FlagTipoOrdineAcquisto',

},
__Dati_Numero049: {
type: Number,
alias: 'FlagTipoRichiestaPreventivoApprovigionamento',

},
__Dati_Testo024: {
type: String,
alias: 'IdAccountVettore',

},
__Dati_Testo025: {
type: String,
alias: 'IdAccountDestinatario',

},
__Dati_Numero050: {
type: Number,
alias: 'FlagItemEntrata',

},
__Dati_Numero051: {
type: Number,
alias: 'FlagItemUscita',

},
__Dati_Numero052: {
type: Number,
alias: 'FlagItemFabbisogno',

},
__Dati_Numero053: {
type: Number,
alias: 'FlagItemOrdinato',

},
__Dati_Numero054: {
type: Number,
alias: 'FlagItemPrenotato',

},
__Dati_Numero055: {
type: Number,
alias: 'FlagItemRichiestoOrdineApprovigionamento',

},
__Dati_Testo026: {
type: String,
alias: 'IdTipiDocOperativo_OrigineDatiTutti',

},
__Dati_Numero056: {
type: Number,
alias: 'FlagStato01_Provvisorio',

},
__Dati_Numero057: {
type: Number,
alias: 'FlagPerStati_ChiusoManuale',

},
__Dati_Testo027: {
type: String,
alias: 'TxtStatoDocOperativo',

},
__Dati_Testo028: {
type: String,
alias: 'IdAccountDocOperativo',

},
__Dati_Testo029: {
type: String,
alias: 'LinguaPrincipale',

},
__Dati_Testo030: {
type: String,
alias: 'IdDocOperativiOrigineDiretti_ListaVoci',

},
__Dati_Testo031: {
type: String,
alias: 'TxtAutomaticoDocOperativo',

},
__Dati_Testo032: {
type: String,
alias: 'TxtMagazzinoGestitoDestinazione',

},
__Dati_Testo033: {
type: String,
alias: 'IdMagazzinoGestitoDestinazione',

},
__Dati_Testo034: {
type: String,
alias: 'IdMagazzinoGestitoOrigine',

},
__Dati_Testo035: {
type: String,
alias: 'TxtMagazzinoGestitoOrigine',

},
__Dati_Numero058: {
type: Number,
alias: 'FlagCondizioni_MovimentaMultiMagazzino',

},
__Dati_Numero059: {
type: Number,
alias: 'FlagTipoRichiestaApprovigionamento',

},
__Dati_Numero060: {
type: Number,
alias: 'FlagTipoDocumentoMagazzino',

},
__Dati_Numero061: {
type: Number,
alias: 'FlagRegoleStati_ProvvisorioPossibile',

},
__Dati_Testo036: {
type: String,
alias: 'IdFaseProgetto_ListaVoci',

},
__Dati_Numero062: {
type: Number,
alias: 'FlagStato08_DaCompletareInserDocContabili',

},
__Dati_Numero063: {
type: Number,
alias: 'FlagStato06_DaCompletareScaricamento',

},
__Dati_Numero064: {
type: Number,
alias: 'FlagGiacenzaGeneraleIN',

},
__Dati_Numero065: {
type: Number,
alias: 'FlagGiacenzaGeneraleOUT',

},
__Dati_Numero066: {
type: Number,
alias: 'FlagStato03_DaMovimentareStock',

},
__Dati_Testo037: {
type: String,
alias: 'IdIntervento_ListaVoci',

},
__Dati_Testo038: {
type: String,
alias: 'IdSedeDestinatario',

},
__Dati_Numero067: {
type: Number,
alias: 'OrdineStatoDocOperativo',

},
__Dati_Testo039: {
type: String,
alias: 'IdRubricaDestinatario',

},
__Dati_Testo040: {
type: String,
alias: 'TxtAccountDestinatario',

},
__Dati_Testo041: {
type: String,
alias: 'FlagTipo_TipoLista',

},
__Dati_Testo042: {
type: String,
alias: 'IdRubricaVettore',

},
__Dati_Testo043: {
type: String,
alias: 'TxtAccountVettore',

},
__Dati_Testo044: {
type: String,
alias: 'IdAccountIntermediario',

},
__Dati_Testo045: {
type: String,
alias: 'TxtAccountIntermediario',

},
__Dati_Testo046: {
type: String,
alias: 'IdRubricaIntermediario',

},
__Dati_Testo047: {
type: String,
alias: 'IdMagazziniGestitiOriginePossibili',

},
__Dati_Testo048: {
type: String,
alias: 'IdMagazziniGestitiDestinazionePossibili',

},
__Dati_Numero068: {
type: Number,
alias: 'FlagStato04_DaConcludereMovimentazioneStock',

},
__Dati_Numero069: {
type: Number,
alias: 'FlagDocumentoDiCorrezioneMagazzino',

},
__Dati_Numero070: {
type: Number,
alias: 'InserimentoInDocContabili_VImponibileResiduo_03',

},
__Dati_Numero071: {
type: Number,
alias: 'InserimentoInDocContabili_VImponibileSegnoResiduo_03',

},
__Dati_Numero072: {
type: Number,
alias: 'ConversioneValutaAPrincipale',

},
__Dati_Testo049: {
type: String,
alias: 'IdTipoDocOperativoPerCodice',

},
__Dati_Testo050: {
type: String,
alias: 'IdDocOperativiOrigineTutti_ListaVoci',

},
__Dati_Numero073: {
type: Number,
alias: 'AnnoMeseInsDocContabili',

},
__Dati_Numero074: {
type: Number,
alias: 'AnnoSettimanaInsDocContabili',

},
__Dati_Testo051: {
type: String,
alias: 'TxtSettAnnoDataInsDocContabiliPrevista',

},
__Dati_Numero075: {
type: Number,
alias: 'Zero',

},
__Dati_Numero076: {
type: Number,
alias: 'AnnoMeseRegistrazioneDocOperativo',

},
__Dati_Numero077: {
type: Number,
alias: 'AnnoRegistrazioneDocOperativo',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Data003: {
type: Date,
alias: 'DataRegistrazioneDocOperativo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo052: {
type: String,
alias: 'IdPeriodoContabile',

},
__Dati_Testo053: {
type: String,
alias: 'TxtPeriodoContabile',

},
__Dati_Data004: {
type: Date,
alias: 'DataValoreValuta',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero078: {
type: Number,
alias: 'FlagAggiorna03_ValoriDaVoci',

},
__Dati_Numero079: {
type: Number,
alias: 'FlagAggiorna02_ValoriRiferimento',

},
__Dati_Testo054: {
type: String,
alias: 'IdValuta',

},
__Dati_Testo055: {
type: String,
alias: 'SimboloRidottoValuta',

},
__Dati_Testo056: {
type: String,
alias: 'TxtValuta',

},
__Dati_Testo057: {
type: String,
alias: 'LinguaDocumento',

},
__Dati_Testo058: {
type: String,
alias: 'IdRubricaDocOperativo',

},
__Dati_Testo059: {
type: String,
alias: 'IdSedeAnagraficaDocOperativo',

},
__Dati_Numero080: {
type: Number,
alias: 'FlagRispettaProgressivo',

},
__Dati_Testo060: {
type: String,
alias: 'IdImpianto_ListaVoci',

},
__Dati_Testo061: {
type: String,
alias: 'IdDocOperativiOrigineDiretti_InseritiDoc',

},
__Dati_Testo062: {
type: String,
alias: 'IdDocOperativiOrigineDiretti_Tutti',

},
__Dati_Testo063: {
type: String,
alias: 'IdFaseProduzione_ListaVoci',

},
__Dati_Numero081: {
type: Number,
alias: 'FlagAggiorna01_ValoriDaTipiDocOperativi',

},
__Dati_Numero082: {
type: Number,
alias: 'FlagAggiorna05_Stati',

},
__Dati_Testo064: {
type: String,
alias: 'IdDocContabile_InseritiDoc',

},
__Dati_Testo065: {
type: String,
alias: 'IdDocContabile_Tutti',

},
__Dati_Numero083: {
type: Number,
alias: 'FlagAggiorna04_Totali',

},
__Dati_Testo066: {
type: String,
alias: 'IdDocOperativiOrigineTutti_InseritiDoc',

},
__Dati_Testo067: {
type: String,
alias: 'IdDocOperativiOrigineTutti_Tutti',

},
__Dati_Testo068: {
type: String,
alias: 'IdRigaOrdineProduzione_ListaVoci',

},
__Dati_Testo069: {
type: String,
alias: 'IdIntervento_InseritiDoc',

},
__Dati_Testo070: {
type: String,
alias: 'IdIntervento_Tutti',

},
__Dati_Testo071: {
type: String,
alias: 'IdImpianto_InseritiDoc',

},
__Dati_Testo072: {
type: String,
alias: 'IdImpianto_Tutti',

},
__Dati_Testo073: {
type: String,
alias: 'IdItem_InseritiDoc',

},
__Dati_Testo074: {
type: String,
alias: 'IdItem_Tutti',

},
__Dati_Testo075: {
type: String,
alias: 'IdFaseProduzione_InseritiDoc',

},
__Dati_Testo076: {
type: String,
alias: 'IdFaseProduzione_Tutti',

},
__Dati_Testo077: {
type: String,
alias: 'IdOfferta_InseritiDoc',

},
__Dati_Testo078: {
type: String,
alias: 'IdOfferta_Tutti',

},
__Dati_Testo079: {
type: String,
alias: 'IdProgetto_InseritiDoc',

},
__Dati_Testo080: {
type: String,
alias: 'IdProgetto_Tutti',

},
__Dati_Testo081: {
type: String,
alias: 'IdRigaOrdineProduzione_InseritiDoc',

},
__Dati_Testo082: {
type: String,
alias: 'IdRigaOrdineProduzione_Tutti',

},
__Dati_Numero084: {
type: Number,
alias: 'FlagAggiorna06_Totali2',

},
__Dati_Numero085: {
type: Number,
alias: 'FlagAggiorna07_Totali3',

},
__Dati_Testo083: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo084: {
type: String,
alias: 'IdRubricaCompagnia',

},
__Dati_Testo085: {
type: String,
alias: 'IdSedeCompagnia',

},
__Dati_Testo086: {
type: String,
alias: 'IdSedeIntermediario',

},
__Dati_Testo087: {
type: String,
alias: 'IdSedeVettore',

},
__Dati_Numero086: {
type: Number,
alias: 'FlagInvioMail_ReferenteCompagnia',

},
__Dati_Numero087: {
type: Number,
alias: 'FlagInvioMail_ReferenteDestinatario',

},
__Dati_Numero088: {
type: Number,
alias: 'FlagInvioMail_ReferenteDocOperativo',

},
__Dati_Numero089: {
type: Number,
alias: 'FlagInvioMail_ReferenteIntermediario',

},
__Dati_Numero090: {
type: Number,
alias: 'FlagInvioMail_ReferenteVettore',

},
__Dati_Testo088: {
type: String,
alias: 'NomeRubricaPosizioneCompagnia',

},
__Dati_Testo089: {
type: String,
alias: 'NomeRubricaPosizioneDocOperativo',

},
__Dati_Testo090: {
type: String,
alias: 'NomeRubricaPosizioneVettore',

},
__Dati_Testo091: {
type: String,
alias: 'NomeRubricaPosizioneIntermediario',

},
__Dati_Testo092: {
type: String,
alias: 'NomeRubricaPosizioneDestinatario',

},
__Dati_Testo093: {
type: String,
alias: 'IdItemFaseProduzione_InseritiDoc',

},
__Dati_Testo094: {
type: String,
alias: 'IdItemFaseProduzione_ListaVoci',

},
__Dati_Testo095: {
type: String,
alias: 'IdItemFaseProduzione_Tutti',

},
__Dati_Numero091: {
type: Number,
alias: 'FlagTipoOrdineProduzione',

},
__Dati_Numero092: {
type: Number,
alias: 'FlagRegoleStati_ChiusuraAutomatica',

},
__Dati_Numero093: {
type: Number,
alias: 'FlagStato07_DaInserireDocContabili',

},
__Dati_Numero094: {
type: Number,
alias: 'FlagStato05_DaScaricare',

},
__Dati_Numero095: {
type: Number,
alias: 'FlagStato09_DaChiudere',

},
__Dati_Testo096: {
type: String,
alias: 'FlagStatiFatturabiliTxt',

},
__Dati_Testo097: {
type: String,
alias: 'FlagStatiSequenzaTxt',

},
__Dati_Numero096: {
type: Number,
alias: 'FlagStato10_ChiusoAutomatico',

},
__Dati_Numero097: {
type: Number,
alias: 'FlagStato02_Aperto',

},
__Dati_Numero098: {
type: Number,
alias: 'FlagDaInserireDocContabili',

},
__Dati_Numero099: {
type: Number,
alias: 'FlagDisponibilita_CreabileMobile',

},
__Dati_Testo098: {
type: String,
alias: 'FlagStatiDaValidareTxt',

},
__Dati_Numero100: {
type: Number,
alias: 'FlagStatiDaValidarePresenti',

},
__Dati_Testo099: {
type: String,
alias: 'StampValidazione',

},
__Dati_Numero101: {
type: Number,
alias: 'FlagValidazione_DocOperativoValidato',

},
__Dati_Testo100: {
type: String,
alias: 'FlagStatiValidatiTxt',

},
__Dati_Numero102: {
type: Number,
alias: 'FlagValidazione_DaValidare',

},
__Dati_Numero103: {
type: Number,
alias: 'FlagValorizzaPreventivo',

},
__Dati_Numero104: {
type: Number,
alias: 'FlagValorizzaConsuntivo',

},
__Dati_Numero105: {
type: Number,
alias: 'PercentualeAvanzamentoScaricamento',

},
__Dati_Numero106: {
type: Number,
alias: 'Invio_FlagInviato',

},
__Dati_Testo101: {
type: String,
alias: 'Invio_TxtInvio',

},
__Dati_Numero107: {
type: Number,
alias: 'FlagCreaProgetto',

},
__Dati_Numero108: {
type: Number,
alias: 'NumSettimanaDocOperativo',

},
__Dati_Numero109: {
type: Number,
alias: 'FlagTipoCassa',

},
__Dati_Testo102: {
type: String,
alias: 'IdMetodoPagamento',

},
__Dati_Testo103: {
type: String,
alias: 'IdRegolaScadenza',

},
__Dati_Testo104: {
type: String,
alias: 'TxtMetodoPagamento',

},
__Dati_Testo105: {
type: String,
alias: 'TxtRegolaScadenza',

},
__Dati_Numero110: {
type: Number,
alias: 'VImponibileResiduoPerDestinazione_03',

},
__Dati_Numero111: {
type: Number,
alias: 'VImponibileScaricatoDaDestinazione_03',

},
__Dati_Testo106: {
type: String,
alias: 'FlagSelezionatoPerFatturazione',

},
__Dati_Testo107: {
type: String,
alias: 'IdTemporaneoFatturazioneAutomatica',

},
__Dati_Testo108: {
type: String,
alias: 'TxtMetodoRegola',

},
__Dati_Testo109: {
type: String,
alias: 'IdAccountSecondoVettore',

},
__Dati_Testo110: {
type: String,
alias: 'TxtAccountSecondoVettore',

},
__Dati_Testo111: {
type: String,
alias: 'IdSedeSecondoVettore',

},
__Dati_Testo112: {
type: String,
alias: 'Log_Parametro',

},
__Dati_Numero112: {
type: Number,
alias: 'FlagCodicePrimaNumeroSerie',

},
__Dati_Numero113: {
type: Number,
alias: 'FlagStatoApertoConcluso',

},
__Dati_Numero114: {
type: Number,
alias: 'InserimentoInDocContabili_VIvaSegnoResidua_03',

},
__Dati_Numero115: {
type: Number,
alias: 'InserimentoInDocContabili_VTotaleSegnoResiduo_03',

},
__Dati_Testo113: {
type: String,
alias: 'IdCassaBancaEmittente',

},
__Dati_Testo114: {
type: String,
alias: 'IdCassaBancaPagatore',

},
__Dati_Numero116: {
type: Number,
alias: 'NumeroDecimaliValutaDocumento',

},
__Dati_Numero117: {
type: Number,
alias: 'NumeroDecimaliValutaPrincipale',

},
__Dati_Testo115: {
type: String,
alias: 'CodiceCUP',

},
__Dati_Testo116: {
type: String,
alias: 'CodiceCIG',

},
__Dati_Numero118: {
type: Number,
alias: 'FlagCreatoDaMobile',

},
__Dati_Testo117: {
type: String,
alias: 'IdLottiProduzione_InseritiDoc',

},
__Dati_Testo118: {
type: String,
alias: 'IdLottiProduzione_ListaVoci',

},
__Dati_Testo119: {
type: String,
alias: 'IdLottiProduzione_Tutti',

},
__Dati_Testo120: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero119: {
type: Number,
alias: 'FlagCondizioni_LancioProduzioneRichiesto',

},
__Dati_Numero120: {
type: Number,
alias: 'FlagRegoleStati_AnnullamentoPossibile',

},
__Dati_Numero121: {
type: Number,
alias: 'FlagCondizioni_RichiestoInvio',

},
__Dati_Numero122: {
type: Number,
alias: 'FlagCondizioni_ScaricatoDaDocOperativo',

},
__Dati_Numero123: {
type: Number,
alias: 'FlagPerStati_MovimentazioneTracciabilitaDaCompletare',

},
__Dati_Numero124: {
type: Number,
alias: 'FlagPerStati_MovimentazioneMultiMagazzinoDaCompletare',

},
__Dati_Numero125: {
type: Number,
alias: 'FlagPerStati_CreazioneRigheDaCompletare',

},
__Dati_Numero126: {
type: Number,
alias: 'FlagPerStati_CreazioneLottiDaCompletare',

},
__Dati_Numero127: {
type: Number,
alias: 'FlagPerStati_InserimentoDocContabiliDaCompletare',

},
__Dati_Numero128: {
type: Number,
alias: 'FlagPerStati_DocOperativoChiusoForzatamente',

},
__Dati_Numero129: {
type: Number,
alias: 'FlagPerStati_DocOperativoAnnullato',

},
__Dati_Numero130: {
type: Number,
alias: 'FlagPerStati_DocOperativoProvvisorio',

},
__Dati_Numero131: {
type: Number,
alias: 'FlagPerStati_NumeroStato',

},
__Dati_Numero132: {
type: Number,
alias: 'FlagPerStati_DocOperativoDaCompletare',

},
__Dati_Testo121: {
type: String,
alias: 'FlagPerStati_TxtCondizioniDaCompletare',

},
__Dati_Numero133: {
type: Number,
alias: 'FlagPerStati_DocOperativoChiuso',

},
__Dati_Testo122: {
type: String,
alias: 'FlagPerStati_TxtStato',

},
__Dati_Numero134: {
type: Number,
alias: 'FlagDisponibilita_VisibileMobile',

},
__Dati_Numero135: {
type: Number,
alias: 'FlagDisponibilita_VisibileInventario',

},
__Dati_Numero136: {
type: Number,
alias: 'FlagDisponibilita_VisibileRaccoltaDati',

},
__Dati_Numero137: {
type: Number,
alias: 'FlagDisponibilita_VisibileWeb',

},
__Dati_Numero138: {
type: Number,
alias: 'FlagPerStati_CodiceEsternoDaInserire',

},
__Dati_Numero139: {
type: Number,
alias: 'FlagPerStati_DaInviare',

},
__Dati_Testo123: {
type: String,
alias: 'FlagPerStati_TxtStatoCondizioniDaCompletareAutomatico',

},
__Dati_Numero140: {
type: Number,
alias: 'FlagPerStati_ScaricoVociDaCompletare',

},
__Dati_Numero141: {
type: Number,
alias: 'FlagPerStati_SchedeAttivitaControlloDaCreare',

},
__Dati_DataOra003: {
type: Date,
alias: 'AnnullamentoDocumento_DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo124: {
type: String,
alias: 'AnnullamentoDocumento_TxtUtente',

},
__Dati_Testo125: {
type: String,
alias: 'AnnullamentoDocumento_Note',

},
__Dati_Testo126: {
type: String,
alias: 'IdAliquotaAnagrafica',

},
__Dati_Testo127: {
type: String,
alias: 'IdRubricaSecondoVettore',

},
__Dati_Testo128: {
type: String,
alias: 'NomeRubricaPosizioneSecondoVettore',

},
__Dati_Testo129: {
type: String,
alias: 'IdSedeEmittente',

},
__Dati_Numero142: {
type: Number,
alias: 'FlagOperazionale_DocOperativoInEliminazione',

},
__Dati_DataOra004: {
type: Date,
alias: 'ChiusuraForzataDocumento_DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo130: {
type: String,
alias: 'ChiusuraForzataDocumento_Note',

},
__Dati_Testo131: {
type: String,
alias: 'ChiusuraForzataDocumento_TxtUtente',

},
__Dati_Numero143: {
type: Number,
alias: 'FlagRegoleStati_ChiusuraForzataPossibile',

},
__Dati_Numero144: {
type: Number,
alias: 'FlagPerStati_DaChiudereManualmente',

},
__Dati_Testo132: {
type: String,
alias: 'IdTipoDocOperativoOrigineDiretti_InseritiDoc',

},
__Dati_Numero145: {
type: Number,
alias: 'FlagFiltroMultirichiesta',

},
__Dati_Numero146: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagLimitato',

},
__Dati_Numero147: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagLimitato',

},
__Dati_Numero148: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagLimitato',

},
__Dati_Numero149: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagFirmaRichiesta',

},
__Dati_Numero150: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagFirmaRichiesta',

},
__Dati_Numero151: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagFirmaRichiesta',

},
__Dati_Numero152: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagFirmaNecessaria',

},
__Dati_Testo133: {
type: String,
alias: 'VincoliStatiPerRuoli_Invio_EspressioneCondizioneFirma',

},
__Dati_Testo134: {
type: String,
alias: 'VincoliStatiPerRuoli_Fatturazione_EspressioneCondizioneFirma',

},
__Dati_Numero153: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagFirmaNecessaria',

},
__Dati_Numero154: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagFirmaNecessaria',

},
__Dati_Testo135: {
type: String,
alias: 'VincoliStatiPerRuoli_Chiusura_EspressioneCondizioneFirma',

},
__Dati_Numero155: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagFirmaApposta',

},
__Dati_Numero156: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagFirmaApposta',

},
__Dati_Numero157: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagFirmaApposta',

},
__Dati_Testo136: {
type: String,
alias: 'VincoliStatiPerRuoli_Invio_IdAccountOperatoreFirma',

},
__Dati_Testo137: {
type: String,
alias: 'VincoliStatiPerRuoli_Fatturazione_IdAccountOperatoreFirma',

},
__Dati_Testo138: {
type: String,
alias: 'VincoliStatiPerRuoli_Chiusura_IdAccountOperatoreFirma',

},
__Dati_Testo139: {
type: String,
alias: 'VincoliStatiPerRuoli_Chiusura_TxtAccountOperatoreFirma',

},
__Dati_Testo140: {
type: String,
alias: 'VincoliStatiPerRuoli_Fatturazione_TxtAccountOperatoreFirma',

},
__Dati_Testo141: {
type: String,
alias: 'VincoliStatiPerRuoli_Invio_TxtAccountOperatoreFirma',

},
__Dati_DataOra005: {
type: Date,
alias: 'VincoliStatiPerRuoli_Invio_DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra006: {
type: Date,
alias: 'VincoliStatiPerRuoli_Fatturazione_DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra007: {
type: Date,
alias: 'VincoliStatiPerRuoli_Chiusura_DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Contenitore001: {
type: String,
alias: 'VincoliStatiPerRuoli_Chiusura_ImgFirma',

},
__Dati_Contenitore002: {
type: String,
alias: 'VincoliStatiPerRuoli_Fatturazione_ImgFirma',

},
__Dati_Contenitore003: {
type: String,
alias: 'VincoliStatiPerRuoli_Invio_ImgFirma',

},
__Dati_Numero158: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagValidato',

},
__Dati_Numero159: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagValidato',

},
__Dati_Numero160: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagValidato',

},
__Dati_DataOra008: {
type: Date,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo142: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_EspressioneCondizioneFirma',

},
__Dati_Numero161: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaApposta',

},
__Dati_Numero162: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaNecessaria',

},
__Dati_Numero163: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaRichiesta',

},
__Dati_Numero164: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagLimitato',

},
__Dati_Numero165: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagValidato',

},
__Dati_Testo143: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_IdAccountOperatoreFirma',

},
__Dati_Contenitore004: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_ImgFirma',

},
__Dati_Testo144: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_TxtAccountOperatoreFirma',

},
__Dati_DataOra009: {
type: Date,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo145: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_EspressioneCondizioneFirma',

},
__Dati_Numero166: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaApposta',

},
__Dati_Numero167: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaNecessaria',

},
__Dati_Numero168: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaRichiesta',

},
__Dati_Numero169: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagLimitato',

},
__Dati_Numero170: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagValidato',

},
__Dati_Testo146: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_IdAccountOperatoreFirma',

},
__Dati_Contenitore005: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_ImgFirma',

},
__Dati_Testo147: {
type: String,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_TxtAccountOperatoreFirma',

},
__Dati_Numero171: {
type: Number,
alias: 'FlagIdAliquotaAnagrafica_NuovaModalita',

},
__Dati_Testo148: {
type: String,
alias: 'IdTipiDocOperativo_OrigineDatiTutti_ConScarico',

},
__Dati_Numero172: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagRichiediPsw',

},
__Dati_Numero173: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagRichiediPsw',

},
__Dati_Numero174: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagRichiediPsw',

},
__Dati_Numero175: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagRichiediPsw',

},
__Dati_Numero176: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagRichiediPsw',

},
__Dati_Numero177: {
type: Number,
alias: 'VincoliStatiPerRuoli_Chiusura_FlagBloccaDocumento',

},
__Dati_Numero178: {
type: Number,
alias: 'VincoliStatiPerRuoli_Invio_FlagBloccaDocumento',

},
__Dati_Numero179: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareValori_FlagBloccaDocumento',

},
__Dati_Numero180: {
type: Number,
alias: 'VincoliStatiPerRuoli_Fatturazione_FlagBloccaDocumento',

},
__Dati_Numero181: {
type: Number,
alias: 'VincoliStatiPerRuoli_DaConfermareDate_FlagBloccaDocumento',

},
__Dati_Testo149: {
type: String,
alias: 'GruppoLavoro_IdTipoGruppoLavoro',

},
__Dati_Testo150: {
type: String,
alias: 'GruppoLavoro_IdGruppoLavoro',

},
__Dati_Testo151: {
type: String,
alias: 'GruppoLavoro_TxtGruppoLavoro01',

},
__Dati_Testo152: {
type: String,
alias: 'GruppoLavoro_IdReferente',

},
__Dati_Testo153: {
type: String,
alias: 'GruppoLavoro_IdOperatoriGruppoLavoro01',

},
__Dati_Numero182: {
type: Number,
alias: 'GruppoLavoro_FlagGruppoLavoroPresente',

},
__Dati_Numero183: {
type: Number,
alias: 'GruppoLavoro_FlagImpostazioniGruppoEreditateDaOrigine',

},
__Dati_Testo154: {
type: String,
alias: 'TxtNoteDocOperativo',

},
__Dati_Numero184: {
type: Number,
alias: 'GruppoLavoro_FlagAggiornaDati01',

},
__Dati_Testo155: {
type: String,
alias: 'GruppoLavoro_IdReferenteGruppoLavoro',

},
__Dati_Numero185: {
type: Number,
alias: 'FlagRegoleStati_AperturaForzataPossibile',

},
__Dati_Numero186: {
type: Number,
alias: 'FlagPerStati_DocOperativoApertoForzatamente',

},
__Dati_Numero187: {
type: Number,
alias: 'FlagItemMovimentaContenitori',

},
__Dati_Numero188: {
type: Number,
alias: 'AnnoPerDichiarazioneIntento',

},
__Dati_Numero189: {
type: Number,
alias: 'InterconnessioneMagazzino_FlagAttiva',

},
__Dati_Testo156: {
type: String,
alias: 'CodiceAccountDocOperativo',

},
__Dati_Numero190: {
type: Number,
alias: 'FlagCondizioni_CompetenzeRichieste',

},
__Dati_Numero191: {
type: Number,
alias: 'FlagPerStati_CompetenzeDaInserire',

},
__Dati_Numero192: {
type: Number,
alias: 'Performance_TriggerAggiornamentoRelazione',

},
__Dati_Testo157: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Numero193: {
type: Number,
alias: 'LimitazioniScheda_AccessoScheda_FlagLimitato',

},
__Dati_Numero194: {
type: Number,
alias: 'LimitazioniScheda_Creazione_FlagLimitato',

},
__Dati_Numero195: {
type: Number,
alias: 'LimitazioniScheda_Eliminazione_FlagLimitato',

},
__Dati_Numero196: {
type: Number,
alias: 'LimitazioniScheda_VisibilitaValoriEconomici_FlagLimitato',

},
__Dati_Testo158: {
type: String,
alias: 'Log_Creazione',

},
__Dati_Testo159: {
type: String,
alias: 'Log_Modifica',

},
__Dati_Testo160: {
type: String,
alias: 'Log_ScriptEseguiti',

},
__Dati_Testo161: {
type: String,
alias: 'Log_ModificaFlagStatiSequenzaTxt',

},
__Dati_Testo162: {
type: String,
alias: 'Log_ModificaDataDocOperativo',

},
__Dati_Testo163: {
type: String,
alias: 'Log_Progressivo',

},
__Dati_Numero197: {
type: Number,
alias: 'Multimagazzino_Svincola',

},
__Dati_Testo164: {
type: String,
alias: 'IdMagazziniGestitiOriginePossibili_Svincolati',

},
__Dati_Testo165: {
type: String,
alias: 'IdMagazziniGestitiDestinazionePossibili_Svincolati',

},
__Dati_Testo166: {
type: String,
alias: 'IdMagazzinoGestitoDestinazione_Svincolato',

},
__Dati_Testo167: {
type: String,
alias: 'IdMagazzinoGestitoOrigine_Svincolato',

},
__Dati_Testo168: {
type: String,
alias: 'TxtMagazzinoGestitoDestinazione_SvincolatoSede',

},
__Dati_Testo169: {
type: String,
alias: 'TxtMagazzinoGestitoOrigine_SvincolatoSede',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DocOperativiSchema;