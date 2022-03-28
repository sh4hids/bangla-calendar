export type DayFormat = 'D' | 'DD';
export type WeekDayFormat = 'eee' | 'eeee';
export type MonthFormat = 'M' | 'MM' | 'MMMM';
export type YearFormat = 'YY' | 'YYYY' | 'YYYYb';
export type CalculationMethod = 'BD' | 'IN';

export interface DateOptions {
  format?: string;
  calculationMethod?: CalculationMethod;
}

export interface DayOptions extends DateOptions {
  format?: DayFormat;
}

export interface WeekDayOptions extends DateOptions {
  format?: WeekDayFormat;
}

export interface MonthOptions extends DateOptions {
  format?: MonthFormat;
}

export interface YearOptions extends DateOptions {
  format?: YearFormat;
}
