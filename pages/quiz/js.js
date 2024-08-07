const questions = [
  {
    question:
      "A user has designed an interface for a binary tree abstract data type (ADT). Which method below requires knowledge of the purpose and organization of the binary tree in order to design an implementation?",
    options: ["A. find", "B. add", "C. contains", "D. isEmpty", "E. size"],
    answer: "B",
  },
  {
    question:
      "A tree in which every node can have at most n children is referred to as a __________________ tree.",
    options: ["A. binary", "B. ternary", "C. n-ary", "D. general", "E. graph"],
    answer: "C",
  },
  {
    question: "Which of the following best describes a balanced tree?",
    options: [
      "A. A balanced tree has all nodes at exactly the same level.",
      "B. A balanced tree has no nodes at exactly the same level.",
      "C. A balanced tree has half of the nodes at one level and half the nodes at another level.",
      "D. A balanced tree has all of the nodes within one level of each other.",
      "E. none of the above correctly describe a balanced tree.",
    ],
    answer: "D",
  },
  {
    question: "A full binary tree of height n has _________________ leaves.",
    options: ["A. 2n", "B. 3n", "C. 2^n", "D. 2^(n+1)", "E. 3^(n+1)"],
    answer: "A",
  },
  {
    question:
      "Which of the following tree traversals traverses the subtrees from left to right and then visits the root?",
    options: [
      "A. Preorder",
      "B. Inorder",
      "C. Postorder",
      "D. Level-order",
      "E. none of the above",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following traversals is not easily implemented recursively?",
    options: [
      "A. Preorder",
      "B. Inorder",
      "C. Postorder",
      "D. Level-order",
      "E. all of the above are easily implemented recursively",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following traversals is implemented using a queue as a supporting data structure?",
    options: [
      "A. Preorder",
      "B. Inorder",
      "C. Postorder",
      "D. Level-order",
      "E. none of the above are implemented using a queue",
    ],
    answer: "D",
  },
  {
    question:
      "One method of implementing a tree using an array involves storing the child of the element at the index n in the array at indexes ______________________________ .",
    options: [
      "A. n+1 and n+2",
      "B. 2n and 22n",
      "C. 2n+1 and 2n+2",
      "D. n-1 and n-2",
      "E. none of the above will work",
    ],
    answer: "C",
  },
  {
    question: "What property of the tree does its order specify?",
    options: [
      "A. maximum height",
      "B. maximum number of leaves",
      "C. maximum number of internal nodes",
      "D. maximum number of edges",
      "E. maximum number of children per node",
    ],
    answer: "E",
  },
  {
    question:
      "A balanced binary tree with m elements will have height ______________ .",
    options: [
      "A. 2m",
      "B. 2^m",
      "C. logm 2",
      "D. log2 m",
      "E. none of the above",
    ],
    answer: "D",
  },
  {
    question:
      "A _________________ can be used as the basis for an expert system.",
    options: [
      "A. queue",
      "B. stack",
      "C. ternary tree",
      "D. 4-ary tree",
      "E. decision tree",
    ],
    answer: "E",
  },
  {
    question:
      "Which of the following traversals visits the root before visiting the left and right subtrees?",
    options: [
      "A. Preorder",
      "B. Inorder",
      "C. Postorder",
      "D. Level-order",
      "E. none of the above",
    ],
    answer: "A",
  },
  {
    question:
      "The find method to locate an element in a binary tree can be implemented",
    options: [
      "A. iteratively",
      "B. recursively",
      "C. independently",
      "D. both A. and B. are correct",
      "E. all of A., B., and C. are correct",
    ],
    answer: "D",
  },
  {
    question: "Which of the following traversals never visits the root?",
    options: [
      "A. Preorder",
      "B. Inorder",
      "C. Postorder",
      "D. Level-order",
      "E. none of the above",
    ],
    answer: "E",
  },
  {
    question:
      "Which of the following traversals visits the nodes that are closer to the top of the tree before visiting those that are closer to the bottom?",
    options: [
      "A. Preorder",
      "B. Inorder",
      "C. Postorder",
      "D. Level-order",
      "E. none of the above",
    ],
    answer: "D",
  },
  {
    question:
      "In a tree, a node that does not have any children is called a leaf.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question: "The height of a tree and the depth of a tree are different.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "A binary tree is a tree in which any node can have at most two children.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "Since trees are nonlinear structures, it is impossible to implement them using an array.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "The methods in the Binary Tree ADT all return references to elements.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "There are four basic ways to traverse a tree, and they are all implemented recursively.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "A decision tree cannot be used as the basis for an expert system.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "In an inorder traversal, the elements of a tree are visited in order of their distance from the root.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "In a postorder traversal, the root is the last element visited in the tree.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "Recursive methods that work with binary trees are often implemented with a private support method.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "________ is the process of finding a designated target element within a group of items.",
    options: [
      "A. Sorting",
      "B. Searching",
      "C. Recursing",
      "D. Helping",
      "E. None of the above",
    ],
    answer: "B",
  },
  {
    question:
      "As the number of items in a search pool grows, the number of comparisons required to search _______________ .",
    options: [
      "A. increases",
      "B. decreases",
      "C. stays the same",
      "D. goes to 0",
      "E.none of the above",
    ],
    answer: "A",
  },
  {
    question:
      "A _______________ search is more efficient than a linear search.",

    options: [
      "A. binary",
      "B. selection",
      "C. insertion",
      "D. bubble",
      "E. none of the above",
    ],
    answer: "A",
  },
  {
    question: " In a binary search, _______________________________ .",

    options: [
      "A. it is assumed that all of the elements are integers",
      "B. it is assumed that all of the elements are Strings",
      "C. it is assumed that the search pool is small",
      "D. it is assumed that the search pool is ordered",
      "E. it is assumed that the search pool is large",
    ],
    answer: "D",
  },
  {
    question:
      "_____________________ is the process of arranging a group of items into a defined order.",
    options: [
      "A. Searching",
      "B. Sorting",
      "C. Selecting",
      "D. Helping",
      "E. none of the above",
    ],
    answer: "B",
  },
  {
    question: "Which of the following is not a sorting algorithm?",
    options: [
      "A. Bubble sort",
      "B. Quick sort",
      "C. Merge sort",
      "D. Selection sort",
      "E. all of the above are sorting algorithms",
    ],
    answer: "E",
  },
  {
    question: "Which data structures are used by a radix sort?",
    options: [
      "A. stacks",
      "B. queues",
      "C. heaps",
      "D. both A. and B. are correct",
      "E. A., B., and C. are all correct",
    ],
    answer: "B",
  },
  {
    question:
      "The ___________________ algorithm sorts values by repeatedly comparing neighboring elements in the list and swapping their position if they are not in order relative to each other.",
    options: [
      "A. insertion sort",
      "B. selection sort",
      "C. bubble sort",
      "D. quick sort",
      "E. merge sort",
    ],
    answer: "C",
  },
  {
    question:
      "The __________________ algorithm sorts a list of values by repetitively inserting a particular value into a subset of the list that has already been sorted.",
    options: [
      "A. insertion sort",
      "B. selection sort",
      "C. bubble sort",
      "D. quick sort",
      "E. merge sort",
    ],
    answer: "A",
  },
  {
    question:
      "The ___________________ is the number of possible values of the digits or characters in a sort key.",
    options: [
      "A. radix",
      "B. asymptote",
      "C. thread",
      "D. order",
      "E. none of the above",
    ],
    answer: "A",
  },
  {
    question:
      "________ can be used to sort the same set of objects in multiple ways",
    options: [
      "A. insertion sort",
      "B. selection sort",
      "C. bubble sort",
      "D. random sort",
      "E. Comparator objects",
    ],
    answer: "E",
  },
  {
    question: "In order to compare objects of a class in different ways,",
    options: [
      "A. the class must implement the Comparable interface",
      "B. the class must implement the Comparator interface",
      "C. the class must inherit from the Comparator class",
      "D. a separate class must be created that implements the Comparator interface and provides a body for the compare method",
      "E. None of these is correct.",
    ],
    answer: "D",
  },
  {
    question:
      "Suppose we have algorithms that solve a particular problem that have the following complexities. Which one is most efficient?",
    options: ["A. O(1)", "B. O(log2n)", "C. O(n2)", "D. O(n3)", "E. O(2n)"],
    answer: "A",
  },
  {
    question:
      "Which of the following algorithms has a worst case complexity of O(n log2n)?",
    options: [
      "A. insertion sort",
      "B. selection sort",
      "C. bubble sort",
      "D. merge sort",
      "E. none of the above",
    ],
    answer: "D",
  },
  {
    question:
      "In a radix sort, the radix is the number of elements to be sorted.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question: "The underlying data structure used in a radix sort is a stack.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "A linear search always requires more comparisons than a binary search.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "If there are more items in a search pool, then it will typically require more comparisons to find an item.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question: "Bubble sort is the most efficient searching algorithm.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "Quick sort works by separating a list into two lists, and recursively sorting the two lists using quick sort.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "The sort method of the Arrays class sorts the elements of an array by using a comparator.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "Implementing the Comparator interface requires writing a body for the compareTo method.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "With each comparison, a binary search eliminates approximately half of the items remaining in the search pool.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "The selection sort algorithm sorts a list of values by repeatedly putting a particular value into its final, sorted position.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question: "A method that calls itself is a __________________ method.",
    options: [
      "A. invalid",
      "B. static",
      "C. final",
      "D. recursive",
      "E. public",
    ],
    answer: "D",
  },
  {
    question:
      "____________________ recursion occurs when a method calls itself, while _________________ recursion occurs when a method calls another method that then calls the original method.",
    options: [
      "A. upward, downward",
      "B. downward, upward",
      "C. direct, indirect",
      "D. indirect, direct",
      "E. none of the above",
    ],
    answer: "C",
  },
  {
    question:
      "__________________ recursion results from the lack of a base case.",
    options: [
      "A. Indirect",
      "B. Direct",
      "C. Infinite",
      "D. Spiral",
      "E. none of the above",
    ],
    answer: "C",
  },
  {
    question:
      "The _______________________ puzzle is a favorite of computer scientists because of its elegant recursive solution.",
    options: [
      "A. Tower of Hanoi",
      "B. Sudoku",
      "C. Tetris",
      "D. Tic-Tac-Toe",
      "E. none of the above",
    ],
    answer: "A",
  },
  {
    question: "In the Towers of Hanoi puzzle, there are ________________ pegs.",
    options: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5",
      "E. The Towers of Hanoi puzzle can include any number of pegs",
    ],
    answer: "B",
  },
  {
    question:
      "In indirect recursion, how many method calls can occur between one call to a method and the next one that completes the indirect recursion?",
    options: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5",
      "E. There is no limit to the number of intervening calls between a method and its indirect recursive call.",
    ],
    answer: "E",
  },
  {
    question: "Which of the following statements is true?",
    options: [
      "A. Recursion should be used in every program.",
      "B. Recursion should be avoided all the time.",
      "C. Solutions that are easily expressed recursively should be programmed recursively.",
      "D. Solutions that are easily expressed recursively should be programmed iteratively.",
      "E. None of the above.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following will result from infinite recursion in Java?",
    options: [
      "A. The program will hang as though there is an infinite loop.",
      "B. The program will throw an ArrayOutOfBoundsException.",
      "C. The program will not compile.",
      "D. The program will run out of memory.",
      "E. none of the above.",
    ],
    answer: "D",
  },
  {
    question: "How many base cases must a recursive method have?",
    options: [
      "A. A recursive method does not have to have a base case.",
      "B. at least 1",
      "C. more than 1",
      "D. more than 2",
      "E. more than 3",
    ],
    answer: "B",
  },
  {
    question: "All recursive programs ____________________________________ .",
    options: [
      "A. are more difficult to read than iterative programs.",
      "B. can be implemented iteratively.",
      "C. are easier to read than iterative programs.",
      "D. are shorter than iterative programs.",
      "E. none of the above are true.",
    ],
    answer: "B",
  },
  {
    question:
      "The recursive solution of the Towers of Hanoi problem has _______________ complexity.",
    options: [
      "A. exponential",
      "B. polynomial",
      "C. logarithmic",
      "D. low",
      "E. none of the above",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following is a proper recursive definition of x raised to the y power?",
    options: [
      "A. x^y=x*x^(y-1)",
      "B. x^y=x*x^(y-2)",
      "C. x^y=x*x^(y-1) for y > 1; x^y = x for y = 1",
      "D. x^y=x*x^(y-1) for all x",
      "E. none of the above",
    ],
    answer: "C",
  },
  {
    question:
      "There is (are) ____________ base case(s) in the recursive solution to finding a path through a maze.",
    options: ["A. 0", "B. 1", "C. 2", "D. 3", "E. 4"],
    answer: "C",
  },
  {
    question:
      "A solution with exponential complexity is ____________________ .",
    options: [
      "A. efficient",
      "B. inefficient",
      "C. easy to implement",
      "D. difficult to implement",
      "E. none of the above",
    ],
    answer: "B",
  },
  {
    question:
      "In a recursive solution, _______________ is (are) always necessary.",
    options: [
      "A. short, efficient code",
      "B. several variables",
      "C. numerous lines of code",
      "D. a base case",
      "E. none of the above",
    ],
    answer: "D",
  },
  {
    question: "In Java, it is possible for a method to call itself.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question: "Some problems can only be solved recursively.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question: "All recursive methods must have a base case.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "A method that calls a different method, which then calls the original calling method, is a recursive method.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "Recursive solutions to problems should be used whenever possible.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "In the Towers of Hanoi puzzle, it is legal to move a larger disk to a peg that already contains a smaller disk.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question: "The Towers of Hanoi puzzle cannot be solved iteratively.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "Determining whether or not there is a path through a maze has a recursive solution.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "A program with infinite recursion will act similarly to a program with an infinite loop.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "Recursive solutions are always more efficient than iterative solutions.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question: "An iterator is",
    options: [
      "A. an element in a collection.",
      "B. an object that allows access to each element in a collection individually.",
      "C. an interface",
      "D. a loop control variable",
      "E. a five syllable word",
    ],
    answer: "B",
  },
  {
    question: "Which method below is not part of the Iterator interface?",
    options: [
      "A. add",
      "B. remove",
      "C. next",
      "D. hasNext",
      "E. all of these are methods in the Iterator interface.",
    ],
    answer: "A",
  },
  {
    question: "The only method in the Iterable interface is",
    options: [
      "A. create",
      "B. iterator",
      "C. destroy",
      "D. remove",
      "E. hasNext",
    ],
    answer: "B",
  },
  {
    question:
      "When writing a class for an array-based implementation of a list, the class that defines an iterator for the list should be",
    options: [
      "A. public",
      "B. iterable",
      "C. an interface",
      "D. an inner class",
      "E. none of the above",
    ],
    answer: "D",
  },
  {
    question:
      "A user defines a class to implement an iterator for a user-defined collection. When an iterator object is created, it needs to know",
    options: [
      "A. when it was created",
      "B. why it was created",
      "C. the number of elements in the collection",
      "D. the datatype of the elements in the collection",
      "E. none of the above",
    ],
    answer: "C",
  },
  {
    question:
      "Using the hasNext() and next() methods in a loop is the only way to retrieve all of the list elements using an iterator.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "A user may not be able to predict the order in which an iterator will return elements from a collection",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "‘Fail-fast’ means that a program will crash if a collection class supports the Iterable interface but no Iterator object is created.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "An iterator’s remove method requires the use of a for-each loop.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "When a user writes code to implement a collection class that implements the Iterable interface, they have to write code for the next and hasNext methods.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "When a user defines an Iterator class for a user-defined collection, the user must implement the methods in the Iterator interface in a way that detects if the collection is modified independent of the iterator object.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "A(n) _____________________ is a list collection has elements that are ordered by a characteristic of the elements.",
    options: [
      "A. ordered list",
      "B. unordered list",
      "C. indexed list",
      "D. linked list",
      "E. array",
    ],
    answer: "A",
  },
  {
    question:
      "A(n) _____________________ is a list collection has elements whose elements can be referenced using a numeric index.",
    options: [
      "A. ordered list",
      "B. unordered list",
      "C. indexed list",
      "D. linked list",
      "E. array",
    ],
    answer: "C",
  },
  {
    question: "Which operation below is not part of the List interface?",
    options: [
      "A. add an element to the list",
      "B. remove an element from the list",
      "C. replace an element in the list with another element",
      "D. get the size of the list",
      "E. grow the size of the list",
    ],
    answer: "E",
  },
  {
    question: "The List interface is implemented by the ________ class.",
    options: [
      "A. array",
      "B. ArrayList",
      "C. String",
      "D. Object",
      "E. Exception",
    ],
    answer: "B",
  },
  {
    question:
      "The List ADT (Abstract Data Type) provides how many operations to remove an element from a list?",
    options: ["A. 1", "B. 2", "C. 3", "D. 4", "E. more than 4"],
    answer: "C",
  },
  {
    question:
      "What is the nature of the methods that are added to the OrderedListADT and UnorderedListADT interfaces that extend the ListADT interface?",
    options: [
      "A. They are methods to add elements to the list",
      "B. They are methods to remove elements from the list",
      "C. They are methods to delete the list",
      "D. They add a method to determine the location of an element in the list",
      "E. They add a method to determine the size of the list",
    ],
    answer: "A",
  },
  {
    question: "A list collection can be implemented using either",
    options: [
      "A. a stack or a queue",
      "B. an Exception or an Error",
      "C. add or remove operations",
      "D. an array or a linked structure",
      "E. both C and D are correct",
    ],
    answer: "D",
  },
  {
    question: "The Serializable interface allows",
    options: [
      "A. Exceptions to be thrown from methods.",
      "B. objects to be read from and written to external files.",
      "C. Object class elements to be added to list collections.",
      "D. compiler warning messages to be suppressed.",
      "E. none of the above",
    ],
    answer: "B",
  },
  {
    question: "The remove operation returns",
    options: [
      "A. an int representing the number of elements remaining in the list after the removal.",
      "B. a boolean value indicating if the remove was successful or not.",
      "C. the element that was removed.",
      "D. a pointer to the list",
      "E. The remove operation does not return any of these.",
    ],
    answer: "C",
  },
  {
    question:
      "The find method, as used in the array-based implementation of the remove and contains operations, returns",
    options: [
      "A. the element that was found",
      "B. the index of the element that was found",
      "C. a true or false value indicating whether the element was found",
      "D. the element whose reference variable points to the element that was found",
      "E. none of the above",
    ],
    answer: "B",
  },
  {
    question: "The addAfter operation of an unordered list collection is",
    options: [
      "A. O(1)",
      "B. O(log n)",
      "C. O(n)",
      "D. O(n log n)",
      "E. a higher order than O(n log n)",
    ],
    answer: "C",
  },
  {
    question:
      "As with queues and stacks, the first step in removing an element from a list collection is to",
    options: [
      "A. determine that the collection is not empty.",
      "B. determine if the element is in the collection.",
      "C. determine if the element is in the first or the last position in the collection.",
      "D. determine if the collection will be empty once the element is removed.",
      "E. none of these is a reasonable first step in removing an element from a collection.",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following is a method in the java.util.List interface?",
    options: ["A. addBefore", "B. addAfter", "C. add", "D. shift", "E. resize"],
    answer: "C",
  },
  {
    question:
      "Which of the following is not a way to categorize list collections?",
    options: [
      "A. public",
      "B. ordered",
      "C. unordered",
      "D. indexed",
      "E. all of the above are ways to categorize list collections",
    ],
    answer: "A",
  },
  {
    question:
      "When adding elements to an ordered list, the elements are ordered according to",
    options: [
      "A. the order of the calls to the add operation to add them to the list.",
      "B. increasing size of storage to hold the element",
      "C. the key value of each element",
      "D. the address of the location in memory that holds the element.",
      "E. none of the above is used to determine the order of the elements in an ordered list.",
    ],
    answer: "C",
  },
  {
    question:
      "A linked list is a conceptual notion of organizing things in a linear list",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question: "The size of a list collection is unbounded",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question: "An array is an example of an indexed list",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "A user does not have any control over the order of the elements in an unordered list",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "The LinkedList class is an example of a class that implements the List interface.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "The contains method of the List ADT (Abstract Data Type) lets you know if a particular element is in a list.",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "The primary difference between the OrderedList ADT and the UnorderedList ADT is in how elements are removed from the list",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "Using a circular array for an array-based implementation of a list would improve the performance of the operation to remove an element from the middle of a list",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "The operation to remove an element from an array implementation of a list collection is O(n).",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question:
      "The remove operation returns a boolean value that indicates if the element to be removed was found in the list.",
    options: ["A. True", "B. False"],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a step in the divide and conquer technique?",
    options: ["A. Divide", "B. Combine", "C. Analyze", "D. Sort"],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a typical application of the divide and conquer technique?",
    options: [
      "A. Sorting algorithms",
      "B. Searching algorithms",
      "C. Graph traversal algorithms",
      "D. Matrix multiplication algorithms",
    ],
    answer: "C",
  },
  {
    question: "What does the 'merge' step involve in the merge sort algorithm?",
    options: [
      "A. Sorting the individual elements of the array.",
      "B. Dividing the array into smaller subarrays.",
      "C. Combining two sorted subarrays into a single sorted array.",
      "D. Repeatedly partitioning the array into smaller sections.",
    ],
    answer: "C",
  },
  {
    question:
      "Which notation is commonly used to represent the worst-case time complexity of an algorithm?",
    options: [
      "A. O(1)",
      "B. O(log n)",
      "C. O(n)",
      "D. O(n^2)",
      "E. All of the above",
    ],
    answer: "E",
  },
  {
    question:
      "The growth function O(log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Exponential"],
    answer: "B",
  },
  {
    question:
      "What is the main advantage of using the divide and conquer technique?",
    options: [
      "A. It guarantees a linear time complexity for all problems.",
      "B. It reduces the space complexity of algorithms.",
      "C. It allows for efficient parallelization of algorithms.",
      "D. It eliminates the need for recursion in algorithms.",
    ],
    answer: "C",
  },
  {
    question: "What is the time complexity of the binary search algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "B",
  },
  {
    question: "What is the time complexity of the merge sort algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question:
      "What does the 'conquer' step involve in the divide and conquer technique?",
    options: [
      "A. Breaking down the problem into smaller subproblems.",
      "B. Combining the solutions of the subproblems to obtain the final solution.",
      "C. Iteratively reducing the problem size until it can be solved directly.",
      "D. Analyzing the algorithm's complexity to determine the time and space requirements.",
    ],
    answer: "C",
  },
  {
    question: "Which of the following is an advantage of the greedy technique?",
    options: [
      "A. It always guarantees the optimal solution",
      "B. It is faster than dynamic programming for all types of problems",
      "C. It is easy to implement",
      "D. It can solve NP-hard problems efficiently",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is an example of a problem that can be solved using the greedy technique and dynamic programming?",
    options: [
      "A. Longest increasing subsequence",
      "B. Shortest path in a graph",
      "C. Matrix chain multiplication",
      "D. Sudoku solving",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following problems can be solved using the greedy technique?",
    options: [
      "A. Traveling Salesman Problem",
      "B. Knapsack Problem",
      "C. Longest Common Subsequence Problem",
      "D. Minimum Spanning Tree Problem",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a common approach to optimizing the space complexity in dynamic programming?",
    options: [
      "A. Using a bottom-up approach",
      "B. Using a top-down approach",
      "C. Using memorization",
      "D. Using tabulation",
    ],
    answer: "A",
  },
  {
    question:
      "Which problems cannot be solved optimally using the greedy technique?",
    options: [
      "A. Huffman coding",
      "B. Job sequencing with deadlines",
      "C. Activity selection problem",
      "D. Coin change problem",
    ],
    answer: "D",
  },
  {
    question:
      "Which technique is more suitable for solving problems that exhibit the greedy choice property?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can handle problems with the greedy choice property",
    ],
    answer: "A",
  },
  {
    question:
      "Which problems can be solved using the knapsack algorithm in dynamic programming?",
    options: [
      "A. Scheduling problem",
      "B. Bin packing problem",
      "C. 0/1 knapsack problem",
      "D. All of the above",
    ],
    answer: "C",
  },
  {
    question:
      "Which technique is more suitable for solving problems that involve finding the shortest or longest path in a graph?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable",
      "D. Neither technique is suitable for graph problems",
    ],
    answer: "B",
  },
  {
    question:
      "In dynamic programming, what does the principle of optimality state?",
    options: [
      "A. The optimal solution to a problem can be constructed from optimal solutions to its subproblems",
      "B. The optimal solution to a problem can be obtained by making locally optimal choices",
      "C. The optimal solution to a problem can be found using a divide-and-conquer approach",
      "D. The optimal solution to a problem can be derived using backtracking",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is more suitable for solving problems that involve making a sequence of choices?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable",
      "D. Neither technique is suitable for problems involving sequential choices",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following algorithms is an example of the greedy technique?",
    options: [
      "A. Dijkstra's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Floyd-Warshall algorithm",
      "D. Prim's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a disadvantage of dynamic programming?",
    options: [
      "A. It can only be applied to problems with overlapping subproblems",
      "B. It has a high-time complexity",
      "C. It requires extensive use of recursion",
      "D. It can have a high memory requirement for large problem instances",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a disadvantage of the greedy technique?",
    options: [
      "A. It isn't easy to implement",
      "B. It may not always find the optimal solution",
      "C. It requires a large amount of memory",
      "D. It has a high-time complexity",
    ],
    answer: "B",
  },
  {
    question:
      "In the greedy technique, which strategy involves making the choice that looks best now?",
    options: [
      "A. Divide and conquer",
      "B. Backtracking",
      "C. Dynamic programming",
      "D. Greedy choice property",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following algorithms uses the greedy technique to find the shortest path in a graph?",
    options: [
      "A. Kruskal's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Prim's algorithm",
      "D. Dijkstra's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is an application of the greedy technique?",
    options: [
      "A. Text compression",
      "B. Graph colouring",
      "C. DNA sequencing",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "Which data structure is commonly used to implement memoization in dynamic programming?",
    options: ["A. Stack", "B. Queue", "C. Hash table", "D. Linked list"],
    answer: "C",
  },
  {
    question:
      "Which dynamic programming technique involves filling up a table of values bottom-up?",
    options: [
      "A. Memoization",
      "B. Tabulation",
      "C. Recursion",
      "D. Iteration",
    ],
    answer: "B",
  },
  {
    question:
      "Which technique is more suitable for solving optimization problems, such as finding the maximum or minimum value?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can solve optimization problems",
    ],
    answer: "B",
  },
  {
    question:
      "Which technique is more suitable for solving problems with overlapping subproblems?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can handle overlapping subproblems",
    ],
    answer: "B",
  },
  {
    question:
      "What is the critical difference between the greedy technique and dynamic programming?",
    options: [
      "A. Greedy technique uses a top-down approach, while dynamic programming uses a bottom-up approach",
      "B. Greedy technique solves problems recursively, while dynamic programming solves them iteratively",
      "C. The greedy technique finds the optimal solution at each step, while dynamic programming stores and reuses solutions to subproblems",
      "D. Greedy technique is faster than dynamic programming for all types of problems",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is not a characteristic of the greedy technique?",
    options: [
      "A. It makes locally optimal choices",
      "B. It guarantees a globally optimal solution",
      "C. It does not require backtracking",
      "D. It can be applied to any problem",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is necessary for a problem to be solved using dynamic programming?",
    options: [
      "A. Optimal substructure",
      "B. Additive subproblems",
      "C. Greedy choice of property",
      "D. Recursive subproblems",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following problems can be efficiently solved using dynamic programming?",
    options: [
      "A. Traveling Salesman Problem",
      "B. Knapsack Problem",
      "C. Longest Common Subsequence Problem",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is a necessary condition for a problem to be solved using the greedy technique?",
    options: [
      "A. Optimal substructure",
      "B. Overlapping subproblems",
      "C. Additive subproblems",
      "D. Recursive subproblems",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is generally faster in terms of runtime complexity?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same runtime complexity.",
      "D. The runtime complexity depends on the specific problem",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is more likely to find the optimal solution in a reasonable amount of time?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same likelihood of finding the optimal solution",
      "D. The likelihood of finding the optimal solution depends on the specific problem",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary disadvantage of using brute force in algorithm design?",
    options: [
      "A. It requires extensive knowledge of advanced data structures",
      "B. It is inefficient and can be computationally expensive",
      "C. It is difficult to implement and prone to errors",
      "D. It is only applicable to small-scale problems",
    ],
    answer: "B",
  },
  {
    question:
      "Which data structure is commonly used in brute force algorithms?",
    options: ["A. Linked lists", "B. Trees", "C. Hash tables", "D. Arrays"],
    answer: "D",
  },
  {
    question:
      "What is the main drawback of using brute force for problem-solving?",
    options: [
      "A. It lacks generality and cannot be applied to various problem domains",
      "B. It requires advanced knowledge of mathematical formulas",
      "C. It is highly susceptible to errors and mistakes in implementation",
      "D. It often leads to exponential time complexity",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is an example of a problem that can be solved using brute force?",
    options: [
      "A. Minimum Spanning Tree",
      "B. Knapsack Problem",
      "C. Dijkstra's algorithm",
      "D. Topological sorting",
    ],
    answer: "B",
  },
  {
    question: "How does an exhaustive search differ from a greedy algorithm?",
    options: [
      "A. Exhaustive search explores all possible solutions, while greedy algorithms make locally optimal choices.",
      "B. Exhaustive search requires fewer computational resources than greedy algorithms.",
      "C. Greedy algorithms guarantee to find the optimal solution, while exhaustive search does not.",
      "D. Greedy algorithms only apply to small-scale problems, while exhaustive searches can handle more significant issues.",
    ],
    answer: "A",
  },
  {
    question: "What is the time complexity of a brute force algorithm?",
    options: ["A. O(n log n)", "B. O(n^2)", "C. O(log n)", "D. O(1)"],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a characteristic of brute force algorithms?",
    options: [
      "A. They explore all possible solutions.",
      "B. They are based on exhaustive searches.",
      "C. They often involve trying every possible option.",
      "D. They are always the most efficient approach.",
    ],
    answer: "D",
  },
  {
    question:
      "What is the main difference between brute force and greedy algorithms?",
    options: [
      "A. Brute force algorithms always guarantee to find the optimal solution.",
      "B. Greedy algorithms are more efficient than brute-force algorithms.",
      "C. Brute force algorithms explore all possible solutions, while greedy algorithms make locally optimal choices.",
      "D. Greedy algorithms are only applicable to small-scale problems.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary advantage of using exhaustive search over other algorithms?",
    options: [
      "A. It always finds the optimal solution.",
      "B. It requires fewer computational resources.",
      "C. It guarantees faster execution time.",
      "D. It is more straightforward to implement.",
    ],
    answer: "A",
  },
  {
    question:
      "Given the array 12 43 67 56 20 and a key of 43, how many comparisons will be done in binary search?",
    options: ["A. 1", "B. 3", "C. 2", "D. 4"],
    answer: "C",
  },
  {
    question:
      "Which special pointer indicates the absence of a node's successor?",
    options: ["A. null", "B. void", "C. dangling", "D. wild"],
    answer: "A",
  },
  {
    question:
      "What is the output of the following code? int x = 5; System.out.println(x++);",
    options: ["A. 4", "B. 5", "C. 6", "D. Error"],
    answer: "B",
  },
  {
    question: "Which keyword is used to define a constant variable in Java?",
    options: ["A. final", "B. static", "C. const", "D. constant"],
    answer: "A",
  },
  {
    question:
      "What is the default value assigned to an uninitialized variable of type int in Java?",
    options: ["A. 0", "B. 1", "C. -1", "D. null"],
    answer: "A",
  },
  {
    question:
      "Algorithms that require an exponential number of operations are practical for solving only problems of tiny size.",
    options: ["A. true", "B. false"],
    answer: "A",
  },
  {
    question:
      "What is the access modifier for a public member variable in a class?",
    options: ["A. public", "B. private", "C. protected", "D. default"],
    answer: "A",
  },
  {
    question: "A graph with numbers assigned to its edges is called ______",
    options: [
      "A. weighted graph",
      "B. directed graph",
      "C. path graph",
      "D. numbered graph",
    ],
    answer: "A",
  },
  {
    question: "Big O is associated with _________",
    options: [
      "A. best case and upper bound",
      "B. average case and upper bound",
      "C. worst case and upper bound",
      "D. lower bound and worst case",
    ],
    answer: "C",
  },
  {
    question: "Which of the following is not a primitive data type in Java?",
    options: ["A. int", "B. boolean", "C. string", "D. double"],
    answer: "C",
  },
  {
    question:
      "Given the array 12 45 67 56 20 and a key of 45, how many comparisons will be made in binary search?",
    options: ["A. 1", "B. 3", "C. 2", "D. 4"],
    answer: "C",
  },
  {
    question:
      "Given that C(n) = 0.5n(n-1), how much longer will an algorithm run if we triple the input size?",
    options: ["A. 9", "B. 12", "C. 6", "D. 4"],
    answer: "A",
  },
  {
    question:
      "What is the output of the following code? String name = 'John'; System.out.println(name.length());",
    options: ["A. 3", "B. 4", "C. 5", "D. Error"],
    answer: "B",
  },
  {
    question: "Which keyword is used to create an object in Java?",
    options: ["A. class", "B. new", "C. object", "D. create"],
    answer: "B",
  },
  {
    question:
      "Given the array 12 45 26 18 65 20, how many comparisons will be done using linear search with a key of 20?",
    options: ["A. 1", "B. 2", "C. 6", "D. 4"],
    answer: "C",
  },
  {
    question: "Which traversal order does the depth-first search follow?",
    options: [
      "A. Breadth-first",
      "B. Level-order",
      "C. Last-in, first-out",
      "D. First-in, first-out",
    ],
    answer: "C",
  },
  {
    question:
      "In the tower of Hanoi problem, two or more discs can be moved at a time.",
    options: ["A. true", "B. false"],
    answer: "B",
  },
  {
    question: "What is the first number in the Fibonacci sequence?",
    options: ["A. 0", "B. 1", "C. 2", "D. -1"],
    answer: "A",
  },
  {
    question:
      "A mixture of natural language and programming language-like constructs is called _____",
    options: [
      "A. code proper",
      "B. pseudocode",
      "C. program",
      "D. domain-specific language",
    ],
    answer: "B",
  },
  {
    question:
      "The time complexity of a divide and conquer algorithm can be expressed using the following:",
    options: [
      "A. Big O notation",
      "B. Theta notation",
      "C. Omega notation",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to solve the maximum subarray sum problem efficiently in O(n) time?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Kadane's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to solve the maximum subarray sum problem efficiently in O(n log n) time?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Divide and Conquer algorithm",
    ],
    answer: "D",
  },
  {
    question: "What is the time complexity of the binary search algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "B",
  },
  {
    question: "In the divide and conquer technique, what is the base case?",
    options: [
      "A. The simplest form of the problem can be solved directly.",
      "B. The largest subproblem that can be divided further.",
      "C. The step where the solutions of the subproblems are combined.",
      "D. The analysis of the time and space complexity of the algorithm.",
    ],
    answer: "A",
  },
  {
    question:
      "What does the 'conquer' step involve in the divide and conquer technique?",
    options: [
      "A. Breaking down the problem into smaller subproblems.",
      "B. Combining the solutions of the subproblems to obtain the final solution.",
      "C. Iteratively reducing the problem size until it can be solved directly.",
      "D. Analyzing the algorithm's complexity to determine the time and space requirements.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following growth functions represents exponential time complexity?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(2^n)"],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a typical application of the divide and conquer technique?",
    options: [
      "A. Sorting algorithms",
      "B. Searching algorithms",
      "C. Graph traversal algorithms",
      "D. Matrix multiplication algorithms",
    ],
    answer: "C",
  },
  {
    question:
      "The growth function O(n^2) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Exponential"],
    answer: "C",
  },
  {
    question: "What is the worst-case time complexity of binary search?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "B",
  },
  {
    question:
      "The growth function O(log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Exponential"],
    answer: "B",
  },
  {
    question:
      "Which algorithm uses divide and conquer to find the kth smallest element in an unsorted array?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Selection algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to multiply polynomials efficiently?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Karatsuba algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a step in the divide and conquer technique?",
    options: ["A. Divide", "B. Combine", "C. Analyze", "D. Sort"],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses a divide-and-conquer approach to find the closest pair of points in a plane?",
    options: [
      "A. Depth-First Search (DFS)",
      "B. Breadth-First Search (BFS)",
      "C. Dijkstra's algorithm",
      "D. Closest Pair algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "What is the main advantage of using the divide and conquer technique?",
    options: [
      "A. It guarantees a linear time complexity for all problems.",
      "B. It reduces the space complexity of algorithms.",
      "C. It allows for efficient parallelization of algorithms.",
      "D. It eliminates the need for recursion in algorithms.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is NOT a step in the divide and conquer technique?",
    options: ["A. Combine", "B. Analyze", "C. Divide", "D. Search"],
    answer: "D",
  },
  {
    question:
      "The growth function O(n!) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Factorial", "D. Exponential"],
    answer: "C",
  },
  {
    question:
      "Which algorithm uses the divide and conquer technique to solve the matrix multiplication problem?",
    options: [
      "A. Prim's algorithm",
      "B. Kruskal's algorithm",
      "C. Strassen's algorithm",
      "D. Floyd-Warshall algorithm",
    ],
    answer: "C",
  },
  {
    question:
      "What is the time complexity of the quicksort algorithm in the average case?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question: "What does the 'merge' step involve in the merge sort algorithm?",
    options: [
      "A. Sorting the individual elements of the array.",
      "B. Dividing the array into smaller subarrays.",
      "C. Combining two sorted subarrays into a single sorted array.",
      "D. Repeatedly partitioning the array into smaller sections.",
    ],
    answer: "C",
  },
  {
    question:
      "Which algorithms use divide and conquer to find the maximum subarray sum?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Kadane's algorithm",
    ],
    answer: "D",
  },
  {
    question: "Which of the following best describes a growth function?",
    options: [
      "A. An algorithm that solves a problem using a divide-and-conquer approach.",
      "B. A mathematical function that describes the resource usage of an algorithm as the input size increases.",
      "C. A technique for optimizing data structures to minimize memory consumption.",
      "D. A measure of the complexity of an algorithm based on the number of operations it performs.",
    ],
    answer: "B",
  },
  {
    question:
      "Which data structure is commonly used to implement the divide and conquer technique?",
    options: ["A. Arrays", "B. Linked lists", "C. Stacks", "D. Trees"],
    answer: "D",
  },
  {
    question: "In divide and conquer, what does the 'divide' step involve?",
    options: [
      "A. Breaking down the problem into smaller subproblems.",
      "B. Combining the solutions of the subproblems to obtain the final solution.",
      "C. Iteratively reducing the problem size until it can be solved directly.",
      "D. Analyzing the algorithm's complexity to determine the time and space requirements.",
    ],
    answer: "A",
  },
  {
    question:
      "Which notation is commonly used to represent the worst-case time complexity of an algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n^2)"],
    answer:
      "All options (A, B, C, D) are commonly used to represent worst-case time complexity, depending on the algorithm.",
  },
  {
    question:
      "What is the time complexity of the mergesort algorithm in the worst case?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a characteristic of divide and conquer algorithms?",
    options: [
      "A. They can often be parallelized.",
      "B. They usually have a recursive structure.",
      "C. They always have a time complexity of O(n log n).",
      "D. They involve breaking down a problem into smaller subproblems.",
    ],
    answer: "C",
  },
  {
    question:
      "The growth function O(n log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Superlinear"],
    answer: "D",
  },
  {
    question:
      "Which technique is more likely to find the optimal solution in a reasonable amount of time?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same likelihood of finding the optimal solution",
      "D. The likelihood of finding the optimal solution depends on the specific problem",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following algorithms uses the greedy technique to find the shortest path in a graph?",
    options: [
      "A. Kruskal's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Prim's algorithm",
      "D. Dijkstra's algorithm",
    ],
    answer: "D",
  },
  {
    question:
      "Which dynamic programming technique involves filling up a table of values bottom-up?",
    options: [
      "A. Memoization",
      "B. Tabulation",
      "C. Recursion",
      "D. Iteration",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is an application of the greedy technique?",
    options: [
      "A. Text compression",
      "B. Graph colouring",
      "C. DNA sequencing",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question:
      "In dynamic programming, which technique can be used to avoid redundant computations?",
    options: [
      "A. Backtracking",
      "B. Memoization",
      "C. Greedy choice of property",
      "D. Depth-first search",
    ],
    answer: "B",
  },
  {
    question:
      "Which technique is more suitable for solving problems with overlapping subproblems?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques are equally suitable.",
      "D. Neither technique can handle overlapping subproblems",
    ],
    answer: "B",
  },
  {
    question:
      "Which problems can be solved using the knapsack algorithm in dynamic programming?",
    options: [
      "A. Scheduling problem",
      "B. Bin packing problem",
      "C. 0/1 knapsack problem",
      "D. All of the above",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is a common approach to optimizing the space complexity in dynamic programming?",
    options: [
      "A. Using a bottom-up approach",
      "B. Using a top-down approach",
      "C. Using memorization",
      "D. Using tabulation",
    ],
    answer: "A",
  },
  {
    question:
      "The growth function O(n log n) represents which type of time complexity?",
    options: ["A. Linear", "B. Logarithmic", "C. Quadratic", "D. Superlinear"],
    answer: "D",
  },
  {
    question: "What is the time complexity of the merge sort algorithm?",
    options: ["A. O(1)", "B. O(log n)", "C. O(n)", "D. O(n log n)"],
    answer: "D",
  },
  {
    question:
      "Which algorithm uses divide and conquer to calculate the power of a number efficiently?",
    options: [
      "A. QuickSort",
      "B. MergeSort",
      "C. Binary Search",
      "D. Exponentiation by squaring",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following problems can be solved using the greedy technique?",
    options: [
      "A. Traveling Salesman Problem",
      "B. Knapsack Problem",
      "C. Longest Common Subsequence Problem",
      "D. Minimum Spanning Tree Problem",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following algorithms is an example of the greedy technique?",
    options: [
      "A. Dijkstra's algorithm",
      "B. Bellman-Ford algorithm",
      "C. Floyd-Warshall algorithm",
      "D. Prim's algorithm",
    ],
    answer: "A",
  },
  {
    question:
      "Which technique is more likely to find the optimal solution in a reasonable amount of time?",
    options: [
      "A. Greedy technique",
      "B. Dynamic programming",
      "C. Both techniques have the same likelihood of finding the optimal solution",
      "D. The likelihood of finding the optimal solution depends on the specific problem",
    ],
    answer: "B",
  },
];
