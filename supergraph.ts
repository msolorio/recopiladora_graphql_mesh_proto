export default "\nschema\n  @link(url: \"https://specs.apollo.dev/link/v1.0\")\n  @link(url: \"https://specs.apollo.dev/join/v0.3\", for: EXECUTION)\n  \n  \n  \n  \n  \n  @link(\n  url: \"https://the-guild.dev/graphql/mesh/spec/v1.0\"\n  import: [\"@example\", \"@httpOperation\", \"@transport\", \"@extraSchemaDefinitionDirective\"]\n)\n{\n  query: Query\n  \n  \n}\n\n\n  directive @join__enumValue(graph: join__Graph!) repeatable on ENUM_VALUE\n\n  directive @join__field(\n    graph: join__Graph\n    requires: join__FieldSet\n    provides: join__FieldSet\n    type: String\n    external: Boolean\n    override: String\n    usedOverridden: Boolean\n  ) repeatable on FIELD_DEFINITION | INPUT_FIELD_DEFINITION\n\n  directive @join__graph(name: String!, url: String!) on ENUM_VALUE\n\n  directive @join__implements(\n    graph: join__Graph!\n    interface: String!\n  ) repeatable on OBJECT | INTERFACE\n\n  directive @join__type(\n    graph: join__Graph!\n    key: join__FieldSet\n    extension: Boolean! = false\n    resolvable: Boolean! = true\n    isInterfaceObject: Boolean! = false\n  ) repeatable on OBJECT | INTERFACE | UNION | ENUM | INPUT_OBJECT | SCALAR\n\n  directive @join__unionMember(graph: join__Graph!, member: String!) repeatable on UNION\n\n  scalar join__FieldSet\n\n\n  directive @link(\n    url: String\n    as: String\n    for: link__Purpose\n    import: [link__Import]\n  ) repeatable on SCHEMA\n\n  scalar link__Import\n\n  enum link__Purpose {\n    \"\"\"\n    `SECURITY` features provide metadata necessary to securely resolve fields.\n    \"\"\"\n    SECURITY\n\n    \"\"\"\n    `EXECUTION` features provide metadata necessary for operation execution.\n    \"\"\"\n    EXECUTION\n  }\n\n\n\n\n\n\n\nenum join__Graph {\n  TODO_API @join__graph(name: \"todoApi\", url: \"http://localhost:3000\") \n}\n\ndirective @example(subgraph: String, value: ObjMap)  repeatable on FIELD_DEFINITION | OBJECT | INPUT_OBJECT | ENUM | SCALAR\n\ndirective @httpOperation(\n  subgraph: String\n  path: String\n  operationSpecificHeaders: [[String]]\n  httpMethod: HTTPMethod\n  isBinary: Boolean\n  requestBaseBody: ObjMap\n  queryParamArgMap: ObjMap\n  queryStringOptionsByParam: ObjMap\n  jsonApiFields: Boolean\n  queryStringOptions: ObjMap\n) repeatable on FIELD_DEFINITION\n\ndirective @transport(\n  subgraph: String\n  kind: String\n  location: String\n  headers: [[String]]\n  queryStringOptions: ObjMap\n  queryParams: [[String]]\n) repeatable on SCHEMA\n\ndirective @extraSchemaDefinitionDirective(directives: _DirectiveExtensions)  repeatable on OBJECT\n\nscalar ObjMap @join__type(graph: TODO_API) \n\nscalar _DirectiveExtensions @join__type(graph: TODO_API) \n\ntype Query @extraSchemaDefinitionDirective(\n  directives: {transport: [{subgraph: \"todoApi\", kind: \"rest\", location: \"http://localhost:3000\", headers: [[\"Content-Type\", \"application/json\"]]}]}\n) @join__type(graph: TODO_API)  {\n  todos: [query_todos_items] @httpOperation(subgraph: \"todoApi\", path: \"/todos\", httpMethod: GET) \n  todo(id: String) : query_todo @httpOperation(subgraph: \"todoApi\", path: \"/todos/{args.id}\", httpMethod: GET) \n}\n\ntype query_todos_items @join__type(graph: TODO_API)  {\n  id: Int\n  name: String\n  content: String\n  author: query_todos_items_author\n}\n\ntype query_todos_items_author @join__type(graph: TODO_API)  {\n  first: String\n  last: String\n}\n\ntype query_todo @example(\n  subgraph: \"todoApi\"\n  value: \"{\\\"id\\\":0,\\\"name\\\":\\\"TodoName\\\",\\\"content\\\":\\\"TodoContent\\\",\\\"author\\\":{\\\"first\\\":\\\"FirstName\\\",\\\"last\\\":\\\"LastName\\\"}}\"\n) @join__type(graph: TODO_API)  {\n  id: Int\n  name: String\n  content: String\n  author: query_todo_author\n}\n\ntype query_todo_author @join__type(graph: TODO_API)  {\n  first: String\n  last: String\n}\n\nenum HTTPMethod @join__type(graph: TODO_API)  {\n  GET @join__enumValue(graph: TODO_API) \n  HEAD @join__enumValue(graph: TODO_API) \n  POST @join__enumValue(graph: TODO_API) \n  PUT @join__enumValue(graph: TODO_API) \n  DELETE @join__enumValue(graph: TODO_API) \n  CONNECT @join__enumValue(graph: TODO_API) \n  OPTIONS @join__enumValue(graph: TODO_API) \n  TRACE @join__enumValue(graph: TODO_API) \n  PATCH @join__enumValue(graph: TODO_API) \n}\n    "