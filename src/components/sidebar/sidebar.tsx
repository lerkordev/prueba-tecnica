import { component$ } from "@builder.io/qwik";
import { SidebarItem } from "../sidebar-item/sidebar-item";
import { Logo } from "../logo/logo";


export const Separator = () => (
  <>
    <hr />
  </>
);

export default component$(() => {
  return (
    <div class={" text-[#f0f8ff] bg-[#0f253d] font-bold w-[280px] h-auto"}>
      <Logo />
      <div class='flex flex-col justify-between gap-[91px]'>
        <div class={"flex-col gap-6 p-6 flex"}>
          <SidebarItem name={"Market Overview"} route={'/'} icon={"uil-chart-line"} />
          <SidebarItem name={"Reasearch"} route={'/'} icon={"uil-book-alt"} />
          <SidebarItem name={"Saved"} route={'/'} icon={"uil-heart"} />
          <SidebarItem name={"Learn"} route={'/'} icon={"uil-book-open"} />
          <SidebarItem name={"Portfolio"} route={'/'} icon={"uil-database"} />
          <SidebarItem name={"Settings"} route={'/'} icon={"uil-setting"} />
          <SidebarItem name={"API For Devs"} route={'/'} icon={"uil-code"} />
          
        </div>
        <div class='p-3'>
          <button class={"text-[#85B3DB] font-bold border-2 border-[#2e628e] p-3 w-full rounded-md"}>
            <i class="uil-arrow-to-right"></i>
            Start Trial
          </button>
        </div>
      </div>
      <div class="border-t-[1px] border-[#1a3656] bg-[#132a44] flex justify-end">
        <i class="uil-angle-left text-[#85B3DB] text-4xl"></i>
      </div>

    </div>
  );
});
