interface WorkCardProps {
  title: string;
  description: string;
  tags: any;
  src: string;
  link: string;
}

export const WorkCard = ({
  title,
  description,
  tags,
  src,
  link,
}: WorkCardProps) => {
  return <div>WorkCard</div>;
};
