import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Reply, ArrowLeft, X } from 'lucide-react';

interface MailBox {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface EmailMessage {
  id: string;
  from: string;
  to: string;
  subject: string;
  message: string;
  timestamp: string;
}

interface WebMailboxAccessProps {
  mailSystem?: { mailboxes: MailBox[] };
  onClose: () => void;
}

export default function WebMailboxAccess({ mailSystem, onClose }: WebMailboxAccessProps) {
  const [step, setStep] = useState<'list' | 'password' | 'inbox'>('list');
  const [selectedMailbox, setSelectedMailbox] = useState<MailBox | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<EmailMessage | null>(null);
  const [passwordError, setPasswordError] = useState('');

  const mailboxes = mailSystem?.mailboxes || [];

  const handleSelectMailbox = (mailbox: MailBox) => {
    setSelectedMailbox(mailbox);
    setPasswordInput('');
    setPasswordError('');
    setStep('password');
  };

  const handleVerifyPassword = () => {
    if (!selectedMailbox) return;
    
    if (passwordInput === selectedMailbox.password) {
      setStep('inbox');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  const mockMessages: EmailMessage[] = [
    {
      id: '1',
      from: 'admin@hospital.com',
      to: selectedMailbox?.email || '',
      subject: 'Welcome to Staff Mailbox',
      message: 'Welcome to your hospital staff mailbox system. You can now send and receive emails directly from this secure interface.',
      timestamp: '2026-06-02 10:30 AM'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#006830] to-[#00A64C] px-6 py-4 flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-2">
            <Mail className="size-5 text-white" />
            <h2 className="text-lg font-bold text-white">Staff Mailbox Access</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="size-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* Step 1: Select Mailbox */}
          {step === 'list' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Select a staff mailbox to access:</p>
              <div className="grid gap-2">
                {mailboxes.length > 0 ? (
                  mailboxes.map((box) => (
                    <button
                      key={box.id}
                      onClick={() => handleSelectMailbox(box)}
                      className="p-4 border border-gray-200 rounded-lg hover:border-[#00A64C] hover:bg-green-50 transition-all text-left group"
                    >
                      <p className="font-bold text-gray-900 group-hover:text-[#006830]">{box.name}</p>
                      <p className="text-sm text-gray-500">{box.email}</p>
                    </button>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-8">No mailboxes available</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Enter Password */}
          {step === 'password' && selectedMailbox && (
            <div className="space-y-4 max-w-md">
              <div>
                <p className="text-sm font-bold text-gray-900 mb-2">Access Mailbox: {selectedMailbox.name}</p>
                <p className="text-xs text-gray-600">{selectedMailbox.email}</p>
              </div>

              {passwordError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg">
                  {passwordError}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleVerifyPassword()}
                    placeholder="Enter mailbox password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A64C]"
                    autoFocus
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    setStep('list');
                    setSelectedMailbox(null);
                    setPasswordError('');
                  }}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-bold text-sm transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleVerifyPassword}
                  className="flex-1 px-4 py-2.5 bg-[#00A64C] text-white rounded-lg hover:bg-[#006830] font-bold text-sm transition-colors"
                >
                  Unlock
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Inbox */}
          {step === 'inbox' && selectedMailbox && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-gray-900">{selectedMailbox.name}</p>
                  <p className="text-sm text-gray-500">{selectedMailbox.email}</p>
                </div>
                <button
                  onClick={() => {
                    setStep('list');
                    setSelectedMessage(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1 text-sm text-gray-600"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
              </div>

              {selectedMessage ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="text-xs text-gray-600">From: <span className="font-semibold">{selectedMessage.from}</span></p>
                    <p className="text-xs text-gray-600">To: <span className="font-semibold">{selectedMessage.to}</span></p>
                    <p className="text-xs text-gray-600">Time: <span className="font-semibold">{selectedMessage.timestamp}</span></p>
                    <p className="text-sm font-bold text-gray-900 pt-2">{selectedMessage.subject}</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-4 rounded-lg min-h-32">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-bold text-sm transition-colors"
                    >
                      Back to Inbox
                    </button>
                    <button
                      onClick={() => {
                        const gmailLink = `https://mail.google.com/mail/?view=cm&to=${selectedMessage.to}&subject=Re: ${selectedMessage.subject}`;
                        window.open(gmailLink, '_blank');
                      }}
                      className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Reply className="size-4" /> Reply in Gmail
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-900">Inbox ({mockMessages.length})</p>
                  <div className="space-y-1">
                    {mockMessages.map((msg) => (
                      <button
                        key={msg.id}
                        onClick={() => setSelectedMessage(msg)}
                        className="w-full p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-left"
                      >
                        <p className="text-xs font-bold text-gray-600">{msg.from}</p>
                        <p className="text-sm font-semibold text-gray-900">{msg.subject}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">{msg.message}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
