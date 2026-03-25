import { useState, useEffect } from 'react';

const TypewriterText = ({ titles = ['Frontend Developer', 'UI/UX Developer', 'Project Manager'] }) => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer;

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
          setSpeed(100);
        }, speed);
      } else {
        // Finished typing, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
          setSpeed(50);
        }, 1500);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
          setSpeed(50);
        }, speed);
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setSpeed(100);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, titleIndex, isDeleting, speed, titles]);

  return (
    <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 min-w-[380px]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
