import { useState } from 'react'

import { Switch } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons'

import ListTopics from './components/ListTopics';
import Details from './components/Details';

function App() {
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [modeCloud, setModeCloud] = useState('tag')

  const onChange = () => {
    setModeCloud(modeCloud == 'tag' ? 'word' : 'tag')
  }

  return (
    <>
        <main className="main">

        <h1 className="title">
          My Topics Challenge
        </h1>

        <Switch onChange={onChange} defaultChecked unCheckedChildren={'WORD-CLOUD'} checkedChildren={'TAG-CLOUD'} />


        <div className="content">
          <ListTopics selectedID={selectedTopic.id} setSelectedTopic={setSelectedTopic} mode={modeCloud} />
          <Details selectedTopic={selectedTopic} />
        </div>

      </main>
      
      <footer className="footer">

        <a
          href="https://www.linkedin.com/in/milan-erakovic-910486236/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Milan Erakovic
        </a>
        <LinkedinOutlined />
      </footer>
    </>
  )
}

export default App
