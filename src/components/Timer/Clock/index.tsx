import style from "./Clock.module.scss"

interface IProps {
  time?: number
}

export default function Clock({ time = 0 }: IProps) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteTens, minuteUnits] = String(minutes).padStart(2, '0')
  const [secondTens, secondUnits] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.clockNumber}>{minuteTens}</span>
      <span className={style.clockNumber}>{minuteUnits}</span>
      <span className={style.clockSeparator}>:</span>
      <span className={style.clockNumber}>{secondTens}</span>
      <span className={style.clockNumber}>{secondUnits}</span>
    </>
  )
}
