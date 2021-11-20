import { useNavigate } from 'react-router'
import './MyWeekRating.css'

const MyWeekRating = () => {
  let navigate = useNavigate()
  const week = ['일', '월', '화', '수', '목', '금', '토']

  // 시간복잡도 보다 공간복잡도를 올리는 편이 낫다
  const randomArr = [
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
  ]

  const day = new Date().getDay()
  console.log(day)
  let temp = []
  temp.push(...week.slice(day, week.length))
  temp.push(...week.slice(0, day))
  console.log(temp)
  return (
    <div className="main--wrapper">
      {temp.map((el, index) => {
        return (
          <div className="main—rate" key={index}>
            <p className="rate—date">{el}</p>
            {[0, 1, 2, 3, 4].map((e, i) => {
              return (
                <div className = 'circles'>
                <div
                  key={i}
                  className={
                    randomArr[index] < i + 1
                      ? 'rate—circle__grey'
                      : 'rate—circle__yellow'
                  }
                ></div>
                </div>
              )
            })}
            <div
              className="rate—arrow"
              onClick={() => navigate(`/detail/${el}`)}
            ></div>
          </div>
        )
      })}
    </div>
  )
}

export default MyWeekRating