import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISessioneCorrentePrivate } from './SessioneCorrente.Types.Private';


/* --------
* Schema Definition
* -------- */
const SessioneCorrenteSchema = new mongoose.Schema<ISessioneCorrentePrivate>({

_id: {
type: String,
default: uuid.v4
},

}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SessioneCorrenteSchema;