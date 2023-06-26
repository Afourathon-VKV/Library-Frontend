import { Design } from "./Common/Design";
import { SignIn } from "./Login/SignIn";

export default function Login(){
    return(
        <div className="grid grid-cols-1 nlg:grid-cols-2">
            <Design/>
            <SignIn/>
        </div>
    )
}