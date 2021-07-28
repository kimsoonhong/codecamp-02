// import database from "mime-db";
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./postgres/Board.postgres";
import Product from "./postgres/product.postgres";
import { argsToArgsConfig } from "graphql/type/definition";

const typeDefs = gql`
	input UpdateBoardInput {
		title: String
		age: Int
	}

	input CreateProductInput {
		name: String
		detail: String
		price: Int
	}

	input UpdateProductInput {
		name: String
		detail: String
		price: Int
	}

	type Board {
		number: Int
		writer: String
		title: String
		age: Int
	}

	type Product {
		_id: String
		seller: String
		name: String
		detail: String
		price: Int
	}

	type Query {
		fetchBoards: [Board]
		fetchBoard(number: Int!): Board
		fetchProducts: [Product]
		fetchProduct(productId: ID!): Product
	}
	type Mutation {
		createBoard(writer: String!, title: String!, age: Int!): Boolean
		updateBoard(number: Int!, updateBoardInput: UpdateBoardInput!): Boolean
		deleteBoard(number: Int!): Boolean
		createProduct(
			seller: String!
			createProductInput: CreateProductInput!
		): Boolean
		updateProduct(
			productId: ID!
			updateProductInput: UpdateProductInput!
		): Boolean
		deleteProduct(productId: ID!): Boolean
	}

	#주석
`;

const resolvers = {
	Query: {
		fetchBoard: (_: any, args: any) => {
			//한개의 데이터 꺼내어 주기
			Board.findOne({ where: { number: args.number, deletedAt: null } });
		},

		fetchBoards: () => {
			//데이터 꺼내서 프론트 엔드에 주기
			return Board.find({ where: { deletedAt: null } });
		},

		fetchProduct: (_: any, args: any) => {
			Product.findOne({ where: { productID: args.string, deletedAt: null } });
		},

		fetchProducts: () => {
			return Product.find({ where: { deletedAt: null } });
		},
	},

	Mutation: {
		// 보드생성
		createBoard: async (_: any, args: any) => {
			//데이터 만들고 , 결과를 프론트엔드에 주기

			try {
				await Board.insert({
					writer: args.writer,
					title: args.title,
					age: args.age,
				});
				return true;
			} catch (error) {
				console.log("error.message");
			}
			return true;
		},

		createProduct: async (_: any, args: any) => {
			try {
				await Product.insert({
					seller: args.seller,
					name: args.createProductInput.name,
					detail: args.createProductInput.detail,
					price: args.createProductInput.price,
				});
				return true;
			} catch (error) {
				console.log(error);

				throw new Error("sfasf");
			}
			return true;
		},

		//보드 수정
		updateBoard: (_: any, args: any) => {
			Board.update(
				{ number: args.number },
				{
					title: args.updateBoardInput.title,
					age: args.updateBoardInput.age,
				}
			); //조건, 바꿀내용
			return true;
		},

		updateProduct: (_: any, args: any) => {
			Product.update(
				{ _id: args.productId },
				{
					name: args.updateProductInput.name,
					detail: args.updateProductInput.detail,
					price: args.updateProductInput.pric,
				}
			);
			return true;
		},

		//보드삭제
		deleteBoard: (_: any, args: any) => {
			Board.update({ number: args.number }, { deletedAt: new Date() });
			return true;
		},

		deleteProduct: (_: any, args: any) => {
			Product.update({ _id: args.productId }, { deletedAt: new Date() });
			return true;
		},
	},
};

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
});

createConnection({
	type: "postgres",
	database: "postgres",
	username: "postgres",
	password: "postgres2021",
	port: 5008,
	host: "34.64.71.71",
	entities: [__dirname + "/postgres/*.postgres.ts"],
	logging: true,
	synchronize: true,
}).then(() => {
	//연결 성공시 실행
	console.log("접완!");
	server.listen({ port: 4000 });
});
