const { LinkedList } = require("./LinkedList")

test('Creates a linkedList', () => {
    const linkedList = new LinkedList(5);
    expect(linkedList.length).toBe(1);
    expect(linkedList.head).toEqual({value: 5, next: null});
    expect(linkedList.tail).toEqual({value: 5, next: null});
})

test('Push items to linked list', () => {
    const linkedList = new LinkedList(5);
    linkedList.push(10);
    expect(linkedList.length).toBe(2);
    expect(linkedList.head).toEqual({ value: 5, next: { value: 10, next: null}});

    linkedList.push(15);
    expect(linkedList.length).toBe(3);
})

test('Pop elements', () => {
    const linkedList = new LinkedList(5);
    linkedList.push(10);
    linkedList.push(15);

    expect(linkedList.pop()).toEqual({ value: 15, next: null });

    expect(linkedList.length).toBe(2);
    expect(linkedList.head).toEqual({ value: 5, next: { value: 10, next: null }});
    expect(linkedList.tail).toEqual({ value: 10, next:  null });
    
    linkedList.pop();
    linkedList.pop();
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);

    expect(linkedList.pop()).toBe(undefined);
    expect(linkedList.length).toBe(0);
})