/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Details = ({ selectedTopic }) => {
   const { label, sentiment } = selectedTopic
   const sum = (sentiment?.negative ?? 0) + (sentiment?.positive ?? 0) + (sentiment?.neutral ?? 0)

   return (
      <div className="details">
         <div className="detailsText">Information on topic "{label}":</div>
         <div className="detailsText">Total Mentions: {sum}</div>
         <div>Postive Mentions: <span style={{ color: 'green' }}>{sentiment?.positive ?? 0}</span></div>
         <div>Neutral Mentions: {sentiment?.neutral ?? 0}</div>
         <div>Negative Mentions: <span style={{ color: 'red' }}>{sentiment?.negative ?? 0}</span></div>
      </div>
   )
}

export default Details 