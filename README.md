# Caesar Cipher – JavaScript Implementation

This repository contains a clean and robust implementation of the classic Caesar Cipher algorithm.
The solution supports uppercase/lowercase letters, preserves non-alphabetic characters, and correctly handles both positive and negative shifts through modular arithmetic.

## ✨ Features

Works with A–Z and a–z

Preserves punctuation, spaces, and symbols

Handles negative and large shifts using modulo

Case is preserved after transformation

Linear time complexity O(n)

Readable, interview-friendly functional structure

## 🚀 Usage
cifrarCesar("Hello, World!", 3);
// "Khoor, Zruog!"

cifrarCesar("Khoor, Zruog!", -3);
// "Hello, World!"

## 📁 Project Structure

cifrarCesar.js – main implementation

Utility functions for:

character indexing

shift normalization

case preservation

## 🧠 Algorithmic Notes

The cipher processes each character exactly once, giving it O(n) time complexity and O(1) extra space.
Modulo arithmetic ensures correct wrap-around within the alphabet.

## 📜 What is the Caesar Cipher?

The Caesar Cipher is one of the oldest known encryption techniques. Each letter in the plaintext is shifted by a fixed number of positions in the alphabet.

Example with shift = 3:
A → D
B → E
C → F
…

## 🔧 Running the Code

You can run the file with Node.js:

node cifrarCesar.js


No external dependencies are required.

## 📄 License

MIT License.
