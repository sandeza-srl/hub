import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IListinoItemPrivate } from './ListinoItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const ListinoItemSchema = new mongoose.Schema<IListinoItemPrivate>({

  _id              : {
    type   : String,
    default: uuid.v4
  },
  __Dati_Numero001 : {
    type : Number,
    alias: 'Uno'

  },
  __Dati_Testo001  : {
    type : String,
    alias: 'IdItem'

  },
  __Dati_Numero002 : {
    type : Number,
    alias: 'FlagVendita'

  },
  __Dati_Testo002  : {
    type : String,
    alias: 'FlagVenditaVedi'

  },
  __Dati_Numero003 : {
    type : Number,
    alias: 'VVenditaUnitario'

  },
  __Dati_Numero004 : {
    type : Number,
    alias: 'QtMinima'

  },
  __Dati_Testo003  : {
    type : String,
    alias: 'IdListinoItem'

  },
  __Dati_Numero005 : {
    type : Number,
    alias: 'QtImpostata'

  },
  __Dati_Testo004  : {
    type : String,
    alias: 'TxtItem'

  },
  __Dati_Numero006 : {
    type : Number,
    alias: 'Priorita'

  },
  __Dati_Testo005  : {
    type : String,
    alias: 'IdTipoListino'

  },
  __Dati_Testo006  : {
    type : String,
    alias: 'TxtTipoListino'

  },
  __Dati_Testo007  : {
    type : String,
    alias: 'TxtListinoItem'

  },
  __Dati_Numero007 : {
    type : Number,
    alias: 'VVenditaUnitarioPrecedente'

  },
  __Dati_Data001   : {
    type : Date,
    alias: 'DataPrezzoUnitario',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002   : {
    type : Date,
    alias: 'DataPrezzoUnitarioPrecedente',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008 : {
    type : Number,
    alias: 'DifferenzaPrezzoPercentuale'

  },
  __Dati_Numero009 : {
    type : Number,
    alias: 'FlagListinoPrincipale'

  },
  __Dati_Testo008  : {
    type : String,
    alias: 'IdTipoListinoRiferimento'

  },
  __Dati_Numero010 : {
    type : Number,
    alias: 'VVenditaUnitarioCalcolato'

  },
  __Dati_Testo009  : {
    type : String,
    alias: 'IdAliquota'

  },
  __Dati_Data003   : {
    type : Date,
    alias: 'DataFineValidita',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data004   : {
    type : Date,
    alias: 'DataInizioValidita',
    set  : (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero011 : {
    type : Number,
    alias: 'FlagValiditaData'

  },
  __Dati_Numero012 : {
    type : Number,
    alias: 'FlagValiditaFamiglia'

  },
  __Dati_Numero013 : {
    type : Number,
    alias: 'FlagValiditaSottoFamiglia'

  },
  __Dati_Numero014 : {
    type : Number,
    alias: 'FlagValidoSempre'

  },
  __Dati_Numero015 : {
    type : Number,
    alias: 'FlagValoreFisso'

  },
  __Dati_Numero016 : {
    type : Number,
    alias: 'FlagValoreRicarico'

  },
  __Dati_Testo010  : {
    type : String,
    alias: 'CodiceItem'

  },
  __Dati_Testo011  : {
    type : String,
    alias: 'IdAccountCompagnia'

  },
  __Dati_Testo012  : {
    type : String,
    alias: 'IdFamigliaItem'

  },
  __Dati_Testo013  : {
    type : String,
    alias: 'IdSottoFamigliaItem'

  },
  __Dati_Testo014  : {
    type : String,
    alias: 'TxtSottoFamigliaItem'

  },
  __Dati_Testo015  : {
    type : String,
    alias: 'TxtFamigliaItem'

  },
  __Dati_DataOra001: {
    type : Date,
    alias: 'DataOraUltimaModifica',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero017 : {
    type : Number,
    alias: 'FlagManuale'

  },
  __Dati_Testo016  : {
    type : String,
    alias: 'IdTipoListinoOrigine'

  },
  __Dati_Testo017  : {
    type : String,
    alias: 'IdItemOrigine'

  },
  __Dati_Numero018 : {
    type : Number,
    alias: 'FlagListinoIvato'

  },
  __Dati_Numero019 : {
    type : Number,
    alias: 'PercentualeAliquota'

  },
  __Dati_Numero020 : {
    type : Number,
    alias: 'VVenditaUnitarioIvato'

  },
  __Dati_Numero021 : {
    type : Number,
    alias: 'VVenditaUnitarioPrecedenteIvato'

  },
  __Dati_Numero022 : {
    type : Number,
    alias: 'Zero'

  },
  __Dati_DataOra002: {
    type : Date,
    alias: 'DataOraCreazione',
    set  : (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo018  : {
    type : String,
    alias: 'IdInstallazione'

  },
  __Dati_Numero023 : {
    type : Number,
    alias: 'FlagAggiornaContenutiDaItems'

  },
  __Dati_Testo019  : {
    type : String,
    alias: 'CodiceTxtItemAutomatico'

  },
  __Dati_Testo020  : {
    type : String,
    alias: 'TxtListinoItemPrioritaAutomatico'

  },
  __Dati_Numero024 : {
    type : Number,
    alias: 'VariazionePercentuale_Sconto1'

  },
  __Dati_Numero025 : {
    type : Number,
    alias: 'VariazionePercentuale_Sconto2'

  },
  __Dati_Numero026 : {
    type : Number,
    alias: 'VariazionePercentuale_Sconto3'

  },
  __Dati_Numero027 : {
    type : Number,
    alias: 'FlagAttivo'

  },
  __Dati_Numero028 : {
    type : Number,
    alias: 'FlagMobile'

  },
  __Dati_Numero029 : {
    type : Number,
    alias: 'FlagWeb'

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ListinoItemSchema;
