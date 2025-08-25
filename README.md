# 🚀 JavaScript Problem Set

This repository contains solutions to **4 coding problems** implemented in **JavaScript**.  

---

## 📌 Problems

### **Problem 1: Calculator**
Create a small calculator which performs:
- Addition
- Subtraction
- Multiplication
- Division  

**Inputs:**  
- `a` → number (double)  
- `b` → number (double)  
- `operation` → string (`"add"`, `"sub"`, `"mul"`, `"div"`)  

Implemented using **conditional statements**.

---

### **Problem 2: Odd Number Series**
With a single integer as input, generate a series of odd numbers until `a = x`.

**Examples:**
- Input: `1` → Output: `1`  
- Input: `3` → Output: `1, 3, 5`  
- Input: `4` → Output: `1, 3, 5, 7`

---

### **Problem 3: Modified Odd Number Series**
- If input `a` is **odd** → generate first `a` odd numbers  
- If input `a` is **even** → generate first `a-1` odd numbers  

**Examples:**
- Input: `2` → Output: `1`  
- Input: `3` → Output: `1, 3, 5`  
- Input: `4` → Output: `1, 3, 5`  
- Input: `5` → Output: `1, 3, 5, 7, 9`

---

### **Problem 4: Count Multiples in Array**
Given an array of integers, count how many numbers are multiples of `[1,2,3,4,5,6,7,8,9]`.

**Example:**
```js
Input:  [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
