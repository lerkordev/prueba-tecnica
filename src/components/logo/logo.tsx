import { component$ } from "@builder.io/qwik";

export const Logo = component$(() => {
  return (
    <div class='flex justify-center items-center gap-2 p-2 h-[76px]'>
      <img src="https://moralismoney.com/_next/static/media/MoralisMoneyLogomark.5b65b0d7.svg" width="56" height="22" />
      <img src="https://moralismoney.com/_next/static/media/MoralisMoneyLogotype.431faf8b.svg" width="153" height="22" />
    </div>
  );
});
