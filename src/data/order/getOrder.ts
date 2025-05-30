'use server';
import { axiosInstance } from '@/lib/axiosInstance';
import { Consult, consultFromJson } from '@/types/Consult';
import { Diagnosis } from '@/types/Diagnosis';
import { Order } from '@/types/Order';

export async function getPendingOrder(): Promise<{
  orders: Order[];
  diagnoses: Diagnosis[];
}> {
  const result = (await axiosInstance.get('/orders?order_status=PENDING')).data;
  return {
    orders: result.orders.map((val: Order) => ({
      ...val,
      consult: consultFromJson(val.consult as Consult), // val.consult is an object, not a number
    })),
    diagnoses: result.diagnoses.map((val: Diagnosis) => ({
      ...val,
      consult: val.consult && consultFromJson(val.consult),
    })),
  };
}
