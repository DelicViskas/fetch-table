import classes from "@/components/FetchTable/ObjTable.module.css";

export default function ObjTable({ data, config }) {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {config.columns.map(c => <th key={c.title}>{c.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(obj => <tr key={obj.id}>
          {config.columns.map(({ title, content }) => <td key={title}>{content(obj)}</td>)}
        </tr>)}
      </tbody>
    </table>
  )
}