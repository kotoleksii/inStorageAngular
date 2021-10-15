export interface IMaterial {
  id: number;
  title: string;
  inventory_number: string;
  date_start: string;
  type: string;
  amount: number;
  price_hr: number;
  total_sum_hr: number;
  employee_id: number;
  score_id: number;
}

export interface IScore {
  id: number;
  title: string;
  description: string;
}

export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string;
  post: string;
  description: string;
}

