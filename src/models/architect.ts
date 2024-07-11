import { Schema, model, models } from 'mongoose';


const ArchitectSchema = new Schema({
  images: {
    type: Object,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: String,
  },
});

const Architect = models.Architect || model('Architect', ArchitectSchema);

export default Architect;