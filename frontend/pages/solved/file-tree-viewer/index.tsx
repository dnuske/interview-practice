import {FileType, Tree} from "./types";
import FileTreeViewer from "./FileTreeViewer";

const tree: Tree = [
  {
    name: "coderbooks", type: FileType.DIRECTORY, children: [
      {name: "coderbook.pdf", type: FileType.FILE},
      {name: "format.txt", type: FileType.FILE},
    ]
  },
  {
    name: "data", type: FileType.DIRECTORY, children: [
      {
        name: "aggregate", type: FileType.DIRECTORY, children: [
          {name: "aggregates.tab", type: FileType.FILE}
        ]
      },
      {
        name: "raw", type: FileType.DIRECTORY, children: [
          {name: "output_data.tab", type: FileType.FILE},
          {name: "quality_data.tab", type: FileType.FILE},
          {name: "file with very long title that serves as a description of it's content.tab", type: FileType.FILE}
        ]
      },
      {name: "README.txt", type: FileType.FILE}
    ]
  },
  {name: "empty dir", type: FileType.DIRECTORY, children: []}
];

export default function Main() {

  return <FileTreeViewer tree={tree}/>

}
