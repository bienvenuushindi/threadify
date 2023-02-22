type props = { text: string }

function TweetComp({text}: props) {
  return (
    <div className="my-6 p-3 border w-full bg-white rounded">
      <div style={{overflowWrap: 'break-word'}} className="text-gray-600">{text}</div>
    </div>
  );
}

export default TweetComp;