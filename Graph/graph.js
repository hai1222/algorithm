function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    var s = '';
    for (var i = 0; i < this.vertices; ++i) {
        s = i + '->';
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                s += this.adj[i][j] + ' ';
            }
        }
        console.log(s);
    }
}

g = new Graph(5);
console.log(g);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();