export type FILE = "FILE";
export type DIRECTORY = "DIRECTORY";

export enum FileType {
  FILE = "FILE",
  DIRECTORY = "DIRECTORY"
}

export interface File {
  name: string;
  type: FILE; // Or FileType.FILE if using the enum approach
}

export interface Directory {
  name: string;
  type: DIRECTORY; // Or FileType.DIRECTORY if using the enum approach
  children: Array<File | Directory>;
}

export type Tree = Array<File | Directory>;