// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_books_pb = require('../proto/books_pb.js');

function serialize_sample_books_Book(arg) {
  if (!(arg instanceof proto_books_pb.Book)) {
    throw new Error('Expected argument of type sample.books.Book');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sample_books_Book(buffer_arg) {
  return proto_books_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sample_books_GetBookRequest(arg) {
  if (!(arg instanceof proto_books_pb.GetBookRequest)) {
    throw new Error('Expected argument of type sample.books.GetBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sample_books_GetBookRequest(buffer_arg) {
  return proto_books_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBook: {
    path: '/sample.books.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: proto_books_pb.GetBookRequest,
    responseType: proto_books_pb.Book,
    requestSerialize: serialize_sample_books_GetBookRequest,
    requestDeserialize: deserialize_sample_books_GetBookRequest,
    responseSerialize: serialize_sample_books_Book,
    responseDeserialize: deserialize_sample_books_Book,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
