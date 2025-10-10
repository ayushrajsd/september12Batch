// function fahToCel(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function celToFah(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// function convertTemperature(temp, unit) {
//   // "C" "F" ""
//   // Write code here  // === cpmpares value and type     == compares value
//   if (unit === "C") {
//     return celToFah(temp) + "F";
//   } else if (unit === "F") {
//     return `${fahToCel(temp)} + C`;
//   } else {
//     return "Invalid unit, please enter C or F as unit";
//   }
// }

// console.log(convertTemperature(100, "C")); // -> 212 F

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed; // false
// }

// function categorizeStudents(studentList) {
//   // loop opver array
//   //   for(let i = 0; i < studentList.length; i++){

//   //   }
//   const categories = { A: [], B: [], C: [] }; // categories : xa134

//   for (let student of studentList) {
//     if (student.score >= 90) {
//       categories.A.push(student.name);
//     } else if (student.score >= 75) {
//       categories.B.push(student.name);
//     } else {
//       categories.C.push(student.name);
//     }
//   }
//   return categories;
// }
// const data = [
//   { name: "Alice", score: 92 },
//   { name: "Bob", score: 98 },
//   { name: "Charlie", score: 80 },
//   { name: "David", score: 70 },
//   { name: "Gina", score: 60 },
// ];

// function categoriseGrade(data) {
//     let grade;
//     for (let i = 0; i < data.length; i++) {
//     if (data[i].score > 90) {
//     data[i].grade = "A";
//     } else if (data[i].score > 75 && data[i].score < 90) {
//     data[i].grade = "B";
//     } else if (data[i].score > 60 && data[i].score < 75) {
//     data[i].grade = "C";
//     } else {
//     data[i].grade = "D";
//     }
//     }
//     return data;
//     } console.log(categoriseGrade(data));

// const data = [
//   { name: "Alice", score: 92 },
//   { name: "Bob", score: 80 },
//   { name: "Charlie", score: 60 },
// ];
// console.log(categorizeStudents(data));

const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book12", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book31", author: "Author3", isAvailable: true },
  { title: "Book32", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: false },
  { title: "Book5", author: "Author5", isAvailable: true },
];

function listBooks() {
  // list all books one by one as Book Name by Author is Available / Borrowed
  for (let book of books) {
    let status;
    // if(book.isAvailable){
    //     status= "Available"
    // }else{
    //     status = "Borrowed"
    // }
    console.log(
      `${book.title} by ${book.author} is ${
        book.isAvailable ? "Available" : "Borrowed"
      }`
    );
  }
}

function markAsBorrowed(title) {
  // for(let i = 0; i < books.length;i++){
  //     let book = books[i]
  // }
  for (let book of books) {
    if (book.title === title) {
      if (book.isAvailable) {
        book.isAvailable = false;
        return `${title} is now issues`;
      } else {
        return `${title} is already borrowed`;
      }
    }
  }
  return "Book not found";
}

function returnBook(title) {
  for (let book of books) {
    if (book.title === title) {
      book.isAvailable = true;
      return `${title} has been returned`;
    }
  }
  return "Boo not found";
}

listBooks(books);
console.log(returnBook("Book4")); //

function listBooksByAuthor(authorName) {
  const results = [];
  for (let book of books) {
    if (book.author === authorName) {
      results.push(book);
    }
  }
  return results;
}

function secretMessage(secret) {
  return function () {
    return secret;
  };
}

const secret = secretMessage("Hidden Code");
console.log(secret()); // Hidden code

function greet() {
  return "Hello";
}

function limitCalls(fn, n) {
  let count = 0;
  return function () {
    if (count < n) {
      count++; //  0 -> 1 -> 2
      return fn(); //  "hello" call the original function
    } else {
      return "No More calls allowed";
    }
  };
}

const limitedGreet = limitCalls(greet, 2); // inner functon

console.log(limitedGreet()); // "Hello"
console.log(limitedGreet()); // "Hello"
console.log(limitedGreet()); // No more calls allowed
console.log(limitedGreet()); // No More
