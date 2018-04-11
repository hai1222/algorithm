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

    public function __construct($v) {
        $this->vertices = $v;
        for ($i = 0; $i < $this->vertices; $i++) {
            $this->adj[$i] = array();
            $this->adj[$i][] = "";
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
}

$g = new Graph(5);
var_dump($g);
$g->addEdge(0, 1);
$g->addEdge(0, 2);
$g->addEdge(1, 3);
$g->addEdge(2, 4);
$g->showGraph();