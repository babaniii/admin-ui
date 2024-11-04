const Card3 = ({ content }) => {
    return (
      <>
        <div className="bg-white rounded-lg px-20 py-20 shadow-xl">
          {content ? <p>{content}</p> : null}
        </div>
      </>
    );
  };
  
  export default Card3;
  