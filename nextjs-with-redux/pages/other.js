import Page from "../components/Page";
import { increment } from "../store/counterSlice";
import { wrapper } from "../store/store";
import { addUser } from "../store/usersSlice";
const Other = (props) => {
  return <Page title="Other Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(increment());
  
  const res = await fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * (10) + 1)}`);
  const {data} = await res.json();
  store.dispatch(addUser(`${data.first_name} ${data.last_name}`))
});

export default Other;
