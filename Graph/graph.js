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
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
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

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log("Visited vertex: " + v);
        for (var i = 0; i < this.adj[v].length; ++i) {
            if (!this.marked[this.adj[v][i]]) {
                this.dfs(this.adj[v][i]);
            }
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v != undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var i = 0; i < this.adj[v].length; ++i) {
            if (this.adj[v][i] && !this.marked[this.adj[v][i]]) {
                this.marked[this.adj[v][i]] = true;
                queue.push(this.adj[v][i]);
            }
        }
    }
}
g = new Graph(5);
console.log(g);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0)