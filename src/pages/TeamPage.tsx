import React from 'react';
import { MessageSquare, Phone, Mail, ShieldCheck } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      title: 'Founder & Managing Director',
      specialty: 'High-Value Residential & Land Advisory',
      areas: 'Worli, Bandra West, South Mumbai',
      description: 'Over 18 years of real estate consulting experience in Mumbai. Oversees high-value luxury transactions, developer negotiations, and client portfolio strategy.',
    },
    {
      name: 'Priya Kulkarni',
      title: 'Senior Luxury Consultant',
      specialty: 'Luxury Residential Sales & Leasing',
      areas: 'Powai, Juhu, Andheri West',
      description: 'Specialises in residential apartment acquisitions, expat relocations, and luxury rental agreements for families in Powai and Juhu.',
    },
    {
      name: 'Amitabh Varma',
      title: 'Commercial Real Estate Lead',
      specialty: 'Office Leasing & Bare Shell Units',
      areas: 'Lower Parel, BKC, Thane West',
      description: 'Advises corporate clients, tech firms, and professional practices on office space leasing, commercial buying, and lease renewal contracts.',
    },
    {
      name: 'Sunita Nair',
      title: 'Legal & MahaRERA Compliance Advisor',
      specialty: 'MahaRERA Scrutiny & Society NOCs',
      areas: 'All Mumbai Metropolitan Suburbs',
      description: 'Coordinates document scrutiny, sub-registrar appointments, cooperative society share transfers, and leave and licence stamp duty registration.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-bold text-[#A67C37] uppercase tracking-wider">
          Professional Leadership
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
          Our Team in Mumbai
        </h1>
        <p className="text-sm text-[#5A6570] mt-2 max-w-2xl">
          Experienced consultants dedicated to transparent, professional real estate transactions across residential and commercial sectors in Mumbai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="card-frame p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-center">
              <div className="w-20 h-20 bg-[#172B28] text-[#A67C37] rounded-full mx-auto flex items-center justify-center font-serif text-2xl font-bold border-2 border-[#A67C37] shadow-sm">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-[#172B28]">{member.name}</h2>
                <span className="text-xs font-bold text-[#A67C37] block mt-0.5">
                  {member.title}
                </span>
              </div>

              <div className="text-[11px] bg-[#F8F9FA] p-2.5 border border-[#E2E8F0] rounded-xs text-[#5A6570] space-y-1 text-left">
                <p><strong>Specialty:</strong> {member.specialty}</p>
                <p><strong>Focus Sectors:</strong> {member.areas}</p>
              </div>

              <p className="text-xs text-[#5A6570] leading-relaxed text-left">
                {member.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] space-y-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello ${member.name}, I would like to consult regarding property in ${member.areas}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full py-2 text-xs font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
