<?php

class Vertex {
    public $label;

    public function __construct($label) {
        $this->label = $label;
    }
}

class Graph {
    public $vertices;
    public $edges = 0;
    public $adj = array();
    public $marked = array();

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

    public function showGraph() {
        for ($i = 0; $i < $this->vertices; $i++) {
            echo $i . '->';
            for ($j = 0; $j < $this->vertices; $j++) {
                if (isset($this->adj[$i][$j])) {
                    echo $this->adj[$i][$j] . ' ';
                }
            }
            echo '<br>';
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

    function bfs($s) {
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
                    $this->marked[$value] = true;
                    array_push($queue, $value);
                }
            }
        }
    }
}

$g = new Graph(5);
$g->addEdge(0, 1);
$g->addEdge(0, 2);
$g->addEdge(1, 3);
$g->addEdge(2, 4);
$g->showGraph();
$g->bfs(0);