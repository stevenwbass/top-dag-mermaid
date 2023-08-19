export class Dictionary<TKey, TData> {
}

export class HashSet<TKey>{
}

export interface Dag<TKey, TData> {
    data: Dictionary<TKey, TData>;
    incomingEdges: Dictionary<TKey, HashSet<TKey>>;
    outgoingEdges: Dictionary<TKey, HashSet<TKey>>;
    count: number;
}

export const transformDagToFlowchart = function<TKey, TData>(dag: Dag<TKey, TData>): string {
    // TODO: parse dag and generate flowchart string representation
    return `flowchart TD`;
}
