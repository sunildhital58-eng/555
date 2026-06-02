import React, { useState } from 'react';
import { Mail, Lock, Copy, Check, Tab, Users, ShieldCheck } from 'lucide-react';
import { HospitalMailSystem } from '../types';

interface StaffMailboxesProps {
  mailSystem: HospitalMailSystem;
}

export default function StaffMailboxes({ mailSystem }: StaffMailboxesProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'send' | 'access'>('send');
  const [selectedMailboxAccess, setSelectedMailboxAccess] = useState<any>(null);
  const [mailboxPassword, setMailboxPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [viewingMessages, setViewingMessages] = useState(false);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleAccessMailbox = (mailbox: any) => {
    setSelectedMailboxAccess(mailbox);
    setMailboxPassword('');
    setPasswordError('');
    setViewingMessages(false);
  };

  const verifyMailboxPassword = () => {
    if (mailboxPassword === selectedMailboxAccess.password) {
      setViewingMessages(true);
      setPasswordError('');
    } else {
      setPasswordError('Invalid password');
    }
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
            Connect directly with our hospital departments via email.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-3 mb-8 border-b border-gray-200">
          <button
            onClick={() => { setActiveTab('send'); setSelectedMailboxAccess(null); }}
            className={`pb-4 px-4 font-bold text-sm md:text-base transition-all flex items-center gap-2 ${
              activeTab === 'send'
                ? 'text-[#00A64C] border-b-2 border-[#00A64C]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Mail className="size-5" /> Send Email to Departments
          </button>
          <button
            onClick={() => { setActiveTab('access'); setSelectedMailboxAccess(null); }}
            className={`pb-4 px-4 font-bold text-sm md:text-base transition-all flex items-center gap-2 ${
              activeTab === 'access'
                ? 'text-[#00A64C] border-b-2 border-[#00A64C]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ShieldCheck className="size-5" /> Staff Mailbox Access
          </button>
        </div>

        {/* Tab 1: Send Email */}
        {activeTab === 'send' && (
          <div className="space-y-8">
            <p className="text-gray-600 text-center">Click "Send Email" to open your Gmail and send a message to any department.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {mailSystem.mailboxes.map((mailbox) => (
                <div
                  key={mailbox.id}
                  className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border border-[#00A64C]/20 rounded-2xl p-6 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="size-12 rounded-xl bg-[#00A64C]/10 text-[#00A64C] flex items-center justify-center group-hover:bg-[#00A64C] group-hover:text-white transition-colors">
                      <Mail className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                        {mailbox.name}
                      </h3>
                    </div>
                  </div>

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

                  <a
                    href={`mailto:${mailbox.email}?subject=Message%20from%20Dhading%20Hospital%20Website&body=Dear%20${mailbox.name},%0A%0A%0AThank%20you`}
                    className="w-full bg-[#00A64C] hover:bg-[#008C3E] text-white font-bold py-3 px-3 rounded-lg text-xs md:text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="size-4" />
                    Send Email
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Staff Mailbox Access */}
        {activeTab === 'access' && (
          <div className="space-y-6">
            {!selectedMailboxAccess ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {mailSystem.mailboxes.map((mailbox) => (
                  <button
                    key={mailbox.id}
                    onClick={() => handleAccessMailbox(mailbox)}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-2xl p-6 hover:shadow-lg transition-all text-left group"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="size-12 rounded-xl bg-blue-200 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Lock className="size-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg">
                          {mailbox.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">Password Protected</p>
                      </div>
                    </div>
                    <div className="text-sm text-blue-600 font-semibold">
                      Click to access mailbox →
                    </div>
                  </button>
                ))}
              </div>
            ) : !viewingMessages ? (
              <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedMailboxAccess.name}</h3>
                <p className="text-gray-600 mb-6">Enter password to access this mailbox</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={mailboxPassword}
                      onChange={(e) => setMailboxPassword(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && verifyMailboxPassword()}
                      placeholder="Enter password"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {passwordError && (
                      <p className="text-red-600 text-xs mt-2">{passwordError}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedMailboxAccess(null)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={verifyMailboxPassword}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                    >
                      Unlock
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{selectedMailboxAccess.name} - Mailbox</h3>
                
                <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                  {selectedMailboxAccess.messages && selectedMailboxAccess.messages.length > 0 ? (
                    selectedMailboxAccess.messages.map((msg, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">{msg.from}</p>
                        <p className="text-sm text-gray-600">{msg.subject}</p>
                        <p className="text-xs text-gray-500 mt-2">{msg.date}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No messages yet</p>
                  )}
                </div>
                
                <button
                  onClick={() => { setSelectedMailboxAccess(null); setViewingMessages(false); }}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Back to Mailboxes
                </button>
              </div>
            )}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
            <Mail className="size-5 text-blue-600" />
            How to Use
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Mail className="size-4 text-[#00A64C]" /> Send Email
              </h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Click "Send Email" tab</li>
                <li>2. Select a department</li>
                <li>3. Click "Send Email" button</li>
                <li>4. Gmail opens automatically</li>
                <li>5. Write and send your message</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="size-4 text-blue-600" /> Staff Access
              </h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Click "Staff Mailbox Access" tab</li>
                <li>2. Select a mailbox</li>
                <li>3. Enter password</li>
                <li>4. View all messages</li>
                <li>5. Staff responds within 24 hours</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
