import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Percent, Calendar, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';

interface MortgageCalculatorProps {
  propertyPrice: number; // in INR
  propertyTitle: string;
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({
  propertyPrice,
  propertyTitle,
}) => {
  // Initial states
  const [price, setPrice] = useState<number>(propertyPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20% default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% p.a. standard home loan
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years standard

  const whatsappNumber = '918975456378';

  // Derived Calculations
  const downPaymentAmount = useMemo(
    () => Math.round((price * downPaymentPercent) / 100),
    [price, downPaymentPercent]
  );

  const loanAmount = useMemo(
    () => Math.max(0, price - downPaymentAmount),
    [price, downPaymentAmount]
  );

  const { monthlyEmi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    if (loanAmount <= 0) {
      return {
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    if (monthlyRate === 0) {
      const emi = loanAmount / totalMonths;
      return {
        monthlyEmi: Math.round(emi),
        totalInterest: 0,
        totalPayment: loanAmount,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const roundedEmi = Math.round(emi);
    const calculatedTotalPayment = roundedEmi * totalMonths;
    const calculatedTotalInterest = Math.max(0, calculatedTotalPayment - loanAmount);

    const pPct = Math.round((loanAmount / calculatedTotalPayment) * 100);
    const iPct = Math.max(0, 100 - pPct);

    return {
      monthlyEmi: roundedEmi,
      totalInterest: calculatedTotalInterest,
      totalPayment: calculatedTotalPayment,
      principalPercent: pPct,
      interestPercent: iPct,
    };
  }, [loanAmount, interestRate, tenureYears]);

  // Format INR nicely
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const whatsappText = encodeURIComponent(
    `Hello Atlanta Estate Agency, I would like home loan assistance for "${propertyTitle}".\n` +
      `Property Price: ${formatINR(price)}\n` +
      `Estimated Loan: ${formatINR(loanAmount)}\n` +
      `Estimated Monthly EMI: ₹${monthlyEmi.toLocaleString('en-IN')}/mo @ ${interestRate}% for ${tenureYears} years.`
  );

  return (
    <div className="card-frame p-6 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xs space-y-6">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-4">
        <span className="text-[11px] font-bold text-[#A67C37] uppercase tracking-wider flex items-center gap-1">
          <Calculator className="w-3.5 h-3.5 text-[#A67C37]" />
          Home Loan Assistance
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172B28] mt-0.5">
          Home Loan EMI Calculator
        </h3>
        <p className="text-xs text-[#5A6570] mt-1">
          Estimate monthly installments based on current bank home loan interest rates in India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Property Price */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-[#172B28] mb-1.5">
              <span>Property Value</span>
              <span className="font-bold text-[#A67C37]">{formatINR(price)}</span>
            </div>
            <input
              type="range"
              min={2000000}
              max={250000000}
              step={500000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-[#172B28] cursor-pointer"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-[#172B28] mb-1.5">
              <span>Down Payment ({downPaymentPercent}%)</span>
              <span className="font-bold text-[#172B28]">{formatINR(downPaymentAmount)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-[#172B28] cursor-pointer"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-[#172B28] mb-1.5">
              <span>Interest Rate (% p.a.)</span>
              <span className="font-bold text-[#A67C37]">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={6.5}
              max={13.5}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#172B28] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
              <span>SBI / HDFC Base ~8.35%</span>
              <span>Commercial ~10.5%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <label className="block text-xs font-semibold text-[#172B28] mb-1.5">
              Loan Tenure ({tenureYears} Years)
            </label>
            <div className="flex gap-2">
              {[10, 15, 20, 25, 30].map((years) => (
                <button
                  key={years}
                  type="button"
                  onClick={() => setTenureYears(years)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-xs border transition-colors ${
                    tenureYears === years
                      ? 'bg-[#172B28] text-[#A67C37] border-[#172B28]'
                      : 'bg-[#F8F9FA] text-[#5A6570] border-[#E2E8F0] hover:text-[#172B28]'
                  }`}
                >
                  {years} Yrs
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-[#0F201D] text-[#FFFFFF] p-5 sm:p-6 rounded-xs space-y-5 border border-[#243B37] shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A67C37] block">
              Estimated Monthly Installment
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF] mt-1">
              ₹{monthlyEmi.toLocaleString('en-IN')}
              <span className="text-xs font-normal text-[#E2E8F0]"> / month</span>
            </div>
          </div>

          <div className="space-y-2 text-xs border-t border-[#243B37] pt-4">
            <div className="flex justify-between text-[#CBD5E1]">
              <span>Loan Amount:</span>
              <span className="font-bold text-[#FFFFFF]">{formatINR(loanAmount)}</span>
            </div>
            <div className="flex justify-between text-[#CBD5E1]">
              <span>Total Interest Payable:</span>
              <span className="font-bold text-[#A67C37]">{formatINR(totalInterest)}</span>
            </div>
            <div className="flex justify-between text-[#CBD5E1]">
              <span>Total Amount Payable:</span>
              <span className="font-bold text-[#FFFFFF]">{formatINR(totalPayment)}</span>
            </div>
          </div>

          {/* Principal vs Interest Ratio Bar */}
          <div>
            <div className="flex justify-between text-[10px] text-[#CBD5E1] font-semibold mb-1">
              <span>Principal ({principalPercent}%)</span>
              <span>Interest ({interestPercent}%)</span>
            </div>
            <div className="h-2 w-full bg-[#243B37] rounded-full overflow-hidden flex">
              <div
                className="bg-[#A67C37] h-full transition-all duration-300"
                style={{ width: `${principalPercent}%` }}
              />
              <div
                className="bg-[#DC2626]/80 h-full transition-all duration-300"
                style={{ width: `${interestPercent}%` }}
              />
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full py-2.5 text-xs font-bold shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Apply Home Loan Pre-Approval</span>
          </a>
        </div>
      </div>
    </div>
  );
};
