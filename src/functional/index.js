// IMMER lib use
import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}
let updatedBook = publish(book);

console.log(book, updatedBook);
