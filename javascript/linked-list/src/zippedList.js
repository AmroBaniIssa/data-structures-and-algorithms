const LinkedList = require('./LinkedList');

function zipLists(list1, list2) {
  const zippedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  let toggle = true;

  while (current1 !== null && current2 !== null) {
    if (toggle) {
      zippedList.append(current1.value);
      current1 = current1.next;
    } else {
      zippedList.append(current2.value);
      current2 = current2.next;
    }
    toggle = !toggle;
  }

  // Append the remaining nodes of list1, if any
  while (current1 !== null) {
    zippedList.append(current1.value);
    current1 = current1.next;
  }

  // Append the remaining nodes of list2, if any
  while (current2 !== null) {
    zippedList.append(current2.value);
    current2 = current2.next;
  }

  return zippedList;
}
