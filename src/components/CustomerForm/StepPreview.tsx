// src/components/CustomerForm/StepPreview.tsx
import { useFormContext } from "react-hook-form";
import type { FormData } from "./CustomerForm";

export default function StepPreview() {
  const { getValues } = useFormContext<FormData>();
  const data = getValues();

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-2 bg-gray-50 rounded-lg p-5 border border-gray-200">
        {children}
      </div>
    </div>
  );

  const Row = ({ label, value }: { label: string; value: any }) => {
    if (!value || value.length === 0) return null;

    return (
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-600">{label}</span>
        <span className="text-gray-900">{value}</span>
      </div>
    );
  };

  const RowList = ({ label, values }: { label: string; values: string[] }) => {
    if (!values || values.length === 0) return null;

    return (
      <div className="text-sm">
        <span className="font-medium text-gray-600">{label}</span>
        <ul className="list-disc pl-6 mt-1 text-gray-900">
          {values.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
        Review All Information
      </h2>

      {/* -------------------- Personal Information -------------------- */}
      <Section title="Personal Information">
        <Row label="Full Name" value={data.fullName} />
        <Row label="Nickname" value={data.nickname} />
        <Row label="Date of Birth" value={data.dateOfBirth} />
        <Row label="National ID / SSN" value={data.nationalId} />
        <Row label="Gender" value={data.gender} />
        <Row label="Marital Status" value={data.maritalStatus} />
        <Row label="Dependents" value={data.dependents} />
      </Section>

      {/* -------------------- Contact Information -------------------- */}
      <Section title="Contact Information">
        <Row label="Residential Address" value={data.residentialAddress} />
        <Row label="City" value={data.city} />
        <Row label="State" value={data.state} />
        <Row label="Zip Code" value={data.zip} />
        <Row label="Mailing Address" value={data.mailingAddress} />
        <Row label="Home Phone" value={data.homePhone} />
        <Row label="Mobile Phone" value={data.mobilePhone} />
        <Row label="Email" value={data.email} />
        <Row label="Preferred Contact" value={data.preferredContact} />
      </Section>

      {/* -------------------- Employment & Income -------------------- */}
      <Section title="Employment & Income">
        <Row label="Current Employer" value={data.currentEmployer} />
        <Row label="Job Title" value={data.jobTitle} />
        <Row label="Work Address" value={data.workAddress} />
        <Row label="Work Phone" value={data.workPhone} />
        <Row label="Employment Status" value={data.employmentStatus} />
        <Row label="Annual Income" value={data.annualIncome} />
        <Row label="Other Income" value={data.otherIncome} />
      </Section>

      {/* -------------------- Financial Information -------------------- */}
      <Section title="Financial Information">
        <RowList label="Bank Account Types" values={data.bankAccountTypes} />
        <Row label="Account Numbers" value={data.accountNumbers} />
        <RowList label="Current Loans" values={data.currentLoans} />
        <Row
          label="Credit Card Limits & Balances"
          value={data.creditCardLimitsBalances}
        />
        <Row label="Monthly Expenses" value={data.monthlyExpenses} />
        <Row label="Total Assets" value={data.totalAssets} />
        <Row label="Total Liabilities" value={data.totalLiabilities} />
      </Section>

      {/* -------------------- Emergency Contact -------------------- */}
      <Section title="Emergency Contact">
        <Row label="Contact Name" value={data.emergencyName} />
        <Row label="Relationship" value={data.emergencyRelationship} />
        <Row label="Emergency Phone" value={data.emergencyPhone} />
        <Row label="Emergency Email" value={data.emergencyEmail} />
      </Section>
    </div>
  );
}
