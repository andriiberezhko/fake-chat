import { MessageArea } from "../Components/MessageArea/MessageArea";
import { useParams } from "react-router-dom";
import { useGetContactByIdQuery } from "../service/serviceApi";
import { TitleMessageList } from "../Components/TitleMessageList/TitleMessageList";

export const Dialog = () => {
  const { id } = useParams();
  const contact = useGetContactByIdQuery(id).data;
  // console.log(contact);

  return (
    <>
      {contact ? (
        <TitleMessageList avatar={contact.avatar} name={contact.name} />
      ) : (
        <TitleMessageList />
      )}
      {contact && (
        <MessageArea avatar={contact.avatar} message={contact.message} />
      )}
    </>
  );
};
