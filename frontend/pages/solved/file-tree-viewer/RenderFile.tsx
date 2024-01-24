import styles from '@/pages/solved/file-tree-viewer/styles.module.css'

export default function RenderFile({name, level = 0}: {name: string, level?: number}) {
  return <div className={styles.clickable} style={{marginLeft: 10 * level}}>📄 {name}</div>
}
