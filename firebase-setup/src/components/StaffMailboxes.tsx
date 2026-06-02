import React, { useState } from 'react';
import { Mail, Lock, Copy, Check, ExternalLink } from 'lucide-react';
import { HospitalMailSystem } from '../types';

interface StaffMailboxesProps {
  mailSystem: HospitalMailSystem;
}

export default function StaffMailboxes({ mailSystem }: StaffMailboxesProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 flex items-center justify-center gap-2">
            <Mail className="size-8 text-[#00A64C]" />
            Staff Mailbox System
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Connect directly with our hospital departments via email. Click any mailbox to send a message.
          </p>
        </div>

        {/* Mailboxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {mailSystem.mailboxes.map((mailbox) => (
            <div
              key={mailbox.id}
              className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border border-[#00A64C]/20 rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="size-12 rounded-xl bg-[#00A64C]/10 text-[#00A64C] flex items-center justify-center group-hover:bg-[#00A64C] group-hover:text-white transition-colors">
                  <Mail className="size-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base md:text-lg line-clamp-2">
                    {mailbox.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Lock className="size-3" />
                    Password protected
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="bg-white rounded-lg p-3 mb-4 flex items-center justify-between gap-2">
                <p className="text-xs md:text-sm font-mono text-gray-700 break-all flex-1">
                  {mailbox.email}
                </p>
                <button
                  onClick={() => copyToClipboard(mailbox.email)}
                  className="shrink-0 size-8 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-[#00A64C] transition-colors flex items-center justify-center"
                  title="Copy email"
                >
                  {copiedEmail === mailbox.email ? (
                    <Check className="size-4 text-green-600" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${mailbox.email}`}
                  className="w-full bg-[#00A64C] hover:bg-[#008C3E] text-white font-bold py-2 px-3 rounded-lg text-xs md:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="size-4" />
                  Send Email
                </a>
                <a
                  href={`https://admin-login.dhadinghospital.com.np`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-3 rounded-lg text-xs md:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="size-4" />
                  Access Mailbox
                </a>
              </div>

              {/* Description */}
              {mailbox.description && (
                <p className="text-xs text-gray-600 mt-4 pt-4 border-t border-[#00A64C]/10">
                  {mailbox.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
            <Mail className="size-5 text-blue-600" />
            How to Access Staff Mailboxes
          </h3>
          <ol className="space-y-3 text-sm md:text-base text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 shrink-0">1.</span>
              <span>Click on any staff mailbox above to send an email directly</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 shrink-0">2.</span>
              <span>Or copy the email address and send from your own email client</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 shrink-0">3.</span>
              <span>Staff will respond to your message within 24 hours</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 shrink-0">4.</span>
              <span>For urgent matters, call our 24/7 hotline: <span className="font-mono font-bold">+977-9761299500</span></span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
