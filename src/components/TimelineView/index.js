import Course from '../CourseTimelineCard'
import Project from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderList = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <Project key={eachItem.id} send={eachItem} />
    }
    return <Course key={eachItem.id} way={eachItem} />
  }
  return (
    <div className="main">
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <div>{timelineItemsList.map(eachItem => renderList(eachItem))}</div>
    </div>
  )
}
export default TimelineView
