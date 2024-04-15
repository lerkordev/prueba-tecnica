import { $, component$, QwikMouseEvent,useSignal } from "@builder.io/qwik";

export const InputList = component$(() => {
  return (
    <div class={"bg-gray-100 rounded-b-xl z-10 absolute w-[370px] mt-[-10px]"}>
      <ul class={"px-2 pt-4 pb-3 flex flex-col gap-3"}>
        <li class={"uppercase text-sm text-gray-500"}>TRENDING</li>
        <li class={"flex gap-3 ease-in duration-75 hover:translate-x-4 cursor-pointer"}>
          <div>
            <img
              class={"w-[40px] h-[40px] rounded-full object-contain"}
              src="https://uppbeat.imgix.net/images/UppBeat_Playlists_Beats_Lofi-Beats.jpg?auto=compress&w=80&h=80"
              alt=""
            />
          </div>
          <div class={'flex content-center items-center '}>
            <span class={'font-medium text-xs'}>Lofit Beats</span>
          </div>
        </li>
      </ul>
    </div>
  );
});

export const InputSrc = component$(() => {



  return (
    <div class='drop-shadow-lg flex justify-between items-center w-full'>
      <div class="qwik-input-src ">
        <div class={"flex justify-center content-center items-center "}>
          <button class={" rounded-lg w-6 h-6"}>
            <i class="text-[#2e628e] font-bold uil uil-search"></i>
          </button>
        </div>
        <input
          class={"bg-transparent w-full rounded-full text-[#2e628e]"}
          id={"input-src-qwik"}
          placeholder="Search for any token or wallet"
          type="text"
        />
      </div>
      <div>
        <button class={"text-[#85B3DB] font-bold border-2 border-[#85B3DB] p-3  rounded-md"}>
          <i class="uil-arrow-to-right pr-2"></i>
          Login / Connect
        </button>
      </div>
    </div>
  );
});
