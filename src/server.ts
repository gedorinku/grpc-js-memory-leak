import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData } from 'grpc';
import { BookServiceService } from './__generated__/proto/books_grpc_pb';
import { Book, GetBookRequest } from './__generated__/proto/books_pb';

let server = new Server();
server.addService(BookServiceService, {
  getBook(call: ServerUnaryCall<GetBookRequest>, callback: sendUnaryData<Book>) {
    const book = new Book().setId(123).setTitle("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    callback(null, book);
  }
});
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
  console.log("0.0.0.0:50051");
  server.start();
});
