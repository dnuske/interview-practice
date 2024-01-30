import Link from 'next/link'

const paths = [
  'file-tree-viewer',
  'hooks',
  'market',
  'signup',
  'sudoku',
  'tetris',
  'questionnaire'
]

export default function Home() {
  return (
    <div style={{ padding: '20px', margin: '20px' }}>
      <h1> React Challenges </h1>
      <ol>
      { paths.map((path,i)=> (
        <li key={i} style={{ margin: '10px' }}>
          <Link href={`/challenges/${path}`}>{path}</Link>
        </li>
      ))}
      </ol>
      <h1> Solved React Challenges </h1>
      <ol>
        <li style={{ margin: '10px' }}>
          <Link href={`/solved/file-tree-viewer`}>file-tree-viewer</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link href={`/solved/hooks`}>hooks</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link href={`/solved/tetris`}>tetris</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link href={`/solved/shopping-cart`}>shopping cart</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link href={`/solved/market`}>market</Link>
        </li>
      </ol>
    </div>
  )
}
