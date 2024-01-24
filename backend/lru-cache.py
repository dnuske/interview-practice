# results from leetcode:
#
# Runtime 2004 ms Beats 7.09% of users with Python3
#
# Memory 76.88 MB Beats 98.92% of users with Python3



class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.usedKeys = []

    def get(self, key: int) -> int:
        # if key in self.cache:
        if key not in self.cache:
            return -1
        if self.usedKeys and self.usedKeys[-1] != key:
            self.usedKeys.remove(key)
            self.usedKeys.append(key)

        return self.cache[key]

    def put(self, key: int, value: int) -> None:

        if key not in self.cache:
            self.cache[key] = value
            self.usedKeys.append(key)

        elif key in self.cache:
            self.cache[key] = value
            if self.usedKeys[-1] != key:
                self.usedKeys.remove(key)
                self.usedKeys.append(key)

        # if the cache exceeds the capacity, remove the least used item
        if len(self.usedKeys) > self.capacity:
            tmpKey = self.usedKeys[0]
            self.usedKeys = self.usedKeys[1:]
            del self.cache[tmpKey]

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

