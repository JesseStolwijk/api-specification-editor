import React from "react";
import spec from "./spec.json";

interface Specification {
  paths: any;
}

interface IPath {
  value: string;
  method: string;
  summary?: string;
  description?: string;
  operationId: string;
  tags: string[];
}

const SpecEditor = () => {
  const specification: IPath[] = Object.keys(spec.paths).flatMap((path) =>
    Object.keys((spec.paths as any)[path]).map((method) => {
      const { summary, description, operationId, tags } = (spec.paths as any)[
        path
      ][method];

      return {
        value: path,
        method: method.toUpperCase(),
        summary,
        description,
        operationId,
        tags: tags ?? [],
      };
    })
  );

  const groupedPaths = spec.tags.map((tag) => ({
    ...tag,
    paths: specification.filter((path) => path.tags?.includes(tag.name)),
  }));

  console.log(groupedPaths);

  return (
    <div>
      {groupedPaths.map((group: any) => (
        <div>
          <h1>{group.name}</h1>
          <p>{group.description}</p>
          {group.paths.map((path: IPath) => (
            <Path
              value={path.value}
              method={path.method}
              description={path.description}
            />
          ))}
        </div>
      ))}
      <button onClick={() => {}}>New tag</button>
    </div>
  );
};

const Path: React.FC<{ value: string; method: any; description?: string }> = ({
  value,
  method,
  description,
}) => {
  return (
    <div className="p-2 shadow flex">
      <div className="w-16">{method}</div>
      <h1 className="px-2 font-semibold">{value}</h1>
      {description && <div className="px-2">{description}</div>}
    </div>
  );
};

export default SpecEditor;
