import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Card({item}){
    const [markdownText, setMarkdownText] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetch(item.markdown)
            .then(response => response.text())
            .then(text => setMarkdownText(text))
            .catch(error => console.error(error));
    }, [item]);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="card-container" onClick={handleCardClick}>
     <img className={`card-image ${isExpanded ? 'expanded' : ''}`} src={item.image} alt="" />
            <div className='card-story-area'>
            <h3 className='card-title'>{item.title}</h3>
            
            {isExpanded && (
              <div className='card-md'>
                <ReactMarkdown>
                    {markdownText}
                </ReactMarkdown> 
              </div>
             
            )}
            <p>{isExpanded ? 'click to close' : 'click to expand'}</p>
             </div>
        </div>
    );
}
Card.propTypes = {
    item: PropTypes.shape({
      markdown: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Card;
