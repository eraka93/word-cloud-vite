Word Cloud Challenge

This is a [Vite.js](https://vitejs.dev/) project bootstrapped with `npm create vite@latest`.

## Getting Started

You will need to install git and node on your machine

First, need to clone project to your machine

```bash
git clone https://github.com/eraka93/word-cloud-vite.git
```

Then, move to project folder and install all dependecy

```bash
cd word-cloud-vite
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result

## About task

Create a word cloud that displays the topics in the topics.json file

I have created two options for displaying topics, which can be toggled using the Switch button from the Ant Design collection.

The first option is implemented using the `react-tagcloud` library. The Tag-cloud option displays topics in a line shape with varying font sizes and colors based on the parameters of volume and sentimentScore.

The second option is implemented using the `react-d3-cloud` library. The Word-cloud option displays topics in a cloud shape, but I wasn't able to customize the styling of each word individually.

The page is divided into two columns, with topics listed on the left-hand side and information about each topic displayed on the right-hand side after it is clicked.

All topics are retrieved from the `topics.json` file located in the `public` folder.
Topics listed with `ListTopic` component from `components/ListTopics.js`
Infomation of topic displayed with `Details` component from `components/Details.js`
