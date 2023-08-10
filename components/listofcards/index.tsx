import { SECTIONITEMSTYPE } from "@/constants/listofcards";
import Image from "next/image";

type ListOfCardsProps = {
  data: SECTIONITEMSTYPE[];
};

const ListOfCards: React.FC<ListOfCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {data.map((item, index) => (
        <div key={index} className="">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-sm opacity-50 mt-2">{item.content}</p>
          <Image
            src={item.smallImage}
            alt="small icon"
            width="20"
            height="20"
            className="mt-4"
          />
        </div>
      ))}
    </div>
  );
};

export default ListOfCards;
