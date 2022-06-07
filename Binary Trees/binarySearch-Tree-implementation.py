# main node class
class Node(object):
    def __init__(self, data):
        self.leftChild = None
        self.data = data
        self.righChidl = None


class BinarySearchTree(object):
    def __init__(self):
        self.root = None

    def insert(self, data):
        if not self.root:
            self.root = Node(data)
        else:
            self.inserNode(data, self.root)

    # inserting node function
    def insertNode(self, data, node):
         if data < node.data:
             if node.leftChild:
                #  if it's not null
                 self.inserNode(self, data, leftChild)
             else:
                node.leftChild = Node (data)
         else:
            if node.righChild:
                self.inserNode(self, data, righChild)
            else:
                node.righChild = Node(data)
                
         
        
        