import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDocOperativiExtraPrivate } from './DocOperativiExtra.Types.Private';


/* --------
* Schema Definition
* -------- */
const DocOperativiExtraSchema = new mongoose.Schema<IDocOperativiExtraPrivate>({

  _id                  : {
    type   : String,
    default: uuid.v4
  },
  __Dati_Testo001      : {
    type : String,
    alias: 'CodiceProgramma'

  },
  __Dati_Data001       : {
    type : Date,
    alias: 'DataFine',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002       : {
    type : Date,
    alias: 'DataInizio',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_DataOra001    : {
    type : Date,
    alias: 'DataOraFine',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002    : {
    type : Date,
    alias: 'DataOraInizio',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002      : {
    type : String,
    alias: 'MailA'

  },
  __Dati_Testo003      : {
    type : String,
    alias: 'MailCC'

  },
  __Dati_Ora001        : {
    type : String,
    alias: 'OraFine'

  },
  __Dati_Ora002        : {
    type : String,
    alias: 'OraInizio'

  },
  __Dati_Testo004      : {
    type : String,
    alias: 'TerminiPagamento'

  },
  __Dati_Data003       : {
    type : Date,
    alias: 'DataRestituzione',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004       : {
    type : Date,
    alias: 'DataRestituzioneRichiesta',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero001     : {
    type : Number,
    alias: 'FlagDaRendere'

  },
  __Dati_Testo005      : {
    type : String,
    alias: 'FlagDaRendereVedi'

  },
  __Dati_Numero002     : {
    type : Number,
    alias: 'FlagResa'

  },
  __Dati_Testo006      : {
    type : String,
    alias: 'FlagResaVedi'

  },
  __Dati_Numero003     : {
    type : Number,
    alias: 'NumColli'

  },
  __Dati_Numero004     : {
    type : Number,
    alias: 'Peso'

  },
  __Dati_Testo007      : {
    type : String,
    alias: 'Porto'

  },
  __Dati_Testo008      : {
    type : String,
    alias: 'TipoVettore'

  },
  __Dati_Testo009      : {
    type : String,
    alias: 'DestinazioneStampabilePagatore'

  },
  __Dati_Testo010      : {
    type : String,
    alias: 'IdDocOperativo'

  },
  __Dati_Testo011      : {
    type : String,
    alias: 'Note'

  },
  __Dati_Testo012      : {
    type : String,
    alias: 'NotePagamento'

  },
  __Dati_Data005       : {
    type : Date,
    alias: 'DataSpedizione',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data006       : {
    type : Date,
    alias: 'DataConsegnaRichiesta',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo013      : {
    type : String,
    alias: 'NoteCondizioni'

  },
  __Dati_Data007       : {
    type : Date,
    alias: 'DataConsegnaPrevista',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero005     : {
    type : Number,
    alias: 'SettimanaConsegnaRichiesta'

  },
  __Dati_Numero006     : {
    type : Number,
    alias: 'Uno'

  },
  __Dati_Testo014      : {
    type : String,
    alias: 'IdAccountCompagnia'

  },
  __Dati_Numero007     : {
    type : Number,
    alias: 'PesoLordo'

  },
  __Dati_Numero008     : {
    type : Number,
    alias: 'PesoNetto'

  },
  __Dati_Numero009     : {
    type : Number,
    alias: 'Volume'

  },
  __Dati_DataOra003    : {
    type : Date,
    alias: 'DataOraTrasporto',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004    : {
    type : Date,
    alias: 'DataOraRitiro',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo015      : {
    type : String,
    alias: 'AspettoEsteriore'

  },
  __Dati_Testo016      : {
    type : String,
    alias: 'IdCassaBancaAppoggio'

  },
  __Dati_Testo017      : {
    type : String,
    alias: 'TxtCassaBancaAppoggio'

  },
  __Dati_Testo018      : {
    type : String,
    alias: 'IdAccountEmittente'

  },
  __Dati_Numero010     : {
    type : Number,
    alias: 'FlagRipetizione01'

  },
  __Dati_Numero011     : {
    type : Number,
    alias: 'FlagRipetizione02'

  },
  __Dati_Numero012     : {
    type : Number,
    alias: 'FlagRipetizione03'

  },
  __Dati_Numero013     : {
    type : Number,
    alias: 'FlagRipetizione04'

  },
  __Dati_Numero014     : {
    type : Number,
    alias: 'FlagRipetizione05'

  },
  __Dati_Numero015     : {
    type : Number,
    alias: 'FlagRipetizione06'

  },
  __Dati_Numero016     : {
    type : Number,
    alias: 'FlagRipetizione07'

  },
  __Dati_Numero017     : {
    type : Number,
    alias: 'FlagRipetizione08'

  },
  __Dati_Numero018     : {
    type : Number,
    alias: 'FlagRipetizione09'

  },
  __Dati_Numero019     : {
    type : Number,
    alias: 'FlagRipetizione10'

  },
  __Dati_Numero020     : {
    type : Number,
    alias: 'FlagRipetizione11'

  },
  __Dati_Numero021     : {
    type : Number,
    alias: 'FlagRipetizione12'

  },
  __Dati_Testo019      : {
    type : String,
    alias: 'CausaleTrasporto'

  },
  __Dati_Numero022     : {
    type : Number,
    alias: 'Zero'

  },
  __Dati_Testo020      : {
    type : String,
    alias: 'IdTipoDocOperativo'

  },
  __Dati_Testo021      : {
    type : String,
    alias: 'IdAccountDocOperativo'

  },
  __Dati_Testo022      : {
    type : String,
    alias: 'FirmaTxt'

  },
  __Dati_Testo023      : {
    type : String,
    alias: 'GeolocalizzazioneFirma'

  },
  __Dati_Contenitore001: {
    type : String,
    alias: 'Firma'

  },
  __Dati_DataOra005    : {
    type : Date,
    alias: 'DataOraFirma',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero023     : {
    type : Number,
    alias: 'FlagProvvigione'

  },
  __Dati_Numero024     : {
    type : Number,
    alias: 'FlagProvvigioneValoreFisso'

  },
  __Dati_Numero025     : {
    type : Number,
    alias: 'FlagProvvigionePercentuale'

  },
  __Dati_Testo024      : {
    type : String,
    alias: 'TxtProvvigionePercentualeFissa'

  },
  __Dati_Numero026     : {
    type : Number,
    alias: 'ValoreProvvigione'

  },
  __Dati_Testo025      : {
    type : String,
    alias: 'IdCassaBancaRiferimento'

  },
  __Dati_Testo026      : {
    type : String,
    alias: 'TxtCassaBancaRiferimento'

  },
  __Dati_Testo027      : {
    type : String,
    alias: 'TargaVettore'

  },
  __Dati_Testo028      : {
    type : String,
    alias: 'TargaSecondoVettore'

  },
  __Dati_Testo029      : {
    type : String,
    alias: 'IdIncoterm'

  },
  __Dati_Testo030      : {
    type : String,
    alias: 'TxtIncoterm'

  },
  __Dati_Numero027     : {
    type : Number,
    alias: 'FlagConfermaDocOperativoConVariazioni'

  },
  __Dati_Data008       : {
    type : Date,
    alias: 'DataTrasporto',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo031      : {
    type : String,
    alias: 'TrackingNumber'

  },
  __Dati_Testo032      : {
    type : String,
    alias: 'LinkTracking'

  },
  __Dati_DataOra006    : {
    type : Date,
    alias: 'DataOraCreazione',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo033      : {
    type : String,
    alias: 'IdInstallazione'

  },
  __Dati_Testo034      : {
    type : String,
    alias: 'FE_CodiceCIG'

  },
  __Dati_Testo035      : {
    type : String,
    alias: 'FE_CodiceCUP'

  },
  __Dati_Testo036      : {
    type : String,
    alias: 'FE_CodiceCommessa'

  },
  __Dati_Testo037      : {
    type : String,
    alias: 'FE_Causale'

  },
  __Dati_Testo038      : {
    type : String,
    alias: 'FE_Contratto'

  },
  __Dati_Data009       : {
    type : Date,
    alias: 'FE_DataContratto',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo039      : {
    type : String,
    alias: 'FE_RiferimentoAmministrazione'

  },
  __Dati_Data010       : {
    type : Date,
    alias: 'FE_DataCompetenzaIva',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero028     : {
    type : Number,
    alias: 'Avanzamento'

  },
  __Dati_Testo040      : {
    type : String,
    alias: 'IdDocOperativiExtra'

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DocOperativiExtraSchema;
