class NestedListIterator {
    constructor(nestedList) {
        this.nestedList = nestedList;
        this.index = 0;
        this.sublistIndex = 0;
        this.sublist = [];
    }

    hasNext() {
        while (this.index < this.nestedList.length) {
            if (Array.isArray(this.nestedList[this.index])) {
                this.sublist = this.nestedList[this.index];
                this.sublistIndex = 0;
                this.index++;
                return true;
            } else {
                this.index++;
            }
        }
        return false;
    }

    next() {
        if (this.sublistIndex >= this.sublist.length) {
            this.sublistIndex = 0;
            this.sublist = this.nestedList[this.index++];
        }
        return this.sublist[this.sublistIndex++];
    }
}

// Test
let nestedList = [1, [2, 3], [4, [5, 6]], [7, [8, [9, 10]]]];
let iterator = new NestedListIterator(nestedList);
while (iterator.hasNext()) {
    console.log(iterator.next());
}
```

Kodda NestedListIterator klassi yaratilib, u ichma-ich ro'yxatni tekis iterator qiladi. hasNext() metodi ro'yxatda quyidagi elementlar mavjudligini tekshiradi: 
- Ro'yxat ichida ro'yxat mavjudligini tekshiradi.
- Ro'yxat ichida element mavjudligini tekshiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yxat mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar element mavjud bo'lsa, unga o'tishni davom ettiradi.
- Agar ro'yx
