function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
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
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

/* function showGraph() {
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
} */

function showGraph() {
    var visited = [];
    var s = '';
    for (var i = 0; i < this.vertices; ++i) {
        s += this.vertexList[i] + ' -> ';
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    s += this.vertexList[j] + ' ';
                }
            }
        }
        visited.pop();
    }
    console.log(s);
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
                this.edgeTo[this.adj[v][i]] = v;
                this.marked[this.adj[v][i]] = true;
                queue.push(this.adj[v][i]);
            }
        }
    }
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var i = 0; i < stack.length; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var i = 0; i < this.adj[v].length; i++) {
        if (!visited[this.adj[v][i]]) {
            this.topSortHelper(visited[this.adj[v][i]], visited, stack);
        }
    }
    stack.push(v);
}

g = new Graph(5);
console.log(g);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
/* g.showGraph(); */
g.bfs(0)
var vertex = 4;
var paths = g.pathTo(vertex);
var s = '';
while (paths.length > 0) {
    if (paths.length > 1) {
        s += paths.pop() + '-';
    } else {
        s += paths.pop()
    }
}
console.log(s);