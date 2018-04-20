<?php

class Vertex {
    public $label;

    public function __construct($label) {
        $this->label = $label;
    }
}

class Graph {
    public $vertices;
    public $vertexList = [];
    public $edges = 0;
    public $adj = array();
    public $marked = array();
    public $edgeTo = [];

    public function __construct($v) {
        $this->vertices = $v;
        for ($i = 0; $i < $this->vertices; $i++) {
            $this->adj[$i] = array();
            $this->adj[$i][] = "";
        }
        for ($i = 0; $i < $this->vertices; $i++) {
            $this->marked[$i] = false;
        }
    }

    public function addEdge($v, $w) {
        $this->adj[$v][] = $w;
        $this->adj[$w][] = $v;
        $this->edges++;
    }

    public function toString() {}

    /* public function showGraph() {
        for ($i = 0; $i < $this->vertices; $i++) {
            echo $i . '->';
            for ($j = 0; $j < $this->vertices; $j++) {
                if (isset($this->adj[$i][$j])) {
                    echo $this->adj[$i][$j] . ' ';
                }
            }
            echo '<br>';
        }
    } */

    public function showGraph() {
        $visited = [];
        for ($i = 0; $i < $this->vertices; $i++) {
            echo $this->vertexList[$i] . ' -> ';
            $visited.push($this->vertexList[$i]);
            for ($j = 0; $j < $this->vertices; $j++) {
                if (isset($this->adj[$i][$j]) && $this->adj[$i][$j] ! = false) {
                    if (!in_array($this->vertexList[$j], $visited)) {
                        echo $this->vertexList[$j] . ' ';
                    }
                }
            }
            array_pop($visited);
        }
    }

    public function dfs($v) {
        $this->marked[$v] = true;
        if (count($this->adj[$v]) > 0) {
            echo "Visited vertex: " . $v . "<br>";
            foreach ($this->adj[$v] as $value) {
                if ($value && !$this->marked[$value]) {
                    $this->dfs($value);
                }
            }
        }
    }

    public function bfs($s) {
        $queue = array();
        $this->marked[$s] = true;
        array_push($queue, $s);
        while (count($queue) > 0) {
            $v = array_shift($queue);
            if ($v !== false) {
                echo "Visited vertex: " . $v . "<br>";
            }
            foreach ($this->adj[$v] as $value) {
                if ($value && !$this->marked[$value]) {
                    $this->edgeTo[$value] = $v;
                    $this->marked[$value] = true;
                    array_push($queue, $value);
                }
            }
        }
    }

    public function pathTo($v) {
        $source = 0;
        if (!$this->hasPathTo($v)) {
            return false;
        }
        $path = [];
        for ($i = $v; $i != $source; $i = $this->edgeTo[$i]) {
            array_push($path, $i);
        }
        array_push($path, $source);
        return $path;
    }

    public function hasPathTo($v) {
        return $this->marked[$v];
    }

    public function topSort() {
        $stack = [];
        $visited = [];
        for ($i = 0; $i < $this->vertices; $i++) {
            $visited[$i] = false;
        }
        for ($i = 0; $i < count($stack); $i++) {
            if ($visited[$i] == false) {
                $this->topSortHelper($i, $visited, $stack);
            }
        }
        foreach ($stack as $i) {
            if ($i != false) {
                echo $this->vertexList[$i] . '<br>';
            }
        }
    }

    public function topSortHelper($v, $visited, $stack) {
        $visited[$v] = true;
        foreach ($this->adj[$v] as $w) {
            if (!$visited[$w]) {
                $this->topSortHelper($visited[$w], $visited, $stack);
            }
        }
        array_push($stack, $v);
    }
}

$g = new Graph(5);
$g->addEdge(0, 1);
$g->addEdge(0, 2);
$g->addEdge(1, 3);
$g->addEdge(2, 4);
/* $g->showGraph(); */
$g->bfs(0);
$vertex = 3;
$paths = $g->pathTo($vertex);
while (count($paths) > 0) {
    if (count($paths) > 1) {
        echo array_pop($paths) . '-';
    } else {
        echo array_pop($paths);
    }
}