import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useUserReducer } from "../hooks/useUserReducer.jsx"

export const Home = () => {

  	const {store, dispatch} =useGlobalReducer();
	const { userStore, userDispacht } = useUserReducer ();
	
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<p>{userStore.user.name}</p>
		</div>
	);
}; 