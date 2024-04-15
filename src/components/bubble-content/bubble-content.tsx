import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { getData } from "~/api/data";
import BubblePlot from "./bubble-plot";
import Header from "../header/header";

export const BubbleContent = component$(() => {

    const resourceData = useResource$(() => {
        const bubbleData = getData();
        return bubbleData
    })
    
    return (
        <div class=" w-[1082px]">
            <Header/>
            <div class="flex justify-center">     
            <Resource value={resourceData} 
            onPending={()=> <>Loading...</>}
            onRejected={()=> <>Error loading data!</>}
            onResolved={(bubbleData)=><BubblePlot data={bubbleData} xAxisDomain={[0, 10000]} yAxisDomain={[0, 90]} zAxisDomain={[0, 1310000000]}
            cx="gdpPercap" cy="lifeExp" r="pop" fill="#69b3a2" stroke="black" opacity={0.7} />}
/></div>
             </div>
    );
})