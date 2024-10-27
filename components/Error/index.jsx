import classes from '@/components/Error/index.module.css'

export default function Error({error}) {
  return (
    <div className={classes.error}>
      {error.toString()}
    </div>
  )
}