<?php

class Node {
    public $left;
    public $right;
    public $data;
    public $count = 1;

    public function __construct($data, $left = null, $right = null) {
        $this->data = $data;
        if ($left) {
            $this->left = $left;
        }
        if ($right) {
            $this->right = $right;
        }
    }

    public function show() {
        return $this->data;
    }
}

class BST {
    public $root = null;
    
    function insert($data) {
        $n = new Node($data, null, null);
        if ($this->root == null) {
            $this->root = $n;
        } else {
            $current = $this->root;
            $parent;
            while (true) {
                $parent = $current;
                if ($data < $current->data) {
                    $current = $current->left;
                    if ($current == null) {
                        $parent->left = $n;
                        break;
                    }
                } else {
                    $current = $current->right;
                    if ($current == null) {
                        $parent->right = $n;
                        break;
                    }
                }
            }
        }
    }

    function inOrder($node) {
        if (!($node == null)) {
            $this->inOrder($node->left);
            echo $node->show() . " ";
            $this->inOrder($node->right);
        }
    }

    function preOrder($node) {
        if (!($node == null)) {
            echo $node->show() . " ";
            $this->preOrder($node->left);
            $this->preOrder($node->right);
        }
    }

    function postOrder($node) {
        if (!($node == null)) {
            $this->postOrder($node->left);
            $this->postOrder($node->right);
            echo $node->show() . " ";
        }
    }

    function getMin() {
        $current = $this->root;
        while (!($current->left == null)) {
            $current = $current->left;
        }
        return $current->data;
    }

    function getMax() {
        $current = $this->root;
        while (!($current->right == null)) {
            $current = $current->right;
        }
        return $current->data;
    }

    function find($data) {
        $current = $this->root;
        while ($current != null) {
            if ($current->data == $data) {
                return $current;
            } else if ($data < $current->data) {
                $current = $current->left;
            } else {
                $current = $current->right;
            }
        }
        return null;
    }

    function remove($data) {
        $this->root = $this->removeNode($this->root, $data);
    }

    function removeNode($node, $data) {
        if ($node == null) {
            return null;
        }
        if ($data == $node->data) {
            if ($node->left == null && $node->right == null) {
                return null;
            }
            if ($node->left == null) {
                return $node->right;
            }
            if ($node->right == null) {
                return $node->left;
            }
            $tempNode = $this->getSmallest($node->right);
            $node->data = $tempNode->data;
            $node->right = $this->removeNode($node->right, $tempNode->data);
            return $node;
        } else if ($data < $node->data) {
            $node->left = $this->removeNode($node->left, $data);
            return $node;
        } else {
            $node->right = $this->removeNode($node->right, $data);
            return $node;
        }
    }

    function getSmallest($node) {
        while (!($node->left == null)) {
            $node = $node->left;
        }
        return $node;
    }

    function update($data) {
        $grade = $this->find($data);
        $grade->count++;
        return $grade;
    }
}

function prArray($arr) {
    var_dump($arr);
}

function genArray($length) {
    $arr = array();
    for ($i = 0; $i < $length; $i++) {
        $arr[] = rand(1, 100);
    }
    return $arr;
}

/*$nums = new BST();
$nums->insert(23);
$nums->insert(45);
$nums->insert(16);
$nums->insert(37);
$nums->insert(3);
$nums->insert(99);
$nums->insert(22);


 echo "Inorder traversal: ";
$nums->inOrder($nums->root);
echo "<br>Preorder traversal: ";
$nums->preOrder($nums->root);
echo "<br>Postorder traversal: ";
$nums->postOrder($nums->root);
echo "<br>Get min value: " . $nums->getMin();
echo "<br>Get max value: " . $nums->getMax();
$f = $nums->find(99);
var_dump($f);
$nums->remove(23);
var_dump($nums); */

$grades = genArray(100);
prArray($grades);
$gradedistro = new BST();
for ($i = 0; $i < count($grades); $i++) {
    $g = $grades[$i];
    $grade = $gradedistro->find($g);
    if ($grade == null) {
        $gradedistro->insert($g);
    } else {
        $gradedistro->update($g);
    }
}

var_dump($gradedistro->find(78));
var_dump($gradedistro->find(65));
var_dump($gradedistro->find(23));
var_dump($gradedistro->find(89));
var_dump($gradedistro->find(100));
var_dump($gradedistro);