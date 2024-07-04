interface MissionItemProps {
  text: string;
  order: number;
}

const MissionItem: React.FC<MissionItemProps> = ({ text, order }) => {
  return (
    <li className="flex items-center gap-[30px] lg:first:max-w-[413px] lg:last:max-w-[570px]">
      <p className="font-black text-[200px] text-gray-f2">{order}</p>
      <p className="text-lg leading-relaxed">{text}</p>
    </li>
  );
};

export default MissionItem;
