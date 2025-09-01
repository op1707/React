import React from 'react';
import Button, { type ButtonVariant } from '../../common-components/Button';
import paymentStatusIcon_1 from '../../assets/paymentStatusIcon_1.png';
import paymentStatusIcon_2 from '../../assets/paymentStatusIcon_2.png';
import paymentStatusIcon_3 from '../../assets/paymentStatusIcon_3.png';
import clockIcon from '../../assets/clockIcon.png';
import calenderIcon_1 from '../../assets/calenderIcon_1.png';

export type CardStatus = 'completed' | 'new-request' | 'ongoing' | 'upcoming' | 'cancelled';
export type PaymentType = 'cash' | 'paid' | 'online' | 'refunded';
interface BadgeConfig {
  text: string;
  color: string;
  bgColor: string;
  icon?: string;
}

interface ActionButton {
  text: string;
  variant: ButtonVariant;
  icon?: string;
  onClick?: () => void;
}

interface PaymentInfo {
  type: PaymentType;
  amount: number;
  percentage?: string;
}

export interface CardConfig {
  id: string;
  status: CardStatus;
  customerName: string;
  services: string;
  date: string;
  time: string;
  staffName?: string;
  payment: PaymentInfo;
  actions: ActionButton[];
  avatar?: string;
  showDatePicker:boolean
}

const Card: React.FC<{ config: CardConfig }> = ({ config }) => {
  const statusConfig: Record<CardStatus, BadgeConfig> = {
    completed: { text: 'Completed', color: 'text-[#166534]', bgColor: 'bg-[#DCFCE7]' , icon: paymentStatusIcon_1},
    'new-request': { text: 'New Request', color: 'text-[#9A3412]', bgColor: 'bg-[#FFEDD5]' ,icon: paymentStatusIcon_2 },
    ongoing: { text: 'Ongoing', color: 'text-[#1E40AF]', bgColor: 'bg-[#DBEAFE]' ,icon: paymentStatusIcon_2 },
    upcoming: { text: 'Upcoming', color: 'text-[#6B21A8]', bgColor: 'bg-[#F3E8FF]',icon: paymentStatusIcon_2 },
    cancelled: { text: 'Cancelled', color: 'text-[#FF0000]', bgColor: 'bg-[#FFE9E9]' , icon:paymentStatusIcon_3 },
  };

  const paymentConfig: Record<PaymentType, BadgeConfig> = {
    cash: { text: 'Cash', color: 'text-green-700', bgColor: 'bg-green-100' },
    paid: { text: 'Paid', color: 'text-green-700', bgColor: 'bg-green-100' },
    online: { text: 'Online', color: 'text-blue-700', bgColor: 'bg-blue-100' },
    refunded: { text: 'Refunded', color: 'text-gray-700', bgColor: 'bg-gray-100' },
  };

  const currentStatus = statusConfig[config.status];
  const currentPayment = paymentConfig[config.payment.type];

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">#{config.id}</span>
          <img
              src={currentStatus.icon}
              alt="button"
              className="w-[16px] h-[16px] object-contain"
            />
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${currentStatus.bgColor} ${currentStatus.color}`}>
          {currentStatus.text}
        </span>
      </div>

      <div className="flex items-center space-x-3 mb-3 ">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center bg-gradient-to-b from-[#F97415] to-[#FAA52E]">
          <span className="text-white font-medium text-sm">
            {config.avatar || config.customerName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[#020817]">{config.customerName}</h3>
          <p className="text-sm text-[#64748B]">{config.services}</p>
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center text-sm text-[#64748B]">
           <img
              src={calenderIcon_1}
              alt="button"
              className="w-[16px] h-[16px] object-contain mr-2"
            />
          <span>{config.date}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-[#64748B]">
             <img
              src={clockIcon}
              alt="button"
              className="w-[16px] h-[16px] object-contain mr-2"
            />
            <span>{config.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${currentPayment.bgColor} ${currentPayment.color}`}>
              {currentPayment.text}
            </span>
            {config.payment.percentage && (
              <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-medium">
                {config.payment.percentage}
              </span>
            )}
            <span className="font-semibold text-gray-800">₹{config.payment.amount}</span>
          </div>
        </div>
      </div>

      {config.staffName && (
        <div className="flex items-center text-sm text-gray-600 mb-4">
           <img
              src={clockIcon}
              alt="button"
              className="w-[16px] h-[16px] object-contain mr-2"
            />
          <span>Staff Handled by: {config.staffName}</span>
        </div>
      )}

      <div className="flex items-center justify-center pt-3 border-t border-gray-100">
        <div className="flex space-x-2">
          {config.actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="sm"
              onClick={action.onClick}
              icon={action.icon}
              width="96px"
            >
              {action.text}
            </Button>
          ))}
        </div>
        
        {config.showDatePicker && (
          <button className="px-3 py-1.5 flex items-center justify-center bg-white hover:bg-gray-50 rounded-lg border border-gray-200 text-sm ml-2">
            <img
              src={calenderIcon_1}
              alt="calendar"
              className="w-4 h-4 object-contain"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
