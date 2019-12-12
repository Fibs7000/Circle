function stringLiterals<T extends string>(args: T[]): T[] { return args; }
type ElementType<T extends ReadonlyArray<string>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;


function createTypeName(name: string, prefix?: string) {
  const replaceRegex = /([A-Z])/g;
  const typeName = name
    .replace(replaceRegex, '_$1')
    .toUpperCase()
    .replace(/^_/, '');
  const typeVal = prefix
    ? prefix + '/' + typeName.toLowerCase()
    : typeName.toLowerCase();
    return {typeName, typeVal};
}



export function createTypes(
  types: [string, boolean?][],
  prefix = ''
) {

  var finalTypes = {};
  for (const [name, async] of types) {
    if (async) {
        var {typeName, typeVal} = createTypeName(name + "Success" , prefix);
        finalTypes[typeName] = typeVal;
        var {typeName, typeVal} = createTypeName(name + "Failure" , prefix);
        finalTypes[typeName] = typeVal;
        var {typeName, typeVal} = createTypeName("Request"+name , prefix);
        finalTypes[typeName] = typeVal;
    } else {
        const {typeName, typeVal} = createTypeName(name, prefix);
        finalTypes[typeName] = typeVal;
    }
  }
  type retType = {[key in keyof typeof finalTypes]: string};
  return finalTypes as retType;
}
