import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CurrencySelectorProps {
  currency: string;
  onChangeCurrency: (value: string) => void;
  availableCurrencies: string[];
}

export function CurrencySelector({
  currency,
  onChangeCurrency,
  availableCurrencies,
}: CurrencySelectorProps) {
  return (
    <div className="flex items-center rounded-md bg-primary-500">
      <div className="mx-4 text-white">Currency</div>
      <Select value={currency} onValueChange={onChangeCurrency}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Select a currency" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {availableCurrencies.map((currency) => (
              <SelectItem
                key={currency}
                value={currency}
                className="hover:bg-primary-50 focus:bg-primary-50 focus:outline-none"
              >
                {currency}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
