import { component$ } from "@builder.io/qwik";
import { InputSrc } from "../InputSrc/input-src";

export default component$(() => {

  return (
    <header class={"h-[76px] p-5 pt-4 flex bg-[#09182A] border-b border-[#132a44]"}>
      <div class={"w-full flex"}>
        <InputSrc />
      </div>
      <div class={"flex gap-2"}>
        <div class={"flex gap-2"}>
        </div>
       
      </div>
    </header>
  );
});
