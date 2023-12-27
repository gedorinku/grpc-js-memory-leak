import { credentials } from "grpc";
import { BookServiceClient } from "./__generated__/proto/books_grpc_pb";
import { Book, GetBookRequest } from "./__generated__/proto/books_pb";

async function call() {
  return new Promise<Book | null>((resolve, reject) => {
    const client = new BookServiceClient('localhost:50051', credentials.createInsecure());
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

// https://zenn.dev/sora_kumo/articles/539d7f6e7f3c63
const Parallels = <T>(ps = new Set<Promise<T>>()) => ({
  add: (p: Promise<T>) => ps.add(!!p.then(() => ps.delete(p)).catch(() => ps.delete(p)) && p),
  wait: (limit: number) => ps.size >= limit && Promise.race(ps),
  all: () => Promise.all(ps),
});

async function callMany() {
  const ps = Parallels<Book | null>();

  let count = 0;

  while(true) {
    if (!await ps.wait(50)) {
      ps.add(call());
      count++;
    }

    if (count % 10000 === 0) {
      console.log(count);
    }
  }
}

callMany().then(() => {
  console.log("done");
});
