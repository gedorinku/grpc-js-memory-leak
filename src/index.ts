import { credentials } from "@grpc/grpc-js";
import { BookServiceClient } from "./__generated__/proto/books_grpc_pb";
import { Book, GetBookRequest } from "./__generated__/proto/books_pb";

async function call() {
  return new Promise<Book | null>((resolve, reject) => {
    const client = new BookServiceClient(
      "localhost:50051",
      credentials.createInsecure()
    );
    client.getBook(new GetBookRequest().setId(123), (err, resp) => {
      if (err) {
        console.error(err);
        resolve(null);
      } else {
        resolve(resp);
      }
    });
  });
}

async function callMany() {
  let count = 0;

  while (true) {
    const ps = [...Array(50)].map(() => call());
    count += ps.length;

    await Promise.all(ps);

    if (count % 10000 === 0) {
      console.log(count);
    }
  }
}

callMany().then(() => {});
