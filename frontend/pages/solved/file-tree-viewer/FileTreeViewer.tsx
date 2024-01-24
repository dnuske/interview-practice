import styles from "@/pages/solved/file-tree-viewer/styles.module.css"
import {FileType} from "./types";
import RenderDirectory from "./RenderDirectory";
import RenderFile from "./RenderFile";

export default function FileTreeViewer({tree}) {

  return <div className={styles.container}>
    <div className={styles.tree}>
      {tree.map(i => {
        if (i.type === FileType.DIRECTORY) return <RenderDirectory name={i.name} children={i.children}/>
        if (i.type === FileType.FILE) return <RenderFile name={i.name}/>
      })}
    </div>
    <div className={styles.display}>&nbsp;</div>
  </div>

}
