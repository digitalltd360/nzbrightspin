export type Bonus = {
  id: number;
  bonus: string;
};

export type Feature = {
  id: number;
  feature: string;
};

export type Payment = {
  id: number;
  payment: string;
  payment_link: string;
};

export type Deal = {
  id: number;
  title: string;
  logo_img: string;
  link: string;
  casino_rate: number;
  country: string;
  country_code: string;
  bonuses: Bonus[];
  features: Feature[];
  payments: Payment[];
};

export type Disclaimer = {
  logo: string;
  link: string;
  title: string;
};
