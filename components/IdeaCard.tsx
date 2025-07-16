import React from 'react';

interface IdeaCardProps {
  title: string;
  description: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ title, description }) => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg border-l-4 border-primary animate-fade-in">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-text-secondary whitespace-pre-wrap">{description}</p>
    </div>
  );
};

export default IdeaCard;
