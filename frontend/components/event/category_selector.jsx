import React from 'react';

export default class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { topics, subtopics } = this.props;
    const { topicId, subtopicId } = this.props;

    const topicList = Object.keys(topics).map(key => {
      const topic = topics[key];
      return (
        <option key={key} value={topic.id}>
          {topic.name}
        </option>
      );
    });

    const subtopicList = subtopics.map(subtopic => {
      return (
        <option key={subtopic.id} value={subtopic.id}>
          {subtopic.name}
        </option>
      );
    });

    let hideSubtopic = "";
    if (topicId === "0" || topicId === "14") {
      hideSubtopic = 'hiddenSelector';
    }

    return (
      <div className="event-detail-container">
        <h3>event topic</h3>
        <div className="flex">
          <div className="topic-selector-container">
              <select id="event-form-topic"
                      value={topicId}
                      onChange={this.props.onTopicChange}>
                <option value="0">Select a topic</option>
                {topicList}
              </select>
              <span className="event-form-error"></span>
          </div>
          <div className="subtopic-selector-container">
            <div className={`${hideSubtopic}`}>
              <select id="event-form-subtopic"
                      value={subtopicId}
                      onChange={this.props.onSubtopicChange}>
                <option value="0">Select a sub-topic</option>
                {subtopicList}
              </select>
              <span className="event-form-error"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
