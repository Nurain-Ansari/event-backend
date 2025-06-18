import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedInUrl: String,
    language: String,
    role: String,
    company: String,
    country: String,
    website: String,
    companySize: String,
    industry: [String],
    focus: [String],
    regions: [String],
    attendingInPerson: String,
    visaLetter: String,
    willExhibit: String,
    diet: String,
    connectWith: String,
    allowMeetings: String,
    regionalInterest: String,
    allowContact: Boolean,
    showInDirectory: Boolean,
    barcodeId: String,
    checkedIn: Boolean,
  },
  { timestamps: true },
);

export type RegisterType = mongoose.InferSchemaType<typeof registerSchema>;

export default mongoose.model('Register', registerSchema);
