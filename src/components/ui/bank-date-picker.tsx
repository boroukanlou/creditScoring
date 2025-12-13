import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * BankDatePicker
 * - value: ISO string (or undefined/null)
 * - onChange: (isoString|null) => void
 *
 * Uses native <input type="date"> inside a Popover for stable UX.
 */
export function BankDatePicker({
  value,
  onChange,
}: {
  value?: string | null;
  onChange: (v: string | null) => void;
}) {
  const [open, setOpen] = useState(false);

  const toInputValue = (iso?: string | null) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      // produce yyyy-mm-dd for input[type=date]
      const yy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${yy}-${mm}-${dd}`;
    } catch {
      return "";
    }
  };

  const parseFromInput = (v: string) => {
    if (!v) return null;
    // Ensure time part so ISO is correct (UTC midnight)
    const iso = new Date(`${v}T00:00:00`).toISOString();
    return iso;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "bank-input w-full justify-start text-left font-normal relative",
            !value && "text-muted-foreground"
          )}
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-primary/60 rounded-r-md" />
          <CalendarIcon className="w-4 h-4 mr-2 opacity-80" />
          {value ? new Date(value).toLocaleDateString() : "Select date"}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={8}
        className="p-3 w-60 rounded-2xl shadow-xl bg-card/90 backdrop-blur-md border border-border"
      >
        <div className="flex flex-col gap-3">
          {/* native date input */}
          <input
            type="date"
            className="bank-input w-full px-2 py-2"
            value={toInputValue(value)}
            onChange={(e) => {
              const val = parseFromInput(e.target.value);
              onChange(val);
            }}
            aria-label="Select date"
          />

          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <button
                type="button"
                className="px-3 py-1 rounded-md text-sm border border-border bg-muted/40 hover:bg-muted"
                onClick={() => {
                  // set to today (local)
                  const today = new Date();
                  const iso = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate(),
                    0,
                    0,
                    0
                  ).toISOString();
                  onChange(iso);
                  setOpen(false);
                }}
              >
                Today
              </button>

              <button
                type="button"
                className="px-3 py-1 rounded-md text-sm border border-border bg-white/5 hover:bg-muted"
                onClick={() => {
                  onChange(null);
                }}
                title="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="px-3 py-1 rounded-md text-sm border border-border bg-white/5 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded-md text-sm bg-primary text-primary-foreground"
                onClick={() => setOpen(false)}
                title="Done"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Done</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
