'use client';

import { Diagnosis } from '@/types/Diagnosis';
import { Button } from '../../Button';
const diagnosisOptions = [
  'Cardiovascular',
  'Dermatology',
  'Ear Nose Throat',
  'Endocrine',
  'Eye',
  'Gastrointestinal',
  'Haematology',
  'Infectious Diseases',
  'Renal & Genitourinary',
  'Respiratory',
  'Musculoskeletal',
  'Neurology',
  'Obstetrics & Gynaecology',
  'Oral Health',
  'Others',
];
export function DiagnosisField({
  diagnosis,
  setDiagnosis,
}: {
  diagnosis: Diagnosis[];
  setDiagnosis: (diagnoses: Diagnosis[]) => void;
}) {
  const EMPTY_DIAGNOSIS = { details: '', category: '' };
  return (
    <div className="flex flex-col gap-1">
      <p>Diagnosis</p>
      {diagnosis.map((val, index) => (
        <DiagnosisInputRow
          key={index}
          diagnosisNumber={index + 1}
          diagnosis={val}
          onDiagnosisDelete={() => {
            setDiagnosis(diagnosis.filter((_, i) => i !== index));
          }}
          onDiagnosisEdit={curDiagnosis => {
            const newDiagnosis = [...diagnosis];
            newDiagnosis[index] = curDiagnosis;
            setDiagnosis(newDiagnosis);
          }}
        />
      ))}
      <Button
        colour="green"
        text="Add Diagnosis"
        onClick={() => setDiagnosis([...diagnosis, EMPTY_DIAGNOSIS])}
      />
    </div>
  );
}

function DiagnosisInputRow({
  diagnosisNumber,
  diagnosis,
  onDiagnosisDelete,
  onDiagnosisEdit,
}: {
  diagnosisNumber: number;
  diagnosis: Diagnosis;
  onDiagnosisDelete: () => void;
  onDiagnosisEdit: (curDiagnosis: Diagnosis) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label>Diagnosis {diagnosisNumber}</label>
      <textarea
        placeholder="Type your diagnosis here..."
        rows={3}
        value={diagnosis.details}
        onChange={e => {
          onDiagnosisEdit({ ...diagnosis, details: e.target.value });
        }}
      />
      <select
        className="rounded-lg p-2"
        value={diagnosis.category}
        onChange={e =>
          onDiagnosisEdit({ ...diagnosis, category: e.target.value })
        }
      >
        <option disabled hidden value="">
          Please select category...
        </option>
        {diagnosisOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <Button
        colour="red"
        text={`Delete Diagnosis ${diagnosisNumber}`}
        onClick={onDiagnosisDelete}
      />
    </div>
  );
}
