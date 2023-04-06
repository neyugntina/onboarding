import { option } from "@chakra-ui/react";
import axios from "axios";
import { FC } from "react";

type GetDropDownProps = {
  name: string;
  description: string;
  id: number;
};

export const GetDropDown: FC<GetDropDownProps> = ({
  name,
  description,
  id,
}) => {
  return (
    <>
      <option value={id}>
        {name}
        <i>{description}</i>
      </option>
    </>
  );
};

export const getOne = async () => {
  const response = await axios.get(`http://localhost:3333/api/items/${id}`);
  return response.data;
};

// export const GetOne2 = async (id: { id: any }) => {
//   const response = await axios.get(`http://localhost:3333/api/items/${id}`);
//   return response.data;
// };
//  {
//    data &&
//      data.map((d, i) => (
//        <option key={`item-${i}`} value={d.id}>
//          {d.name}
//        </option>
//      ));
//  }
