import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProductSelectInput = () => {
  return (
    <div className="items-center hidden space-x-2 sm:flex">
      <Select value={`${1}`} onValueChange={(value) => value}>
        <SelectTrigger className="h-8 w-[65px] bg-white">
          <SelectValue placeholder={String(1)} />
        </SelectTrigger>
        <SelectContent side="top" className="w-10 bg-white">
          {Array.from({ length: 7 }).map((_, index) => (
            <SelectItem key={index} value={String(index)} className="hover:bg-primary-50">
              {index + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
