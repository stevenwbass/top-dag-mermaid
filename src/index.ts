export interface Data {
    name: string
}

export class Dictionary<TData> {
    [index: string] : TData
}

export interface Dag<TData extends Data> {
    data: Dictionary<TData>;
    outgoingEdges: Dictionary<Array<string>>;
}

// `TData & Data` should be equivalent to `TData extends Data` but the linter doesn't like the latter
export const transformDagToFlowchart = function<TData>(dag: Dag<TData & Data>): string {
    debugger;
    let flowchartDef: string = "flowchart TD\n"
    const addFlowChartDefLine = function(line: string) {
        flowchartDef += line + "\n";
    };
    const getNodeKeyWithName = function(key: string): string {
        let nodeKeyWithName = `${key}`;
        let data: TData & Data = dag.data[key] as TData & Data;
        if (data && data.name) {
            nodeKeyWithName += `[${data.name}]`;
        }
        return nodeKeyWithName;
    }
    
    const keys = Object.keys(dag.data);
    keys.forEach(key => {
        const outgoingEdges: Array<string> = dag.outgoingEdges[key] as Array<string>;
        if (outgoingEdges && outgoingEdges.length > 0) {
            outgoingEdges.forEach(outgoingEdge => {
                let line: string = getNodeKeyWithName(key);
                line += ` --> ${outgoingEdge}`;
                addFlowChartDefLine(line);
            });
        } else {
            addFlowChartDefLine(getNodeKeyWithName(key));
        }
    });

    return flowchartDef;
}
