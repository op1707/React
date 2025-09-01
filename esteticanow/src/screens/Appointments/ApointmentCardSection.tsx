import React from 'react';
import Card, { type CardConfig } from './Card';
import invoice from '../../assets/invoice.png'
const AppointmentCardSection: React.FC = () => {
  const sampleCards: CardConfig[] = [
    {
      id: '987654321',
      status: 'completed',
      customerName: 'Shivani Prajapati',
      services: 'Deep Tissue Massage + Hot Stone Mass...',
      date: 'Thursday 16 May',
      time: '08:00 AM',
      staffName: 'Dr. Anjali Mehra',
      payment: { type: 'cash', amount: 500 },
      actions: [
        { text: 'Invoice', variant: 'outline', icon: invoice },
        { text: 'View Details', variant: 'outline', icon: invoice }
      ],
      showDatePicker:false
    },
    {
      id: '987654321',
      status: 'new-request',
      customerName: 'Shivani Prajapati',
      services: 'Manicure, Pedicure',
      date: 'Thursday 16 May',
      time: '08:00 AM',
      staffName: 'Dr. Anjali Mehra',
      payment: { type: 'paid', amount: 500 },
      actions: [
        { text: 'Accept', variant: 'success' },
        { text: 'Decline', variant: 'outline' }
      ],
      showDatePicker:true
    },
    {
      id: '987654321',
      status: 'ongoing',
      customerName: 'Shivani Prajapati',
      services: 'Manicure, Pedicure',
      date: 'Thursday 16 May',
      time: '08:00 AM',
      staffName: 'Dr. Anjali Mehra',
      payment: { type: 'online', amount: 500, percentage: '10% Paid' },
      actions: [
        { text: 'Complete', variant: 'success' },
         { text: 'View Details', variant: 'outline', icon: invoice }
      ],
      showDatePicker:true
    },
    {
      id: '987654321',
      status: 'upcoming',
      customerName: 'Shivani Prajapati',
      services: 'Dermabrasion (Session 1 of 7)',
      date: 'Thursday 16 May',
      time: '08:00 AM',
      staffName: 'Dr. Anjali Mehra',
      payment: { type: 'online', amount: 500, percentage: '10% Paid' },
      actions: [
        { text: 'Start', variant: 'success' },
        { text: 'Cancel', variant: 'outline' }
      ],
      showDatePicker:true
    },
    {
      id: '987654321',
      status: 'cancelled',
      customerName: 'Shivani Prajapati',
      services: 'Facial Packages, Manicure, Pedicure',
      date: 'Thursday 16 May',
      time: '08:00 AM',
      staffName: 'Dr. Anjali Mehra',
      payment: { type: 'refunded', amount: 500 },
      actions: [
        { text: 'Receipt', variant: 'outline', icon: invoice },
        { text: 'View Details', variant: 'outline', icon: invoice }
      ],
      showDatePicker:false
    },
    {
      id: '987654321',
      status: 'new-request',
      customerName: 'Shivani Prajapati',
      services: 'Manicure, Pedicure',
      date: 'Thursday 16 May',
      time: '08:00 AM',
      staffName: 'Dr. Anjali Mehra',
      payment: { type: 'cash', amount: 500 },
      actions: [
        { text: 'Accept', variant: 'success' },
        { text: 'Decline', variant: 'outline' }
      ],
      showDatePicker:true
    }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCards.map((card, index) => (
          <Card key={index} config={card} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentCardSection;
