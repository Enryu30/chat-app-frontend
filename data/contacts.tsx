export const contacts = [
  {
    id: 1,
    name: 'Emma Thompson',
    avatar: 'EM',
    lastMessage: 'I’ve sent you the latest project files...',
    time: '12:45 PM',
    color: 'bg-purple-200 text-purple-700',
    isOnline: true,
    messages: [
      { sender: 'them', text: 'Can you update the wireframe by noon?', time: '12:30 PM', status: 'received' },
      { sender: 'me', text: 'Sure! I’m on it.', time: '12:35 PM', status: 'sent' },
      { sender: 'me', text: 'I’ve sent you the latest project files...', time: '12:45 PM', status: 'sent' },
    ],
  },
  {
    id: 2,
    name: 'Michael Johnson',
    avatar: 'MJ',
    color: 'bg-blue-200 text-blue-700',
    lastMessage: 'Are we still meeting for coffee tomorrow?',
    time: 'Yesterday',
    isOnline: false,
    wasOnline: true,
    messages: [
      { sender: 'them', text: 'Let’s meet at 10 AM.', time: '10:00 AM', status: 'received' },
      { sender: 'me', text: 'Sounds good! See you there.', time: '10:15 AM', status: 'sent' },
      { sender: 'them', text: 'Are we still meeting for coffee tomorrow?', time: '10:30 AM', status: 'received' },
    ],
  },
  {
    id: 3,
    name: 'Sophia Lee',
    avatar: 'SL',
    color: 'bg-red-200 text-red-700',
    lastMessage: 'The design team loved your presentation.',
    time: 'Yesterday',
    isOnline: true,
    messages: [
      { sender: 'them', text: 'Hey, the client had great feedback.', time: '3:15 PM', status: 'received' },
      { sender: 'me', text: 'Really? That’s great to hear!', time: '3:17 PM', status: 'sent' },
      { sender: 'them', text: 'The design team loved your presentation.', time: '3:20 PM', status: 'received' },
    ],
  },
  {
    id: 4,
    name: 'Robert Brown',
    avatar: 'RB',
    color: 'bg-pink-200 text-pink-700',
    lastMessage: 'Can you review the budget proposal?',
    time: 'Tuesday',
    messages: [
      { sender: 'them', text: 'I uploaded the budget doc.', time: '9:00 AM', status: 'received' },
      { sender: 'them', text: 'Can you review the budget proposal?', time: '9:15 AM', status: 'received' },
    ],
  },
  {
    id: 5,
    name: 'Amelia Wilson',
    avatar: 'AW',
    color: 'bg-green-200 text-green-700',
    lastMessage: 'Thanks for your help with the client!',
    time: 'Monday',
    messages: [
      { sender: 'me', text: 'I covered all their questions.', time: '4:10 PM', status: 'sent' },
      { sender: 'them', text: 'Thanks for your help with the client!', time: '4:15 PM', status: 'received' },
    ],
  },
  {
    id: 6,
    name: 'Daniel Martinez',
    avatar: 'DM',
    lastMessage: 'Let’s schedule a call to discuss this.',
    color: 'bg-yellow-200 text-yellow-700',
    time: 'May 25',
    messages: [
      { sender: 'me', text: 'Did you review the notes I shared?', time: '2:00 PM', status: 'sent' },
      { sender: 'them', text: 'Yes, I have a few suggestions.', time: '2:15 PM', status: 'received' },
      { sender: 'them', text: 'Let’s schedule a call to discuss this.', time: '2:30 PM', status: 'received' },
    ],
  },
];


export interface Message {
  sender: string;
  text: string;
  time: string;
  status: string;
}

export interface ContactType {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  color: string;
  isOnline?: boolean;  // required, NOT optional
  messages: Message[];
  wasOnline?: string; // optional
}

