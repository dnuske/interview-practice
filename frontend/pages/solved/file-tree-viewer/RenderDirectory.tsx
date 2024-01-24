import {useState} from "react";
import styles from '@/pages/solved/file-tree-viewer/styles.module.css'
import RenderFile from "./RenderFile";
import {Directory, File, FileType} from "./types";

export default function RenderDirectory({name, children = [], level = 0}: {name: string, children?: Array<File | Directory>, level?: number}) {

  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  }

  return <div style={{marginLeft: 10 * level}} >
    <div
      className={children.length > 0 ? styles.clickable : styles.treeItem}
      onClick={handleClick}
    >
      🗂️ {name}
    </div>
    {expand && children.map(element => {
      if (element.type === FileType.DIRECTORY) return <RenderDirectory name={element.name} children={element.children}
                                                              level={level + 1}/>
      if (element.type === FileType.FILE) return <RenderFile name={element.name} level={level + 1}/>
    })}
  </div>
}


