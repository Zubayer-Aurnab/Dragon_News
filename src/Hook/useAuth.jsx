
import { useContext } from "react";
import { AuthProvider } from "../Context-Api/Provider";


const useAuth = () => {
    const ALL = useContext(AuthProvider)
    return ALL
};

export default useAuth;