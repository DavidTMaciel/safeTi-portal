// schema.ts
import { GraphQLFieldConfigMap, GraphQLObjectType, GraphQLSchema } from 'graphql';

class AppGraphQLSchema {
  private schema: GraphQLSchema;

  constructor() {
    this.schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
        
        })
      }),



      mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({

        })
      }),
    });
  }

  public getSchema() {
    return this.schema;
  }
}

export { AppGraphQLSchema };
