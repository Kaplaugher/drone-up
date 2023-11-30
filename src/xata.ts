// Generated by Xata Codegen 0.28.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "folders",
    columns: [
      { name: "name", type: "string", unique: true },
      { name: "userId", type: "string", notNull: true, defaultValue: "null" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Folders = InferredTypes["folders"];
export type FoldersRecord = Folders & XataRecord;

export type DatabaseSchema = {
  folders: FoldersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Kyle-s-workspace-je1nsh.us-east-1.xata.sh/db/drone-up",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
