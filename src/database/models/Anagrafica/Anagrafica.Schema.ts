import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAnagraficaPrivate } from './Anagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const AnagraficaSchema = new mongoose.Schema<IAnagraficaPrivate>({

  _id                  : {
    type   : String,
    default: uuid.v4
  },
  __Dati_Numero001     : {
    type : Number,
    alias: 'Uno'
  },
  __Dati_Testo001      : {
    type : String,
    alias: 'IdAccount'
  },
  __Dati_Testo002      : {
    type : String,
    alias: 'TxtAccount'
  },
  __Dati_Testo003      : {
    type : String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo004      : {
    type : String,
    alias: 'UtenteModifica'
  },
  __Dati_Data001       : {
    type : Date,
    alias: 'DataCreazione',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002       : {
    type : Date,
    alias: 'DataModifica',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo005      : {
    type : String,
    alias: 'RagioneSociale'
  },
  __Dati_Contenitore001: {
    type : String,
    alias: 'LogoSocieta'
  },
  __Dati_Testo006      : {
    type : String,
    alias: 'Web'
  },
  __Dati_Testo007      : {
    type : String,
    alias: 'DescrizioneGenerica'
  },
  __Dati_Numero002     : {
    type : Number,
    alias: 'FlagCompagnia'
  },
  __Dati_Testo008      : {
    type : String,
    alias: 'MailAziendale'
  },
  __Dati_Testo009      : {
    type : String,
    alias: 'IdTipologiaAccount'
  },
  __Dati_Testo010      : {
    type : String,
    alias: 'TxtTipologiaAccount'
  },
  __Dati_Numero003     : {
    type : Number,
    alias: 'FlagClientePrimario'
  },
  __Dati_Numero004     : {
    type : Number,
    alias: 'FlagFornitore'
  },
  __Dati_Numero005     : {
    type : Number,
    alias: 'FlagDistributore'
  },
  __Dati_Numero006     : {
    type : Number,
    alias: 'FlagClienteFinale'
  },
  __Dati_Testo011      : {
    type : String,
    alias: 'IdAccountDistributoriAbilitati'
  },
  __Dati_Numero007     : {
    type : Number,
    alias: 'FlagVediDistributori'
  },
  __Dati_Numero008     : {
    type : Number,
    alias: 'FlagOperatore'
  },
  __Dati_Testo012      : {
    type : String,
    alias: 'IdAccountAbilitatiTutti'
  },
  __Dati_Testo013      : {
    type : String,
    alias: 'Note'
  },
  __Dati_Testo014      : {
    type : String,
    alias: 'TxtAccountCompagnieAbilitati'
  },
  __Dati_Testo015      : {
    type : String,
    alias: 'TxtAccountDistributoriAbilitati'
  },
  __Dati_Testo016      : {
    type : String,
    alias: 'TxtAccountClientiPrimariAbilitati'
  },
  __Dati_Testo017      : {
    type : String,
    alias: 'PartitaIva'
  },
  __Dati_Testo018      : {
    type : String,
    alias: 'DescrizioneSpedizione'
  },
  __Dati_Numero009     : {
    type : Number,
    alias: 'NumeroItems'
  },
  __Dati_Numero010     : {
    type : Number,
    alias: 'NumeroProgettiAperti'
  },
  __Dati_Numero011     : {
    type : Number,
    alias: 'NumeroOfferteAccettate'
  },
  __Dati_Numero012     : {
    type : Number,
    alias: 'ProgAccount'
  },
  __Dati_Testo019      : {
    type : String,
    alias: 'IdDocumentoLogo'
  },
  __Dati_Data003       : {
    type : Date,
    alias: 'DataCorrente',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo020      : {
    type : String,
    alias: 'LettereTxtAccount'
  },
  __Dati_Testo021      : {
    type : String,
    alias: 'MessaggioCallCenter'
  },
  __Dati_Numero013     : {
    type : Number,
    alias: 'FlagAccountInteresse'
  },
  __Dati_Testo022      : {
    type : String,
    alias: 'IdAccountApparenza'
  },
  __Dati_Numero014     : {
    type : Number,
    alias: 'IdListaDiffusionePropria'
  },
  __Dati_Numero015     : {
    type : Number,
    alias: 'IdListaDiffusioneAltri'
  },
  __Dati_Numero016     : {
    type : Number,
    alias: 'VScadenzeAperte'
  },
  __Dati_Numero017     : {
    type : Number,
    alias: 'VOfferteRifiutate'
  },
  __Dati_Numero018     : {
    type : Number,
    alias: 'VOfferteAccettate'
  },
  __Dati_Numero019     : {
    type : Number,
    alias: 'VOfferteAttive'
  },
  __Dati_Testo023      : {
    type : String,
    alias: 'TxtClasseMerceologica'
  },
  __Dati_Numero020     : {
    type : Number,
    alias: 'FlagPersonaFisica'
  },
  __Dati_Numero021     : {
    type : Number,
    alias: 'FlagPersonaGiuridica'
  },
  __Dati_Numero022     : {
    type : Number,
    alias: 'VMovimentiBanca'
  },
  __Dati_Numero023     : {
    type : Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo024      : {
    type : String,
    alias: 'CodiceFiscale'
  },
  __Dati_Testo025      : {
    type : String,
    alias: 'CodiceRiferimento'
  },
  __Dati_Numero024     : {
    type : Number,
    alias: 'IdListeDiffusione'
  },
  __Dati_Testo026      : {
    type : String,
    alias: 'DescrizioneLegale'
  },
  __Dati_Numero025     : {
    type : Number,
    alias: 'VEntrate'
  },
  __Dati_Numero026     : {
    type : Number,
    alias: 'VUscite'
  },
  __Dati_Numero027     : {
    type : Number,
    alias: 'NumeroProgettiChiusi'
  },
  __Dati_Numero028     : {
    type : Number,
    alias: 'NumeroOfferteAperte'
  },
  __Dati_Numero029     : {
    type : Number,
    alias: 'NumeroOfferteRifiutate'
  },
  __Dati_Numero030     : {
    type : Number,
    alias: 'NumeroOre'
  },
  __Dati_Numero031     : {
    type : Number,
    alias: 'NumeroInterventi'
  },
  __Dati_Testo027      : {
    type : String,
    alias: 'IdLinguaComunicazioni'
  },
  __Dati_Testo028      : {
    type : String,
    alias: 'IdCassaBancaAppoggio'
  },
  __Dati_Testo029      : {
    type : String,
    alias: 'IdClasseMerceologica'
  },
  __Dati_Testo030      : {
    type : String,
    alias: 'IdTipoPrimoContatto'
  },
  __Dati_Testo031      : {
    type : String,
    alias: 'TxtTipoPrimoContatto'
  },
  __Dati_Numero032     : {
    type : Number,
    alias: 'NumRitardoPagamenti'
  },
  __Dati_Testo032      : {
    type : String,
    alias: 'TxtCassaBancaAppoggio'
  },
  __Dati_Data004       : {
    type : Date,
    alias: 'DataPrimoContatto',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo033      : {
    type : String,
    alias: 'IdCassaBancaPrincipale'
  },
  __Dati_Testo034      : {
    type : String,
    alias: 'CodiceAccount'
  },
  __Dati_Testo035      : {
    type : String,
    alias: 'LinguaComunicazione'
  },
  __Dati_Testo036      : {
    type : String,
    alias: 'CodiceTipologiaAccount'
  },
  __Dati_Testo037      : {
    type : String,
    alias: 'IdAccountCapoGruppo'
  },
  __Dati_Testo038      : {
    type : String,
    alias: 'IdValuta'
  },
  __Dati_Testo039      : {
    type : String,
    alias: 'zT2'
  },
  __Dati_DataOra001    : {
    type : Date,
    alias: 'DataOraUltimaModifica',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero033     : {
    type : Number,
    alias: 'FlagPagamentiScaduti'
  },
  __Dati_Testo040      : {
    type : String,
    alias: 'IdAliquotaIN'
  },
  __Dati_Testo041      : {
    type : String,
    alias: 'IdAliquotaOUT'
  },
  __Dati_Testo042      : {
    type : String,
    alias: 'CodiceClienteContabile'
  },
  __Dati_Testo043      : {
    type : String,
    alias: 'CodiceFornitoreContabile'
  },
  __Dati_Testo044      : {
    type : String,
    alias: 'IdAccountCompagnieAbilitate'
  },
  __Dati_Testo045      : {
    type : String,
    alias: 'NoteFatturazione'
  },
  __Dati_Testo046      : {
    type : String,
    alias: 'IdContoContabileCliente'
  },
  __Dati_Testo047      : {
    type : String,
    alias: 'IdContoContabileFornitore'
  },
  __Dati_Data005       : {
    type : Date,
    alias: 'DataNascita',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo048      : {
    type : String,
    alias: 'CittaNascita'
  },
  __Dati_Testo049      : {
    type : String,
    alias: 'TxtCognome'
  },
  __Dati_Testo050      : {
    type : String,
    alias: 'TxtNome'
  },
  __Dati_Numero034     : {
    type : Number,
    alias: 'FlagFemmina'
  },
  __Dati_Numero035     : {
    type : Number,
    alias: 'FlagMaschio'
  },
  __Dati_Numero036     : {
    type : Number,
    alias: 'VScadenzeScadute'
  },
  __Dati_Numero037     : {
    type : Number,
    alias: 'FlagEsportabileWeb'
  },
  __Dati_Numero038     : {
    type : Number,
    alias: 'FlagDaEsportareWeb'
  },
  __Dati_Numero039     : {
    type : Number,
    alias: 'FlagOperatoreInterventi'
  },
  __Dati_Testo051      : {
    type : String,
    alias: 'IdRegimeFiscale'
  },
  __Dati_Testo052      : {
    type : String,
    alias: 'CodiceRegimeFiscale'
  },
  __Dati_Testo053      : {
    type : String,
    alias: 'TxtRegimeFiscale'
  },
  __Dati_Testo054      : {
    type : String,
    alias: 'CodiceUnivocoSDI'
  },
  __Dati_Testo055      : {
    type : String,
    alias: 'MailPEC'
  },
  __Dati_Numero040     : {
    type : Number,
    alias: 'FlagPubblicaAmministrazione'
  },
  __Dati_Testo056      : {
    type : String,
    alias: 'TipoTrasmissioneFattura'
  },
  __Dati_Numero041     : {
    type : Number,
    alias: 'FlagDescrizioniLibere'
  },
  __Dati_Testo057      : {
    type : String,
    alias: 'IdTipiRuoliNoVisualizzazione'
  },
  __Dati_Numero042     : {
    type : Number,
    alias: 'FlagAggiornaTotali'
  },
  __Dati_Testo058      : {
    type : String,
    alias: 'IdTipoDocContabileIN'
  },
  __Dati_Numero043     : {
    type : Number,
    alias: 'FlagSeparaDocumenti'
  },
  __Dati_Testo059      : {
    type : String,
    alias: 'IdTipoDocContabileOUT'
  },
  __Dati_Numero044     : {
    type : Number,
    alias: 'FlagPIVAVerificata'
  },
  __Dati_Numero045     : {
    type : Number,
    alias: 'FlagAccorpaTrasporto'
  },
  __Dati_Numero046     : {
    type : Number,
    alias: 'Zero'
  },
  __Dati_Testo060      : {
    type : String,
    alias: 'IdUtentiNoVisualizzazione'
  },
  __Dati_Numero047     : {
    type : Number,
    alias: 'VFido'
  },
  __Dati_Numero048     : {
    type : Number,
    alias: 'VFidoResiduo'
  },
  __Dati_Numero049     : {
    type : Number,
    alias: 'FlagFidoAttivo'
  },
  __Dati_Numero050     : {
    type : Number,
    alias: 'FlagFidoBloccato'
  },
  __Dati_Testo061      : {
    type : String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero051     : {
    type : Number,
    alias: 'FlagCFVerificato'
  },
  __Dati_Numero052     : {
    type : Number,
    alias: 'FlagNonSollecitareDocContabile'
  },
  __Dati_Data006       : {
    type : Date,
    alias: 'DataUltimoContatto',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero054     : {
    type : Number,
    alias: 'FlagAggiornaDaSedi'
  },
  __Dati_Testo062      : {
    type : String,
    alias: 'IdDocumentoPrincipaleAnagrafica'
  },
  __Dati_Testo063      : {
    type : String,
    alias: 'CodiceEsterno'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AnagraficaSchema;
