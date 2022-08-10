import '../App.css';
import Right from './Right';
import Left from './Left';

const Hel = () => {
  return (
    <>
    <img src="https://images.unsplash.com/photo-1605557202138-097824c36ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHwxNTEzNTI2N3x8fHx8fHwxNjYwMTE2ODgx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" className="image" />
    <div className="hel">
      <Left/>
      <Right/>
    </div>
    </>
  )
}

export default Hel;
