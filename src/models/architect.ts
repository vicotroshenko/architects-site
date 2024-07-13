import { Schema, Types, model, models } from 'mongoose';

const ArchitectSchema = new Schema({
  _id: {
    type: Types.ObjectId,
  },
  images: {
    type: Object,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Architect = models.Architect || model('Architect', ArchitectSchema);

export default Architect;
