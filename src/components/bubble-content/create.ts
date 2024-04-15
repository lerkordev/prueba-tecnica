import * as d3 from "d3";

export function createBubblePlot(
    elm: HTMLDivElement | undefined,
    data: any[] | undefined | Record<string, any>,
) {
    // set the dimensions and margins of the graph
    const width = 666;
    const height = 460;

    // Variable para almacenar las coordenadas iniciales de los nodos
    const initialNodePositions: { [key: string]: { x: number, y: number } } = {};
    setTimeout(() => {
        node.each(function (d: any, i: number) {
            initialNodePositions[i] = { x: d.x, y: d.y };
        });
    }, 1000);

    // append the svg object to the body of the page
    const svg = d3.select(elm)
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    // Check if data is defined
    if (!data) {
        return {
            unmount: () => {
                svg.remove();
            },
            node: svg.node()
        };
    }

    // Read data

    // Color palette for market cap change
const color = d3.scaleOrdinal()
.domain(["positivo", "negativo"])
.range(["green", "red"]);

    // Size scale for countries
    const size = d3.scaleLinear()
        .domain([0, 100000])
        .range([20, 66]);  // circle will be between 7 and 55 px wide

    // create a tooltip
    const Tooltip = d3.select(elm)
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px");

    // Three functions that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d: any) {
        Tooltip.style("opacity", 1);
    };
    const mousemove = function (event: any, d: any) {
        Tooltip
        .html(`
        <u class="text-black flex justify-center items-center text-center flex-col gap-2 rounded-full">
            ${d.symbol}
            <img src="${d.image}" width="22" height="22" />
            ${parseFloat(d.price_change_percentage_24h).toFixed(2)}
        </u>
    `)
            .style("left", (d3.pointer(event)[0] + 20) + "px")
            .style("top", (d3.pointer(event)[1]) + "px");
    };
    const mouseleave = function (d: any) {
        Tooltip.style("opacity", 0);
    };

    // Initialize the circle: all located at the center of the svg area
    const node = svg.append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", function (d: any) { return size(d.current_price); })
        .attr("cx", function (d: any, i: number) {
            // Almacenar la posición inicial del nodo
            initialNodePositions[i] = { x: width / 2, y: height / 2 };
            return width / 2;
        })
        .attr("cy", function (d: any, i: number) {
            return height / 2;
        })
        .style("fill", function (d: any) {
            return color(d.market_cap_change_percentage_24h >= 0 ? "positivo" : "negativo");
        })
        .style("fill-opacity", 0.2)
        .attr("stroke", function (d: any) {
            return color(d.market_cap_change_percentage_24h >= 0 ? "positivo" : "negativo");
        })
        .style("stroke-opacity", 0.2)
        .style("stroke-width", 1)
        .on("mouseover", mouseover) // What to do when hovered
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .call(d3.drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // Features of the forces applied to the nodes
    const simulation = d3.forceSimulation(data)
        .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(.1)) // Nodes are attracted one each other if value is > 0
        .force("collide", d3.forceCollide().strength(.2).radius(function (d: any) { return (size(+d.current_price) + 3); }).iterations(1)); // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions
    simulation.on("tick", function () {
        node.attr("cx", function (d: any) { return d.x; })
            .attr("cy", function (d: any) { return d.y; });
    });

    // What happens when a circle is dragged?
    function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(.03).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
    }
    function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(.03);
        d.fx = null;
        d.fy = null;
    
        // Restaurar la posición inicial del nodo con transición suave
        Object.keys(initialNodePositions).forEach(index => {
            const initialPosition = initialNodePositions[index];
            d3.select(node.nodes()[index])
                .transition()
                .duration(500) // Duración de la transición en milisegundos
                .attr("cx", initialPosition.x)
                .attr("cy", initialPosition.y);
                data[index].x = initialPosition.x;
                data[index].y = initialPosition.y;
        });
        // Actualizar la posición inicial del nodo
    
        // Detener la simulación
        simulation.stop();
    }
    
    
    // Función para reiniciar la simulación de fuerza
    function restartSimulation() {
        // Reiniciar la simulación con alpha más alto
        simulation.alpha(1).restart();
    }

    return {
        unmount: () => {
            svg.remove();
        },
        node: svg.node(),
        restart: restartSimulation
    };
}
