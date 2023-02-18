import { useState } from "react";

const Section = ({ title, desc,isVisible,setIsVisible}) => {
  //const [isVisible, setIsVisible] = useState();
console.log(isVisible)
  return (
    <div className="p-2 m-2 border border-black">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible();
          }}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible();
          }}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible}
      {isVisible && <p>{desc}</p>}
    </div>
  );
};
const Instamart = () => {
    const [visibleSection,setVisibleSection]=useState()
  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-3xl flex justify-center">
        Instamart
      </h1>
      <Section
        title={"About Instamast"} 
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        } isVisible={visibleSection === "about"} setIsVisible={()=>setVisibleSection(visibleSection==="about"?"":"about")}
      ></Section>
      <Section
        title={"body Instamart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        } isVisible={visibleSection === "body"} setIsVisible={()=>setVisibleSection(visibleSection==="body"?"":"body")}
      ></Section>

      <Section
        title={"Careers Instamart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        } isVisible={visibleSection === "careers"} setIsVisible={()=>setVisibleSection(visibleSection==="careers"?"":"careers")}
      ></Section>
    </div>
  );
};

export default Instamart;
