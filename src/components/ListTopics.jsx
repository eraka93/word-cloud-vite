/* eslint-disable react/prop-types */
import WordCloud from 'react-d3-cloud'
import { scaleLinear } from 'd3-scale'
import { TagCloud } from 'react-tagcloud'

import topicsData from './../topics.json'

const ListTopics = ({ selectedID, setSelectedTopic, mode }) => {
   const topics = topicsData.topics

   //data for WordCloud
   const dataCloud = topics.map((topic) => ({
      text: topic.label,
      value: topic.volume,
      sentimentScore: topic.sentimentScore,
      topic: topic
   }));

   // data for TagCloud
   const dataTag = topics.map((topic) => ({
      value: topic.label,
      count: topic.volume,
      topic: topic
   }))

   const getColor = (sentimentScore) => {
      return sentimentScore > 60 ? "#2ca02c" : sentimentScore < 40 ? "#d62728" : "#7f7f7f"
   }

   const fontSizes = [18, 20, 24, 36, 48, 50]
   const minVolume = Math.min(...topics.map(topic => topic.volume))
   const maxVolume = Math.max(...topics.map(topic => topic.volume))

   const fontSizeScale = scaleLinear()
      .domain([minVolume, maxVolume])
      .range([0, fontSizes.length - 1])
      .clamp(true);

   const getFontSize = (volume) => {
      const fontSizeIndex = Math.floor(fontSizeScale(volume));
      return fontSizes[fontSizeIndex];
   }

   const customRenderer = (tag) => {
      const color = getColor(tag.topic.sentimentScore)
      const fontSize = getFontSize(tag.count)
      return (
         <span style={{ color: color, fontSize: fontSize, padding: 10, cursor: 'pointer', textDecorationLine: selectedID == tag.topic.id ? 'underline' : 'none' }}>{tag.value}</span>
      )
   }

   return (
      <div className="topics">
         {mode == 'tag' &&
            <TagCloud
               maxSize={fontSizes[5]}
               minSize={fontSizes[0]}
               tags={dataTag}
               onClick={(tag) => {
                  setSelectedTopic(tag.topic)
               }}
               renderer={customRenderer}
            />}
         {mode == 'word' &&
               <div className="wordCloud">
                  <WordCloud
                     data={dataCloud}
                     font={'Segoe UI'}
                     rotate={0}
                     padding={20}
                     height={200}
                     fontSize={(word) => getFontSize(word.value)}
                     fill={(word) => getColor(word.sentimentScore)}
                     onWordClick={(event, d) => {
                        setSelectedTopic(d.topic)
                     }}
                  />
               </div>
         }
      </div>
   )
}

export default ListTopics 