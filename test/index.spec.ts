import { transformDagToFlowchart, Dictionary, HashSet } from '../src';

class TestDag<TKey, TData> {
  data: Dictionary<TKey, TData>;
  incomingEdges: Dictionary<TKey, HashSet<TKey>>;
  outgoingEdges: Dictionary<TKey, HashSet<TKey>>;
  count: number;

  constructor() {
    this.data = new Dictionary<TKey, TData>();
    this.incomingEdges = new Dictionary<TKey, HashSet<TKey>>();
    this.outgoingEdges = new Dictionary<TKey, HashSet<TKey>>();
    this.count = 0;
  }
}

describe('index', () => {
  describe('transformDagToFlowchart', () => {
    it('should return a string representing the mermaid flowchart', () => {
      const dag = new TestDag<string, number>();

      const result = transformDagToFlowchart(dag);

      expect(result).toMatch("flowchart TD");
    });
  });
});
