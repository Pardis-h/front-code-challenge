function Card(props) {
  const { firstName, lastName, gender, avatar } = props;
  return (
    <div className="flex items-center gap-4 shadow-md rounded-lg py-4 px-3 bg-gray-50 w-full md:w-72">
      <img
        src={`/avatars/${gender}/${avatar}.png`}
        alt="avatar"
        className={"w-10 md:w-14 rounded-full"}
      />
      <p>{`${firstName} ${lastName}`}</p>
    </div>
  );
}

export default Card;
