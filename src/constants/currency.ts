export type Currencies = "eur" | "usd" | "gbp" | "try";

export type CurrencyConfig = {
  key: Currencies;
  text: string;
};

export const currencyConfig: CurrencyConfig[] = [
  { key: 'eur', text: '€ EUR' },
  { key: 'usd', text: '$ USD' },
  { key: 'gbp', text: '£ GBP' },
  { key: 'try', text: '₺ TRY' }
]