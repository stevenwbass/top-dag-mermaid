import { transformDagToFlowchart, Dictionary } from '../src';

class TestDag<TData> {
  data: Dictionary<TData>;
  incomingEdges: Dictionary<Array<string>>;
  outgoingEdges: Dictionary<Array<string>>;
  count: number;

  constructor() {
    this.data = new Dictionary<TData>();
    this.incomingEdges = new Dictionary<Array<string>>();
    this.outgoingEdges = new Dictionary<Array<string>>();
    this.count = 0;
  }
}

describe('index', () => {
  describe('transformDagToFlowchart', () => {
    it('should return a string representing the mermaid flowchart', () => {
      const dag = JSON.parse(`{
  "data": {
    "first": "first-data",
    "second": "second-data",
    "third": "third-data",
    "fourth": "fourth-data"
  },
  "outgoingEdges": {
    "first": [
      "second",
      "third"
    ],
    "second": [],
    "third": [
      "fourth"
    ],
    "fourth": []
  }
}`);

      const result = transformDagToFlowchart(dag);
      const expected =
        'flowchart LR\nfirst --> second\nfirst --> third\nsecond\nthird --> fourth\nfourth\n';
      expect(result).toMatch(expected);
    });
  });
});
