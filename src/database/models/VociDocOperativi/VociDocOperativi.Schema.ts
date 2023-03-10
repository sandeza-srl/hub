import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IVociDocOperativiPrivate } from './VociDocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociDocOperativiSchema = new mongoose.Schema<IVociDocOperativiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdDocOperativo'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdVoceDocOperativo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtItem'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'OrdineVoce'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'NoteInterne'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'PercentualeIva'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'QuantitaItem'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'QuantitaDefinitivoItem'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'QuantitaVariazioneItem'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'VIvaValuta'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VUnitarioItemValuta'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VTotaleValuta'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'VImponibileValuta'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEffettiva'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'UnitaMisuraItem'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'SimboloValuta'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAliquota'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtAliquota'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VTotale'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VImponibile'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VIva'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'ConversioneValutaAPrincipale'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'LinguaPrincipale'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagItem'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VPercVariazioneUnitario'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'VPercVariazioniTotale'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VUnitarioDefinitivoItemValuta'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'VUnitarioDefinitivoItem'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'VUnitarioItem'
  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagIn'
  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagOut'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountEmittente'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdAccountPagatore'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdProgetto'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdFaseProgetto'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdTipoListino'
  },
  __Dati_Numero023: {
    type: Number,
    alias: 'ConversioneUmDaItemAFornitura'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdFornituraItem'
  },
  __Dati_Numero024: {
    type: Number,
    alias: 'VUnitarioFornituraValuta'
  },
  __Dati_Numero025: {
    type: Number,
    alias: 'VUnitarioDefinitivoFornituraValuta'
  },
  __Dati_Numero026: {
    type: Number,
    alias: 'VUnitarioDefinitivoFornitura'
  },
  __Dati_Numero027: {
    type: Number,
    alias: 'QuantitaFornitura'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'UnitaMisuraFornitura'
  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagVoceLibera'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdVoceProgetto'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceItem'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdFamigliaItem'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdSottoFamigliaItem'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtFamigliaItem'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtSottoFamigliaItem'
  },
  __Dati_Numero029: {
    type: Number,
    alias: 'QuantitaVariazioneFornitura'
  },
  __Dati_Numero030: {
    type: Number,
    alias: 'FlagUmDiverse'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'CodiceRiferimentoFornitore'
  },
  __Dati_Numero031: {
    type: Number,
    alias: 'QuantitaDefinitivoFornitura'
  },
  __Dati_Numero032: {
    type: Number,
    alias: 'VUnitarioFornitura'
  },
  __Dati_Numero033: {
    type: Number,
    alias: 'VImportoPreVariazioni'
  },
  __Dati_Numero034: {
    type: Number,
    alias: 'VVariazioniTotale'
  },
  __Dati_Numero035: {
    type: Number,
    alias: 'FlagTipoOrdineProduzione'
  },
  __Dati_Numero036: {
    type: Number,
    alias: 'FlagTipoDdt'
  },
  __Dati_Numero037: {
    type: Number,
    alias: 'FlagTipoGenericoAcquisto'
  },
  __Dati_Numero038: {
    type: Number,
    alias: 'FlagTipoGenericoVendita'
  },
  __Dati_Numero039: {
    type: Number,
    alias: 'FlagTipoRapportoLavoro'
  },
  __Dati_Numero040: {
    type: Number,
    alias: 'FlagCondizioni_InseribileDocContabili'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdIntervento'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtAccountOperatore'
  },
  __Dati_Numero041: {
    type: Number,
    alias: 'FlagItemEntrata'
  },
  __Dati_Numero042: {
    type: Number,
    alias: 'FlagItemUscita'
  },
  __Dati_Numero043: {
    type: Number,
    alias: 'FlagItemFabbisogno'
  },
  __Dati_Numero044: {
    type: Number,
    alias: 'FlagItemOrdinato'
  },
  __Dati_Numero045: {
    type: Number,
    alias: 'FlagItemPrenotato'
  },
  __Dati_Numero046: {
    type: Number,
    alias: 'FlagItemRichiestoOrdineApprovigionamento'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'CodiceSottoFamigliaItem'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'CodiceFamigliaItem'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdVoceDocOperativoOrigineDiretti'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdMagazzinoGestitoOrigine'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdDocOperativoOrigineDiretti'
  },
  __Dati_Numero047: {
    type: Number,
    alias: 'FlagTipoOrdineCliente'
  },
  __Dati_Numero048: {
    type: Number,
    alias: 'FlagTipoOrdineAcquisto'
  },
  __Dati_Numero049: {
    type: Number,
    alias: 'FlagTipoRichiestaApprovigionamento'
  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagTipoDocumentoMagazzino'
  },
  __Dati_Numero051: {
    type: Number,
    alias: 'FlagTipoRichiestaPreventivoApprovigionamento'
  },
  __Dati_Numero052: {
    type: Number,
    alias: 'FlagCondizioni_MovimentaMultiMagazzino'
  },
  __Dati_Numero053: {
    type: Number,
    alias: 'FlagStatoDocOperativo_Provvisorio'
  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdOfferta'
  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdVoceOfferta'
  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdTipoDocOperativo'
  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdTipoDocOperativoOrigine'
  },
  __Dati_Numero054: {
    type: Number,
    alias: 'FlagScaricaQtDocOrigine'
  },
  __Dati_Numero055: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_QuantitaItemScaricata'
  },
  __Dati_Numero056: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_QuantitaItemResidua'
  },
  __Dati_Numero057: {
    type: Number,
    alias: 'FlagVoceVisibile'
  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero058: {
    type: Number,
    alias: 'FlagVariazioneManuale'
  },
  __Dati_Testo038: {
    type: String,
    alias: 'TxtTipoListinoItem'
  },
  __Dati_Testo039: {
    type: String,
    alias: 'TxtFornituraItem'
  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdFaseProduzione'
  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdLottoProduzione'
  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdRigaOrdineProduzione'
  },
  __Dati_Testo043: {
    type: String,
    alias: 'IdDocContabile'
  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdVociDocContabili'
  },
  __Dati_Numero059: {
    type: Number,
    alias: 'InserimentoInDocContabili_QuantitaItemResidua'
  },
  __Dati_Numero060: {
    type: Number,
    alias: 'FlagMagazzino'
  },
  __Dati_Numero061: {
    type: Number,
    alias: 'MultiMagazzino_QuantitaItemResiduaPerMovimenti'
  },
  __Dati_Numero062: {
    type: Number,
    alias: 'FlagStatoDocOperativo_Chiuso'
  },
  __Dati_Numero063: {
    type: Number,
    alias: 'FlagDocumentoDiCorrezioneMagazzino'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_Numero064: {
    type: Number,
    alias: 'InserimentoInDocContabili_QuantitaItemScaricata'
  },
  __Dati_Numero065: {
    type: Number,
    alias: 'InserimentoInDocContabili_VImponibileValutaResiduo'
  },
  __Dati_Numero066: {
    type: Number,
    alias: 'InserimentoInDocContabili_VImponibileResiduo'
  },
  __Dati_Numero067: {
    type: Number,
    alias: 'InserimentoInDocContabili_QuantitaFornituraResidua'
  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdDocOperativoOrigineTutti'
  },
  __Dati_Testo046: {
    type: String,
    alias: 'FlagSelezionatoTxt'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Numero068: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero069: {
    type: Number,
    alias: 'FlagAggiornaValori01_ImpostazioneDaDocOperativo'
  },
  __Dati_Numero070: {
    type: Number,
    alias: 'FlagAggiornaValori07_Descrittivi'
  },
  __Dati_Numero071: {
    type: Number,
    alias: 'ConversioneValutaSuPrincipale'
  },
  __Dati_Numero072: {
    type: Number,
    alias: 'FlagAggiornaValori03_Quantita'
  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdAccountDestinatario'
  },
  __Dati_Testo048: {
    type: String,
    alias: 'TxtAccountDocOperativo'
  },
  __Dati_Testo049: {
    type: String,
    alias: 'TxtAccountDestinatario'
  },
  __Dati_Testo050: {
    type: String,
    alias: 'LinguaDocumento'
  },
  __Dati_Testo051: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneAliquota'
  },
  __Dati_Testo052: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneItem'
  },
  __Dati_Testo053: {
    type: String,
    alias: 'LinguaDocumento_NoteItem'
  },
  __Dati_Testo054: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneAliquota'
  },
  __Dati_Testo055: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneItem'
  },
  __Dati_Testo056: {
    type: String,
    alias: 'LinguaPrincipale_NoteItem'
  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdValuta'
  },
  __Dati_Testo058: {
    type: String,
    alias: 'SimboloValutaRidotto'
  },
  __Dati_Numero073: {
    type: Number,
    alias: 'VImportoPreVariazioniValuta'
  },
  __Dati_Testo059: {
    type: String,
    alias: 'CodiceTxtItemAutomatico'
  },
  __Dati_Testo060: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneFamiglia'
  },
  __Dati_Testo061: {
    type: String,
    alias: 'LinguaDocumento_DescrizioneSottoFamiglia'
  },
  __Dati_Testo062: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneFamiglia'
  },
  __Dati_Testo063: {
    type: String,
    alias: 'LinguaPrincipale_DescrizioneSottoFamiglia'
  },
  __Dati_Testo064: {
    type: String,
    alias: 'IdImpianto'
  },
  __Dati_Testo065: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataPrevista'
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataRichiesta'
  },
  __Dati_Numero074: {
    type: Number,
    alias: 'FlagScaricaImportoDocOrigine'
  },
  __Dati_Testo066: {
    type: String,
    alias: 'IdAccountDocOperativo'
  },
  __Dati_Testo067: {
    type: String,
    alias: 'IdAccountIntermediario'
  },
  __Dati_Numero075: {
    type: Number,
    alias: 'FlagMagaCespite'
  },
  __Dati_Numero076: {
    type: Number,
    alias: 'FlagMagaMateriaPrima'
  },
  __Dati_Numero077: {
    type: Number,
    alias: 'FlagMagaProdottoFinito'
  },
  __Dati_Numero078: {
    type: Number,
    alias: 'FlagMagaSemilavorato'
  },
  __Dati_Numero079: {
    type: Number,
    alias: 'FlagMagaValorizzaCosto'
  },
  __Dati_Numero080: {
    type: Number,
    alias: 'FlagMagaValorizzaPrezzo'
  },
  __Dati_Testo068: {
    type: String,
    alias: 'IdVoceIntervento'
  },
  __Dati_Testo069: {
    type: String,
    alias: 'IdVoceDocOperativoOrigineTutti'
  },
  __Dati_Testo070: {
    type: String,
    alias: 'TxtAccountIntermediario'
  },
  __Dati_Numero081: {
    type: Number,
    alias: 'FlagAggiornaValori02_RiferimentiAltreTabelle'
  },
  __Dati_Numero082: {
    type: Number,
    alias: 'FlagAggiornaValori04_ValoriEconomici'
  },
  __Dati_Numero083: {
    type: Number,
    alias: 'FlagAggiornaValori06_Totali'
  },
  __Dati_Numero084: {
    type: Number,
    alias: 'FlagAggiornaValori05_IdRiferimento'
  },
  __Dati_Testo071: {
    type: String,
    alias: 'TxtUtenteCreazione'
  },
  __Dati_Numero085: {
    type: Number,
    alias: 'AnnoSettimanaPrevista'
  },
  __Dati_Numero086: {
    type: Number,
    alias: 'AnnoSettimanaRichiesta'
  },
  __Dati_Numero087: {
    type: Number,
    alias: 'AnnoSettimanaEffettiva'
  },
  __Dati_Testo072: {
    type: String,
    alias: 'IdItemFaseProduzione'
  },
  __Dati_Numero088: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_VImponibileResiduo'
  },
  __Dati_Numero089: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_VImponibileScaricato'
  },
  __Dati_Numero090: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_FlagSaldoManuale'
  },
  __Dati_Numero091: {
    type: Number,
    alias: 'MultiMagazzino_FlagSaldoManuale'
  },
  __Dati_Numero092: {
    type: Number,
    alias: 'InserimentoInDocContabili_FlagSaldoManuale'
  },
  __Dati_Numero093: {
    type: Number,
    alias: 'MultiMagazzino_FlagSaldoAutomatico'
  },
  __Dati_Numero094: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_FlagSaldoAutomatico'
  },
  __Dati_Numero095: {
    type: Number,
    alias: 'InserimentoInDocContabili_FlagSaldoAutomatico'
  },
  __Dati_Testo073: {
    type: String,
    alias: 'GiorniApprovigionamento'
  },
  __Dati_Numero096: {
    type: Number,
    alias: 'FlagValorizzaPreventivo'
  },
  __Dati_Numero097: {
    type: Number,
    alias: 'FlagValorizzaConsuntivo'
  },
  __Dati_Numero098: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_PercAvanzamento'
  },
  __Dati_Testo074: {
    type: String,
    alias: 'TxtSettimanaAnnoRichiesta'
  },
  __Dati_Numero099: {
    type: Number,
    alias: 'ConversioneUmDaFornituraAItem'
  },
  __Dati_Testo075: {
    type: String,
    alias: 'Tracciabilita_Taglia'
  },
  __Dati_Testo076: {
    type: String,
    alias: 'Tracciabilita_Colore'
  },
  __Dati_Testo077: {
    type: String,
    alias: 'Tracciabilita_InfoExtra'
  },
  __Dati_Testo078: {
    type: String,
    alias: 'Tracciabilita_Quantita'
  },
  __Dati_Numero100: {
    type: Number,
    alias: 'AnnoMeseEffettiva'
  },
  __Dati_Numero101: {
    type: Number,
    alias: 'AnnoMesePrevista'
  },
  __Dati_Numero102: {
    type: Number,
    alias: 'AnnoMeseRichiesta'
  },
  __Dati_Numero103: {
    type: Number,
    alias: 'NumSettimanaEffettiva'
  },
  __Dati_Numero104: {
    type: Number,
    alias: 'NumSettimanaPrevista'
  },
  __Dati_Numero105: {
    type: Number,
    alias: 'NumSettimanaRichiesta'
  },
  __Dati_Testo079: {
    type: String,
    alias: 'IdTracciabilitaCollegato'
  },
  __Dati_Testo080: {
    type: String,
    alias: 'IdItemOpzioneProd'
  },
  __Dati_Numero106: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_LimiteQtResiduaPiu'
  },
  __Dati_Numero107: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_LimiteQtResiduaMeno'
  },
  __Dati_Numero108: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_LimiteVImponibileResiduaPiu'
  },
  __Dati_Numero109: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_LimiteVImponibileResiduaMeno'
  },
  __Dati_Numero110: {
    type: Number,
    alias: 'FlagUtilizzatoMateriale'
  },
  __Dati_Testo081: {
    type: String,
    alias: 'FlagTipoCassa'
  },
  __Dati_Testo082: {
    type: String,
    alias: 'NumeroRevisioneCodiceItemCliente'
  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataRevisioneCodiceItemCliente'
  },
  __Dati_Testo083: {
    type: String,
    alias: 'CodiceItemCliente'
  },
  __Dati_Testo084: {
    type: String,
    alias: 'DescrizioneItemCliente'
  },
  __Dati_Testo085: {
    type: String,
    alias: 'CodiceItemClienteRevisioneAutomatico'
  },
  __Dati_Numero111: {
    type: Number,
    alias: 'FlagListinoIvato'
  },
  __Dati_Numero112: {
    type: Number,
    alias: 'QuantitaSelezione'
  },
  __Dati_Testo086: {
    type: String,
    alias: 'IdDocOperativoTemporaneoPerSelezione'
  },
  __Dati_Testo087: {
    type: String,
    alias: 'Tracciabilita_CodiceLotto'
  },
  __Dati_Data005: {
    type: Date,
    alias: 'Tracciabilita_DataScadenza'
  },
  __Dati_Testo088: {
    type: String,
    alias: 'Tracciabilita_NumeroSerie'
  },
  __Dati_Numero113: {
    type: Number,
    alias: 'InserimentoInDocContabili_VIVaResiduo'
  },
  __Dati_Numero114: {
    type: Number,
    alias: 'InserimentoInDocContabili_VTotaleResiduo'
  },
  __Dati_Numero115: {
    type: Number,
    alias: 'NumeroDecimaliQuantita'
  },
  __Dati_Numero116: {
    type: Number,
    alias: 'NumeroDecimaliValori'
  },
  __Dati_Testo089: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione'
  },
  __Dati_Numero117: {
    type: Number,
    alias: 'FlagInvioGestionale'
  },
  __Dati_Testo090: {
    type: String,
    alias: 'StringaConfrontoInvioGestionale'
  },
  __Dati_Numero118: {
    type: Number,
    alias: 'VAppoggioValore1'
  },
  __Dati_Numero119: {
    type: Number,
    alias: 'VAppoggioValore2'
  },
  __Dati_Numero120: {
    type: Number,
    alias: 'VAppoggioValore3'
  },
  __Dati_Testo091: {
    type: String,
    alias: 'DescrizioneCommercialeFornitura'
  },
  __Dati_Numero121: {
    type: Number,
    alias: 'FlagConversioneUmNonStandard'
  },
  __Dati_Numero122: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_PercResiduaPiu'
  },
  __Dati_Numero123: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_PercResiduaMeno'
  },
  __Dati_Testo092: {
    type: String,
    alias: 'IdContenitore'
  },
  __Dati_Testo093: {
    type: String,
    alias: 'IdSelezioneItem'
  },
  __Dati_Numero124: {
    type: Number,
    alias: 'QuantitaItemSegno'
  },
  __Dati_Numero125: {
    type: Number,
    alias: 'ScaricoDaVociDestinazione_QuantitaItemResiduaSegno'
  },
  __Dati_Testo094: {
    type: String,
    alias: 'IdUtenteTemporaneoPerSelezione'
  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataConfermata'
  },
  __Dati_Testo095: {
    type: String,
    alias: 'IdTemporaneoFatturazioneAutomatica'
  },
  __Dati_Numero126: {
    type: Number,
    alias: 'QtPerUmOpzioneProd'
  },
  __Dati_Testo096: {
    type: String,
    alias: 'IdSchedaAttivitaControllo'
  },
  __Dati_Numero127: {
    type: Number,
    alias: 'AnnoMeseConfermata'
  },
  __Dati_Numero128: {
    type: Number,
    alias: 'AnnoSettimanaConfermata'
  },
  __Dati_Numero129: {
    type: Number,
    alias: 'FlagScaricoProduzione_DeduzioneAutomatica'
  },
  __Dati_Numero130: {
    type: Number,
    alias: 'FlagScaricoProduzione_QtProposta'
  },
  __Dati_Testo097: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo098: {
    type: String,
    alias: 'IdNumeroSerieLottoProduzione'
  },
  __Dati_Numero131: {
    type: Number,
    alias: 'FlagAggiornaDaAttivitaControllo'
  },
  __Dati_Numero132: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagCreazioneSchedeRichiesta'
  },
  __Dati_Numero133: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagSchedeDaCreare'
  },
  __Dati_Numero134: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagSchedeCreateAperte'
  },
  __Dati_Numero135: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagSchedeCreateChiuse'
  },
  __Dati_Numero136: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagMaxNumeroSchede'
  },
  __Dati_Testo099: {
    type: String,
    alias: 'SchedeAttivitaControllo_TxtStatoScheda'
  },
  __Dati_Numero137: {
    type: Number,
    alias: 'QuantitaMinimaOrdineUmItem'
  },
  __Dati_Numero138: {
    type: Number,
    alias: 'MultipliVincolantiQuantitaFornitura'
  },
  __Dati_Numero139: {
    type: Number,
    alias: 'MultipliVincolantiQuantitaItem'
  },
  __Dati_Numero140: {
    type: Number,
    alias: 'QuantitaMinimaOrdineUmFornitura'
  },
  __Dati_Testo100: {
    type: String,
    alias: 'IdVariazioneListinoApplicata'
  },
  __Dati_Testo101: {
    type: String,
    alias: 'IdListinoItem'
  },
  __Dati_Numero141: {
    type: Number,
    alias: 'Tracciabilita_TracciabilitaNecessaria'
  },
  __Dati_Numero142: {
    type: Number,
    alias: 'FlagAggiornaTracciabilita'
  },
  __Dati_Numero143: {
    type: Number,
    alias: 'FlagAggiornaMovimentazioneMagazzino'
  },
  __Dati_Numero144: {
    type: Number,
    alias: 'Tracciabilita_MovimentazioneCompletata'
  },
  __Dati_Numero145: {
    type: Number,
    alias: 'MultiMagazzino_FlagMovimentazioneNecessaria'
  },
  __Dati_Numero146: {
    type: Number,
    alias: 'FlagCondizioni_LancioProduzioneRichiesto'
  },
  __Dati_Numero147: {
    type: Number,
    alias: 'FlagCondizioni_ScaricatoDaDocOperativo'
  },
  __Dati_Numero148: {
    type: Number,
    alias: 'LancioProduzione_FlagLancioNecessario'
  },
  __Dati_Numero149: {
    type: Number,
    alias: 'LancioProduzione_FlagCreazioneLottoCompletata'
  },
  __Dati_Numero150: {
    type: Number,
    alias: 'FlagAggiornaLancioProduzione'
  },
  __Dati_Numero151: {
    type: Number,
    alias: 'LancioProduzione_FlagCreazioneRigaCompletata'
  },
  __Dati_Numero152: {
    type: Number,
    alias: 'Tracciabilita_SaldoManuale'
  },
  __Dati_Numero153: {
    type: Number,
    alias: 'FlagAggiornaValori08_StatiDocOperativo'
  },
  __Dati_Numero154: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagCreazioneSchedeCompletata'
  },
  __Dati_Numero155: {
    type: Number,
    alias: 'SchedeAttivitaControllo_FlagSaldoManuale'
  },
  __Dati_Numero156: {
    type: Number,
    alias: 'InserimentoInDocContabili_QuantitaFornituraScaricata'
  },
  __Dati_Numero157: {
    type: Number,
    alias: 'LancioProduzione_FlagSaldoManuale'
  },
  __Dati_Testo102: {
    type: String,
    alias: 'CodiceCommercialeItem'
  },
  __Dati_Testo103: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_CodiceItemCliente'
  },
  __Dati_Testo104: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_DescrizioneItemCliente'
  },
  __Dati_Testo105: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_NumeroRevisione'
  },
  __Dati_Testo106: {
    type: String,
    alias: 'CodificaClienteItemPrincipale_TxtAccountCliente'
  },
  __Dati_Testo107: {
    type: String,
    alias: 'CodiceAmministrativoItem'
  },
  __Dati_Testo108: {
    type: String,
    alias: 'CodiceRiferimentoEsternoVoce'
  },
  __Dati_Data007: {
    type: Date,
    alias: 'FE_DataInizioPeriodo'
  },
  __Dati_Data008: {
    type: Date,
    alias: 'FE_DataFinePeriodo'
  },
  __Dati_Testo109: {
    type: String,
    alias: 'FE_TipoDato'
  },
  __Dati_Testo110: {
    type: String,
    alias: 'FE_RiferimentoTesto'
  },
  __Dati_Testo111: {
    type: String,
    alias: 'FE_CodiceCIG'
  },
  __Dati_Testo112: {
    type: String,
    alias: 'FE_CodiceCUP'
  },
  __Dati_Testo113: {
    type: String,
    alias: 'FE_NumeroOrdine'
  },
  __Dati_Data009: {
    type: Date,
    alias: 'FE_DataOrdine'
  },
  __Dati_Testo114: {
    type: String,
    alias: 'FE_FatturaCollegataCodice'
  },
  __Dati_Data010: {
    type: Date,
    alias: 'FE_FatturaCollegataData'
  },
  __Dati_Testo115: {
    type: String,
    alias: 'FE_RiferimentoAmministrazione'
  },
  __Dati_Numero158: {
    type: Number,
    alias: 'VItemUnitario_Rolling'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociDocOperativiSchema;