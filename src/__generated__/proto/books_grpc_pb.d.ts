// package: sample.books
// file: proto/books.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_books_pb from "../proto/books_pb";

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBook: IBookServiceService_IGetBook;
}

interface IBookServiceService_IGetBook extends grpc.MethodDefinition<proto_books_pb.GetBookRequest, proto_books_pb.Book> {
    path: "/sample.books.BookService/GetBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_books_pb.GetBookRequest>;
    requestDeserialize: grpc.deserialize<proto_books_pb.GetBookRequest>;
    responseSerialize: grpc.serialize<proto_books_pb.Book>;
    responseDeserialize: grpc.deserialize<proto_books_pb.Book>;
}

export const BookServiceService: IBookServiceService;

export interface IBookServiceServer extends grpc.UntypedServiceImplementation {
    getBook: grpc.handleUnaryCall<proto_books_pb.GetBookRequest, proto_books_pb.Book>;
}

export interface IBookServiceClient {
    getBook(request: proto_books_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: proto_books_pb.Book) => void): grpc.ClientUnaryCall;
    getBook(request: proto_books_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_books_pb.Book) => void): grpc.ClientUnaryCall;
    getBook(request: proto_books_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_books_pb.Book) => void): grpc.ClientUnaryCall;
}

export class BookServiceClient extends grpc.Client implements IBookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getBook(request: proto_books_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: proto_books_pb.Book) => void): grpc.ClientUnaryCall;
    public getBook(request: proto_books_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_books_pb.Book) => void): grpc.ClientUnaryCall;
    public getBook(request: proto_books_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_books_pb.Book) => void): grpc.ClientUnaryCall;
}
