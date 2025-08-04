"use client";

import { LanguageIcon } from "@heroicons/react/24/solid";

import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useTransition } from "react";
import { Locale } from "@/src/i18n/config";
import { setUserLocale } from "@/services/Locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative flex justify-center">
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            "rounded-sm outline-none transition-colors hover:bg-slate-200 ",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Select.Icon>
            <LanguageIcon className="h-5 w-5 text-slate-200 transition-colors hover:text-slate-900" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align="end"
            className="min-w-[2rem] overflow-hidden rounded-sm bg-transparent border border-gray-800/80 shadow-md "
            position="popper"
          >
            <Select.Viewport className="h-full flex flex-col items-center bg-transparent">
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className={`bg-black ${
                    item.value === defaultValue &&
                    "bg-gr-600 border-0 text-white"
                  } flex cursor-default items-center w-full justify-center`}
                  value={item.value}
                >
                  <span
                    className={`border-0 ${
                      item.value === defaultValue
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow className="fill-white " />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
